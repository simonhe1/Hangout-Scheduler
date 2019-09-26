import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Pet extends Component {
    render() { 
        return (
            <React.Fragment>
                <Row>
                    <Col sm={1}>
                        <Button>
                            Add Pet
                        </Button>                    
                    </Col>
                    <Col sm={11}>
                        <table className="table table-bordered">
                            <tbody id="calendar-body">
                                {this.props.pets.map((obj,index) =>{
                                    return <tr key={index}>{obj.name},{obj.age}</tr>
                                })}
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </React.Fragment> 
        );
    }
}
 
export default Pet;