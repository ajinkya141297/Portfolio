import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactPage.css';

/*
  Setup EmailJS:
  1. Create free account at https://emailjs.com
  2. Add an Email Service (Gmail) → get SERVICE_ID
  3. Create an Email Template → get TEMPLATE_ID
     Template variables: {{from_name}}, {{from_email}}, {{message}}
  4. Get your PUBLIC_KEY from Account > API Keys
  5. Replace the constants below with your values.
*/
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

const ContactPage = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.name.trim())    e.name    = 'Name is required.';
    if (!formData.email.trim())   e.email   = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Enter a valid email.';
    if (!formData.subject.trim()) e.subject = 'Subject is required.';
    if (!formData.message.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <div className="contact-page-hero">
        <div className="contact-page-badge">
          <i className="ri-mail-send-line"></i>
          <span>Get In Touch</span>
        </div>
        <h1 className="contact-page-title">Contact Me</h1>
        <p className="contact-page-subtitle">
          Have a project in mind or just want to say hi? I'd love to hear from you.
          Fill out the form and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="contact-page-body">
        {/* Info Cards */}
        <div className="contact-info-panel">
          <h2 className="contact-info-heading">Let's Connect</h2>
          <p className="contact-info-text">
            I'm open to freelance opportunities, full-time roles, and interesting collaborations.
            Reach out through any channel below.
          </p>

          <div className="contact-info-cards">
            <div className="contact-info-card">
              <div className="contact-info-icon bg-purple-700">
                <i className="ri-mail-fill"></i>
              </div>
              <div>
                <small>Email Address</small>
                <h4>ajinkya141297@gmail.com</h4>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon bg-pink-600">
                <i className="ri-phone-line"></i>
              </div>
              <div>
                <small>Phone</small>
                <h4>+91 9561318939</h4>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon bg-indigo-600">
                <i className="ri-map-pin-2-line"></i>
              </div>
              <div>
                <small>Location</small>
                <h4>Pune, Maharashtra, India</h4>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="contact-socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-social-btn linkedin">
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a href="https://github.com/ajinkya141297" target="_blank" rel="noreferrer" className="contact-social-btn github">
              <i className="ri-github-fill"></i>
            </a>
            <a href="https://wa.me/919561318939" target="_blank" rel="noreferrer" className="contact-social-btn whatsapp">
              <i className="ri-whatsapp-line"></i>
            </a>
          </div>
        </div>

        {/* Form Panel */}
        <div className="contact-form-panel">
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  id="name"
                  name="from_name"
                  type="text"
                  placeholder="Ajinkya Patil"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData(p => ({ ...p, name: e.target.value }));
                    if (errors.name) setErrors(p => ({ ...p, name: '' }));
                  }}
                  className={errors.name ? 'input-error' : ''}
                />
                {errors.name && <span className="error-msg">{errors.name}</span>}
              </div>

              <div className="contact-form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  name="from_email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData(p => ({ ...p, email: e.target.value }));
                    if (errors.email) setErrors(p => ({ ...p, email: '' }));
                  }}
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <span className="error-msg">{errors.email}</span>}
              </div>
            </div>

            <div className="contact-form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project Inquiry / Collaboration"
                value={formData.subject}
                onChange={(e) => {
                  setFormData(p => ({ ...p, subject: e.target.value }));
                  if (errors.subject) setErrors(p => ({ ...p, subject: '' }));
                }}
                className={errors.subject ? 'input-error' : ''}
              />
              {errors.subject && <span className="error-msg">{errors.subject}</span>}
            </div>

            <div className="contact-form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or idea..."
                rows={5}
                value={formData.message}
                onChange={(e) => {
                  setFormData(p => ({ ...p, message: e.target.value }));
                  if (errors.message) setErrors(p => ({ ...p, message: '' }));
                }}
                className={errors.message ? 'input-error' : ''}
              />
              {errors.message && <span className="error-msg">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className={`contact-submit-btn ${status === 'sending' ? 'sending' : ''}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <i className="ri-loader-4-line spin"></i> Sending...
                </>
              ) : (
                <>
                  Send Message <i className="ri-send-plane-fill ml-2"></i>
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="contact-alert success">
                <i className="ri-checkbox-circle-fill"></i>
                Message sent successfully! I'll get back to you soon. 🎉
              </div>
            )}

            {status === 'error' && (
              <div className="contact-alert error">
                <i className="ri-error-warning-fill"></i>
                Something went wrong. Please try again or email me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
