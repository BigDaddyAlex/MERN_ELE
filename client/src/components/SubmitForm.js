import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";


class SubmitForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    email:'',
  };

  handleChange = event => {
    this.setState({ [event.target.name]:event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email
    }
    axios.post('/api/tasks', data)
      .then(res => {
        window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
      })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="firstname">First name:</Label>
          <Input type="text" name="firstname" id="firstname" placeholder="First name" onChange={this.handleChange} value={this.state.firstname} />
        </FormGroup>
        <FormGroup>
          <Label for="lastname">Last name:</Label>
          <Input type="text" name="lastname" id="lastname" placeholder="Last name" onChange={this.handleChange} value={this.state.lastname}/>
        </FormGroup>
        <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" onChange={this.handleChange} value={this.state.email} />
      </FormGroup>
        <Button>Submit</Button>
      </Form>
      
    );
  }
}

export default SubmitForm;