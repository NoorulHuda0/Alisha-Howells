import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    serviceInterest: 'Microsoft Office Suite',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please provide your name.');
      return;
    }
    if (!formData.contactInfo.trim()) {
      setErrorMsg('Please provide your phone or WhatsApp number.');
      return;
    }

    // Front-end inquiry confirmation
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      contactInfo: '',
      serviceInterest: 'Microsoft Office Suite',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        <SectionHeading
          eyebrow={business.contactSection.eyebrow}
          title={business.contactSection.title}
          subtitle={business.contactSection.subtitle}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Contact & Location Details */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}
          >
            {/* Direct Quick Actions Box */}
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(24px, 4vw, 36px)',
                boxShadow: 'var(--shadow-rest)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  marginBottom: '16px',
                  color: 'var(--color-text-main)',
                }}
              >
                Fastest Way to Connect
              </h3>
              <p
                style={{
                  fontSize: '0.96rem',
                  color: 'var(--color-text-muted)',
                  marginBottom: '24px',
                }}
              >
                Direct message or call is best for discussing course requirements, current skill levels, and scheduling.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <Button
                  href={business.actions.primary.href}
                  isExternal={business.actions.primary.isExternal}
                  variant="primary"
                  size="md"
                  icon={MessageCircle}
                >
                  {business.actions.primary.label}
                </Button>

                <Button
                  href={business.actions.callDirect.href}
                  variant="secondary"
                  size="md"
                  icon={Phone}
                >
                  Call {business.contact.phoneDisplay}
                </Button>
              </div>
            </div>

            {/* Address & Hours Detail Box */}
            <div
              style={{
                backgroundColor: 'var(--color-surface-alt)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(24px, 4vw, 36px)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '20px' }}>
                <MapPin size={22} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '6px', color: 'var(--color-text-main)' }}>
                    Studio Location
                  </h4>
                  <p style={{ fontSize: '0.94rem', color: 'var(--color-text-muted)', marginBottom: '14px' }}>
                    {business.contact.fullAddress}
                  </p>
                  <Button
                    href={business.actions.getDirections.href}
                    isExternal={business.actions.getDirections.isExternal}
                    variant="outline"
                    size="sm"
                  >
                    Open in Google Maps
                  </Button>
                </div>
              </div>

              {business.contact.hoursNotice && (
                <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-border)', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  <strong>Hours:</strong> {business.contact.hoursNotice}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Usable Contact / Inquiry Form */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border)',
              padding: 'clamp(28px, 4vw, 40px)',
              boxShadow: 'var(--shadow-rest)',
            }}
          >
            <h3
              style={{
                fontSize: '1.3rem',
                marginBottom: '8px',
                color: 'var(--color-text-main)',
              }}
            >
              {business.contactSection.formTitle}
            </h3>
            <p
              style={{
                fontSize: '0.94rem',
                color: 'var(--color-text-muted)',
                marginBottom: '24px',
              }}
            >
              {business.contactSection.formDescription}
            </p>

            {submitted ? (
              <div
                style={{
                  padding: '32px 20px',
                  textAlign: 'center',
                  backgroundColor: 'var(--color-primary-light)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(21, 62, 45, 0.15)',
                }}
              >
                <CheckCircle2 size={40} color="var(--color-primary)" style={{ margin: '0 auto 16px' }} />
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '8px' }}>
                  Inquiry Received
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                  Thank you, {formData.name}. We will review your software training request for {formData.serviceInterest} and contact you shortly.
                </p>
                <Button variant="outline" size="sm" onClick={handleReset}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {errorMsg && (
                  <div
                    style={{
                      padding: '10px 14px',
                      backgroundColor: '#fef2f2',
                      border: '1px solid #fecaca',
                      borderRadius: 'var(--radius-sm)',
                      color: '#b91c1c',
                      fontSize: '0.88rem',
                      marginBottom: '16px',
                    }}
                  >
                    {errorMsg}
                  </div>
                )}

                <div style={{ marginBottom: '18px' }}>
                  <label htmlFor="contact-name">Your Full Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. David Smith"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div style={{ marginBottom: '18px' }}>
                  <label htmlFor="contact-info">Phone or WhatsApp Number *</label>
                  <input
                    id="contact-info"
                    name="contactInfo"
                    type="tel"
                    required
                    placeholder="e.g. 07915 925681"
                    value={formData.contactInfo}
                    onChange={handleChange}
                  />
                </div>

                <div style={{ marginBottom: '18px' }}>
                  <label htmlFor="contact-service">Software Course of Interest</label>
                  <select
                    id="contact-service"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                  >
                    {business.services.items.map((svc) => (
                      <option key={svc.id} value={svc.title}>
                        {svc.title}
                      </option>
                    ))}
                    <option value="General Computer Fundamentals">General Computer Fundamentals</option>
                    <option value="Other / Bespoke Training">Other / Bespoke Training</option>
                  </select>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label htmlFor="contact-message">What specific skills are you looking to master?</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your learning goals or software you want to practice..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={Send}
                  className="w-full"
                >
                  Submit Training Inquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
