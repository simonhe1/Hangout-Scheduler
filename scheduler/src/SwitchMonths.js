import React, { Component } from 'react';
class SwitchMonths extends Component {
    constructor(props){
        super(props);
        this.state = { };
    }

    render() { 
        return (
            <span>
                <button className="btn btn-primary" onClick={() => this.props.switch(-1)}>
                    Previous
                </button>
                <button className="btn btn-secondary" onClick={() => this.props.switch(1)}>
                    Next
                </button>
            </span>
        );
    }
}
 
export default SwitchMonths;