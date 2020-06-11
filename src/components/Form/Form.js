import React from 'react';
import './Form.scss';
import axios from 'axios';
import MainHeading from '../Heading/Heading';
import SubHeading from '../Heading/SubHeading';


class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      telefon: '',
      email: '',
      subject: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]:  e.target.value})
  }
  async handleSubmit(e) {
    e.preventDefault();
    const {fname,telefon,email,subject} = this.state;
    const form = await axios.post('../api/form', {
      fname,
      telefon,
      email,
      subject
    });
  }
  render () {
    return  (
      <div  className="container">
      <MainHeading>witaj.</MainHeading>
      <SubHeading>JAK MOŻEMY CI DZISIAJ POMÓC?</SubHeading>
      <form onSubmit={this.handleSubmit} action="/action_page.php">
      <label>Imię i Nazwisko</label>
      <input type="text"  onChange={this.handleChange} id="fname" name="fname" placeholder=""/>
      <label>Telefon</label>
      <input type="text"id="telefon"  onChange={this.handleChange} name="telefon" placeholder=""/>


      <label>Email</label>
      <input type="email"id="email"name="email"placeholder=""  onChange={this.handleChange}/>


      <label>Wiadomość</label>
      <textarea id="subject"name="subject"placeholder=""></textarea>
      <input type="submit"value="Wyślij"/>
      </form>
    </div>
    );

  }
}

export default Form;