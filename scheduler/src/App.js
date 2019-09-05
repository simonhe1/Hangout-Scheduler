import './App.css';
import React, { Component } from 'react';
import Calendar from './Calendar';

class App extends Component {
  state = { 
    Months: [
      {name: 'January',days: 31, weeks: 5},
      {name: 'February',days: 28, weeks: 5},
      {name: 'March',days: 31, weeks: 6},
      {name: 'April',days: 30, weeks: 5},
      {name: 'May',days: 31, weeks: 5},
      {name: 'June',days: 30, weeks: 6},
      {name: 'July',days: 31, weeks: 5},
      {name: 'August',days: 31, weeks: 5},
      {name: 'September',days: 30, weeks: 5},
      {name: 'October',days: 31, weeks: 5},
      {name: 'November',days: 30, weeks: 5},
      {name: 'December',days: 31, weeks: 5},
    ],
  };
  render() { 
    return ( 
      <React.Fragment>
        <Calendar month={this.state.Months}/>
      </React.Fragment>
    );
  }
}
 
export default App;