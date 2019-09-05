import React, { Component } from 'react';
import Day from './Day';

class Calendar extends Component {
    constructor(props){
        super(props);
        this.state = {
            days: props.month[0].days
        };
    }
    days_count () {
        const totalDays = [];
        for(var i=0;i<=this.state.days;i++){
            totalDays.push(<Day key={i} id={i}/>);
        }
        return totalDays;
    }
    render() {
        return (
            <div>
                {this.days_count()}
            </div>            
        );
    }
}
 
export default Calendar;