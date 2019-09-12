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
      offSet: 0,
      today: new Date()
    };
    this.handleSwitch = this.handleSwitch.bind(this);
    this.getCurrentMonth = this.getCurrentMonth.bind(this);
  }

  handleSwitch(indexMonth){
    let newMonth = this.state.offSet;
    newMonth = newMonth + indexMonth;
    // console.log(this.getCurrentMonth());
    this.setState({offSet:newMonth});
    console.log('Offset:',this.state.offSet);
  }

  getCurrentMonth(){
    // console.log((this.state.today.getMonth()+this.state.offSet)%12);
    return (this.state.today.getMonth()+this.state.offSet)%12;
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Calendar 
            monthAsString={this.state.months[this.getCurrentMonth()]}
            monthAsNumber={this.getCurrentMonth()}
            year={this.state.today.getFullYear()}
            onSwitch={this.handleSwitch}
          />
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;