import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';



export class Registration extends Component {
    state = {
      name: '',
    email: '',
    password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };
        
    handleSubmit = e => {
        e.preventDefault();
     this.props.onRegister(this.state);
        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const {name, email, password } = this.state;
        const {handleChange} = this
    return (
        <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
    <Form.Label>UserName</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name={name}
                    value={name}
                    onChange={handleChange}
                />
                </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name={email}
                    value={email}
                    onChange={handleChange}
                />
                </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name={password}
                    value={password}
                    onChange={handleChange}

                />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    
    )
  }
}
const mapDispatchToProps = {
    // myProps:
}


export default connect (null, mapDispatchToProps)(Registration);