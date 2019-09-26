import React, { Component } from 'react';
import './Day.css';
class Day extends Component {
    render() { 
        return (
            <td>
               {this.props.day !== 0 ? this.props.day : ''}
            </td>
        );
    }
}
 
export default Day;