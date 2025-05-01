import { Email } from "./icons/Email"
import { Linkedin } from "./icons/Linkedin"
import { Github } from "./icons/Github"
import { useState, useRef, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import useScrollAnimation from '../hooks/useScrollAnimation'
import '../styles/Contact.css'

const Contact = () => {
  // Initialize animation
  useScrollAnimation('.contact-info', 'animated');
  useScrollAnimation('.contact-form-container', 'animated');
  
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Replace these with your actual EmailJS values after setting up EmailJS
      const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your Service ID
      const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
      const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
      
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      
      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="section-subtitle">Let's discuss your project or opportunity</p>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p className="contact-intro">Feel free to reach out through any of these channels. I'm always open to discussing new projects, opportunities, or partnerships.</p>
            
            <ul className="contact-list">
              <li className="contact-item">
                <div className="contact-icon-wrapper">
                  <Email />
                </div>
                <div className="contact-detail">
                  <span className="contact-label">Email</span>
                  <a href="mailto:ravenbarajas2001@gmail.com">ravenbarajas2001@gmail.com</a>
                </div>
              </li>
              
              <li className="contact-item">
                <div className="contact-icon-wrapper">
                  <Linkedin />
                </div>
                <div className="contact-detail">
                  <span className="contact-label">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/barajasraven/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/barajasraven
                  </a>
                </div>
              </li>
              
              <li className="contact-item">
                <div className="contact-icon-wrapper">
                  <Github />
                </div>
                <div className="contact-detail">
                  <span className="contact-label">GitHub</span>
                  <a href="https://github.com/ravenbarajas" target="_blank" rel="noopener noreferrer">
                    github.com/ravenbarajas
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="contact-form-container">
            <h3>Send a Message</h3>
            
            {submitStatus === 'success' ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  className="button button-primary"
                  onClick={() => setSubmitStatus('idle')}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="user_name">Name</label>
                  <input 
                    type="text" 
                    id="user_name" 
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="user_email">Email</label>
                  <input 
                    type="email" 
                    id="user_email" 
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5} 
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`button button-primary button-full ${isSubmitting ? 'button-loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitStatus === 'error' && (
                  <div className="error-message">
                    There was an error sending your message. Please try again or contact me directly.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

