import './App.css';
import React, { Component } from 'react';
import Calendar from './Calendar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      months: [
        "January",
        "Februrary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      offsetMonth: 0,
      offSetYear: 0,
      today: new Date()
    };
    this.handleSwitch = this.handleSwitch.bind(this);
    this.getCurrentMonth = this.getCurrentMonth.bind(this);
  }

  handleSwitch(indexMonth){
    let newMonth = this.state.offsetMonth;
    newMonth = newMonth + indexMonth;
    let newYear = this.state.offSetYear;
    console.log(newMonth);
    newYear = Math.floor((newMonth-12) / 12);
    // console.log(this.getCurrentMonth());
    this.setState(
      {
        offsetMonth:newMonth,
        offSetYear: newYear   
      });
  }

  getCurrentYear(){
    let offsetMonthsToYear = Math.floor((this.state.today.getMonth() + this.state.offsetMonth)/12);
    return this.state.today.getFullYear()+offsetMonthsToYear;
  }

  getCurrentMonth(){
    console.log(`12 + ${this.state.today.getMonth()} + ${this.state.offsetMonth} =`,
    12 + this.state.today.getMonth() + this.state.offsetMonth);
    return (12+this.state.today.getMonth()+(this.state.offsetMonth%12))%12;
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Calendar 
            monthAsString={this.state.months[this.getCurrentMonth()]}
            monthAsNumber={this.getCurrentMonth()}
            year ={this.getCurrentYear()}
            // year={this.state.today.getFullYear()+this.state.offSetYear}
            onSwitch={this.handleSwitch}
          />
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;