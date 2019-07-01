import React from 'react';
// import PropTypes from 'prop-types';

import {
    CardHeader,
    Card,
    Button,
    Row,
    Col,
    Container,
    CardBody,
    Form, FormGroup, Label, Input, FormText

} from 'reactstrap';
import {Route, Link, Redirect, Switch as SW} from 'react-router-dom';

const DEFAULT_USER_NAME = process.env.REACT_APP_USER_NAME;
const DEFAULT_USER_PASSWORD = process.env.REACT_APP_PASSWORD;

export default class Login extends React.Component {
    handleChange = (e) => {

        this.setState({
            ...{[e.target.name]: e.target.value}
        })
    }
    handleSubmit = (e) => {

        if (this.state.username === DEFAULT_USER_NAME && this.state.password === DEFAULT_USER_PASSWORD) {
            localStorage.setItem(process.env.REACT_APP_AUTH_LOCALSTORAGE_KEY, true);
            this.setState({
                isAuthenticated: true
            });
        }
    }

    constructor() {
        super();
        this.state = {
            isAuthenticated: localStorage.getItem(process.env.REACT_APP_AUTH_LOCALSTORAGE_KEY) !== null,
            'username': null,
            'password': null
        }
    }

    render() {
        const style = {
            'margin': '20% auto',
            'float': 'none',
            'marginBottom': '10px',
        };
        if (this.state.isAuthenticated) {
            return <Redirect to='/'/>
        }
        return (

            <Container fluid={false}>

                <Row>
                    <Col sm="4" lg="4" style={style}>
                        <Card className="text-md-center">
                            <CardHeader>Login</CardHeader>

                            <CardBody>
                                <Form>
                                    <FormGroup row>
                                        <Label for="exampleEmail" sm={4}>UserName</Label>
                                        <Col sm={8}>
                                            <Input type="text" name="username" id="userName"
                                                   placeholder="Please enter username" onChange={this.handleChange}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="examplePassword" sm={4}>Password</Label>
                                        <Col sm={8}>
                                            <Input type="password" name="password" id="password"
                                                   placeholder="Please enter password" onChange={this.handleChange}/>
                                        </Col>
                                    </FormGroup>
                                    <Button onClick={this.handleSubmit}>Submit</Button>
                                </Form>


                                {/*: null}*/}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );

    }
}