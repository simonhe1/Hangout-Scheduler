import React, { Component } from 'react';
import Day from './Day';
import SwitchMonths from './SwitchMonths';

class Calendar extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         daysView : [],
    //     };
    //     this.makeDays = this.makeDays.bind(this);
    // }

    makeDays(month,year){
        let firstDay = new Date(year, month).getDay();
        let daysInMonth = 32 - new Date(year,month,32).getDate();
        let Days = 1;
        let dayObjs = [];
        for(let i=0;i<5;i++){
            let weekObjs = [];
            for(let j=0;j<7;j++){
                if((i === 0 && j < firstDay) || Days > daysInMonth){
                    weekObjs.push(<Day key={i*j + j} day={0}/>);
                }
                // else if (Days > daysInMonth){ break; }
                else{
                    weekObjs.push(<Day day={Days} key={i*j + j}/>);
                    Days++;
                }
            }
            dayObjs.push(<tr key={"tr" + i}>{weekObjs}</tr>)
        }
        console.log(dayObjs);
        return dayObjs;
    }

    updateCalendar (month,year) {
        const header = (
            <React.Fragment>
            <h1>Calendar</h1>
            <div className="card">
                <h3 className="card-header">{this.props.monthAsString},{this.props.year}</h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tues</th>                        
                            <th>Wed</th>
                            <th>Thurs</th>
                            <th>Fri</th>
                            <th>Sat</th>
                        </tr>
                    </thead>
                    <tbody id="calendar-body">
                        {this.makeDays(month,year)}
                    </tbody>
                </table>
                <SwitchMonths 
                    switch={this.props.onSwitch}
                />
            </div>
            </React.Fragment>
        );
        return header;
    }
    render() {
        return (
            <div>
                {this.updateCalendar(this.props.monthAsNumber,this.props.year)}
            </div>            
        );
    }
}
 
export default Calendar;