import React from 'react';
import './contact.styles.scss';
import { Fade, Zoom } from 'react-reveal';

import CustomButton from '../../components/custom-button/custom-button.component';

class ContactPage extends React.Component {
 
    constructor() {
        super();
        this.state = { feedback: '', name: '', email: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div id="contact" className="contact page">
                <Fade bottom>
                    <h2>Contact Me</h2>
                </Fade>
                <form className="contact-form">
                    
                    <div>
                    <Fade bottom cascade>
                        <input type="text" onChange={this.handleChange} name="name" value={this.state.name} placeholder="John Doe" required />
                        <input type="text" onChange={this.handleChange} name="email" value={this.state.email} placeholder="example@email.com" required />
                        <textarea
                            name="feedback"
                            onChange={this.handleChange}
                            placeholder="Message Here"
                            required
                            value={this.state.feedback}
                            style={{width: '100%', height: '150px'}}
                        />
                        </Fade>
                    </div>
                    <Zoom>
                        <CustomButton onClick={this.handleSubmit} inverted={true} >Submit</CustomButton>
                    </Zoom>
                </form>
            </div>
        )
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
      }
    
      handleSubmit(e) {
        e.preventDefault();
        const templateId = 'template_bbhgmOkg';

        this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
      }

      sendFeedback (templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(() => alert("Feedback Submitted Successfully"))
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Email Send Failed:', err))
      }

}

export default ContactPage;