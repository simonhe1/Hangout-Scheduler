import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Calendar from './Calendar';
import Info from './Info';
import Pet from './Pet';

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
      today: new Date(),
      pets: [{name: 'Spike', age: 17},{name: 'Peanut', age: 24}]
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
    return (12+this.state.today.getMonth()+(this.state.offsetMonth%12))%12;
  }

  render() {
    console.log(this.state.pets);
    return (
      <React.Fragment>
        <Router>
          <div className="container-fluid">
            <Navbar 
              userName="Simon"            
            />
            <Switch>
              <Route path="/" exact render={(props) => 
                (<Calendar 
                  monthAsString={this.state.months[this.getCurrentMonth()]}
                  monthAsNumber={this.getCurrentMonth()}
                  year ={this.getCurrentYear()}
                  onSwitch={this.handleSwitch}
                  {...props}/>)}
              />
              <Route path="/info" exact render={(props) => 
                (<Info 
                  {...props}/>)}
              />
              <Route path="/pets" exact render={(props) => 
                (<Pet 
                  pets={this.state.pets}
                  {...props}/>)}
              />          
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}
 
export default App;