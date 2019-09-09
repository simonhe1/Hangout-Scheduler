import React, { Component } from 'react';
import Day from './Day';

class Calendar extends Component {
    constructor(props){
        super(props);
        this.state = {
            monthString: props.monthAsString,
            monthNum: props.monthAsNumber,
            year: props.year
        };
        this.makeDays = this.makeDays.bind(this);
    }
    makeDays(month,year){
        let firstDay = new Date(year, month).getDay();
        let daysInMonth = 32 - new Date(year,month,32).getDate();
        const DayObjs = [];
        let Days = 1;
        for(let i=0;i<6;i++){
            DayObjs.push(<tr key={i}></tr>);
            for(let j=0;j<7;j++){
                console.log(DayObjs);
                if(i === 0 && j < firstDay){
                    DayObjs.push(<Day key={Days}/>);
                }else if (Days > daysInMonth){ break; }
                else{
                    DayObjs.push(<Day day={Days} key={Days}/>);
                }
                Days++;
            }
        }
        return DayObjs;
    }

    updateCalendar (month,year) {
        const header = (
            <React.Fragment>
            <h1>Calendar</h1>
            <div className="card">
                <h3 className="card-header">{this.state.monthString}</h3>
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
            </div>
            </React.Fragment>
        );
        // const totalDays = [];
        // for(var i=0;i<=this.state.days;i++){
        //     if(i % 7 === 0){ 
        //         totalDays.push(<div className="row" key={i}></div>);
        //     }
        //     totalDays.push(
        //     <div className="col-xs-4">
        //         <Day key={i} id={i}/>
        //     </div>

        //     );
        // }
        // return totalDays;
        return header;
    }
    render() {
        return (
            <div>
                {this.updateCalendar(this.state.monthNum,this.state.year)}
            </div>            
        );
    }
}
 
export default Calendar;