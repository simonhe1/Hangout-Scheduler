import React, { Component } from 'react';

class Day extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            day: props.day
        }
    }

    render() { 
        return (
            <td>
               {this.state.day}
            </td>
        );
    }
}
 
export default Day;