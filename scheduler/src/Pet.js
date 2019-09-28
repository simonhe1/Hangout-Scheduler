import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import AddPet from './AddPet';

class Pet extends Component {
        constructor(props) {
        super(props);
    }
    render() { 
        return (
            <React.Fragment>
                    <Button href="/pets/addpet">
                         Add Pet
                    </Button>
                    <Switch>
                        <Route path="/pets/addpet" exact render={(props) => 
                            (<AddPet/>)} />          
                    </Switch>                
                    <Row>
                    <Col sm={12}>
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