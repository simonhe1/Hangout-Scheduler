import React, { Component } from 'react';
import './Day.css';
class Day extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         id: props.id,
    //         day: props.day
    //     }
    // }

    render() { 
        return (
            <td>
               {this.props.day !== 0 ? this.props.day : ''}
            </td>
        );
    }
}
 
export default Day;