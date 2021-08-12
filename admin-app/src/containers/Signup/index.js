import React from 'react'
import Layout from '../../components/Layout'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from '../../components/UI/Input';
/**
* @author
* @function Signup
**/

const Signup = (props) => {
    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Input 
                                        Label="FirstName" 
                                        placeholder="First Name" 
                                        value="" 
                                        type="firstname"
                                        onChange={()=>{}}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input 
                                        Label="LastName" 
                                        placeholder="Last Name" 
                                        value="" 
                                        type="lastname"
                                        onChange={()=>{}}
                                    />
                                </Col>
                            </Row>
                                    <Input 
                                        Label="Email" 
                                        placeholder="Email" 
                                        value="" 
                                        type="email"
                                        onChange={()=>{}}
                                    />

                                    <Input 
                                        Label="Password" 
                                        placeholder="Password" 
                                        value="" 
                                        type="password"
                                        onChange={()=>{}}
                                    />
                        
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </Layout>

    )

}

export default Signup