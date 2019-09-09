import './App.css';
import React, { Component } from 'react';
import Calendar from './Calendar';
import SwitchMonths from './SwitchMonths';

class App extends Component {
  state = {
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
  }
  render() {
    let today = new Date();
    return ( 
      <React.Fragment>
        <div className="container-fluid">
          <Calendar 
          monthAsString={this.state.months[today.getMonth()]}
          monthAsNumber={today.getMonth()}
          year={today.getFullYear()}
          />
          <SwitchMonths />
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;