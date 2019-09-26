import React, { Component } from 'react';
class Hour extends Component {
    render() { 
        return ( 
            <tr>
                <td>{this.props.hour}</td>
                <td>_________________</td>
            </tr>
         );
    }
}
 
export default Hour;