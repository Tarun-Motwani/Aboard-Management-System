import React from 'react';
import '../CSS/Login.css'
class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value });
  }

  handleSubmit = (event) => {
    alert(`Thank you for your message, ${this.state.name}! We will get back to you soon.`);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Contact Us</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
          </div>
          <div>
            <label>Message:</label>
            <textarea value={this.state.message} onChange={this.handleMessageChange} />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
export default ContactUs;