import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
class Info extends Component {
    state = {  }
    render() { 
        const nyStates =["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN",
                        "IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV",
                        "NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN",
                        "TX","UT","VT","VA","WA","WV","WI","WY"];
        return ( 
            <Form>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" required/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" required/>
                    </Form.Group>
                </Row>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control 
                        type="tel" 
                        pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})" 
                        placeholder="123-456-7890"
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" required/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" required>
                            {nyStates.map(abrv =>{
                                return <option key={abrv}>{abrv}</option>
                            })}
                        </Form.Control> 
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="number" required/>
                    </Form.Group>
                </Row>
                <Button variant="danger">
                    Change Password
                </Button>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}
 
export default Info;