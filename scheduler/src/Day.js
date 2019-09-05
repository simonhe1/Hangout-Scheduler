import React, { Component } from 'react';

class Day extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.id
        }
        console.log(this.state.id);
    }

    render() { 
        return (
            <button>
               Hello! I'm day number {this.state.id}
               
            </button>
        );
    }
}
 
export default Day;