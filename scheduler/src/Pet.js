import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

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
                        {this.props.pets.map((obj,index) =>{
                            return (
                                <Table key={index} bordered>
                                    <thead>
                                        <tr>
                                            <td colSpan="12" className="text-center">
                                                {obj.name}
                                            </td> 
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-center">{obj.age}</td>
                                            <td className="text-center">{obj.sex}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            );
                        })}
                    </Col>
                </Row>
            </React.Fragment> 
        );
    }
}
 
export default Pet;