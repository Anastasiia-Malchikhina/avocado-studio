
import React from 'react';
import './Form.scss';
import * as emailjs from 'emailjs-com'
import MainHeading from '../Heading/Heading';
import SubHeading from '../Heading/SubHeading';
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
class Formm extends React.Component {
  state = {
    name: '',
    email: '',
    telefon: '',
    subject: '',
    message: '',
    feedback: ''
  }
  handleSubmit(e) {
    e.preventDefault()
    const { name, email, telefon, subject, message } = this.state
    let templateParams = {
      reply_to: email,
      from_name: name,
      email: email,
      telefon: telefon,
      subject: subject,
      message_html: message,
     }
     this.setState({feedback: "success"})
     emailjs.send(
      'gmail',
      'template_OQSW3N3K',
       templateParams,
      'user_dxLm5aXSn7p8J6OF2JEgd'
     ).then(
        this.setState({feedback: "Wiadomość została wysłana"})
    );
     this.resetForm()
    }
    resetForm() {
      this.setState({
        name: '',
        email: '',
        telefon: '',
        subject: '',
        message: '',
      })
    }
    handleChange = (param, e) => {
      this.setState({ [param]: e.target.value })
    }
    
  render () {
    
    return (
      <>
        <div className="form container">
          <MainHeading>witaj.</MainHeading>
          <SubHeading>JAK MOŻEMY CI DZISIAJ POMÓC?</SubHeading>
        <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup controlId="formBasicName">
            <Label className="text-muted">Name</Label>
            <Input required
              type="text"
              name="name"
              value={this.state.name}
              className="text-primary"
              onChange={this.handleChange.bind(this, 'name')}
              placeholder="Name"
            />
          </FormGroup>
          <FormGroup  controlId="formBasicEmail">
            <Label className="text-muted">Email address</Label>
            <Input required
              type="email"
              name="email"
              value={this.state.email}
              className="text-primary"
              onChange={this.handleChange.bind(this, 'email')}
              placeholder="Enter email"
            />
          </FormGroup>
          <FormGroup controlId="formBasicSubject">
            <Label className="text-muted">Telefon</Label>
            <Input 
              type="text"
              name="telefon"
              className="text-primary"
              value={this.state.telefon}
              onChange={this.handleChange.bind(this, 'telefon')}
              placeholder="telefon"
            />
            </FormGroup>
          <FormGroup controlId="formBasicSubject">
            <Label className="text-muted">Subject</Label>
            <Input 
              type="text"
              name="subject"
              className="text-primary"
              value={this.state.subject}
              onChange={this.handleChange.bind(this, 'subject')}
              placeholder="Subject"
            />
          </FormGroup>
          <FormGroup controlId="formBasicMessage">
            <Label className="text-muted">Message</Label>
            <Input required
              type="textarea"
              name="message"
              className="text-primary"
              value={this.state.message}
              onChange={this.handleChange.bind(this, 'message')}
            />
           
          </FormGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p className="feedback">{this.state.feedback}</p>
        </Form>

        </div>
    </> 

    );
  }


}

export default Formm;


