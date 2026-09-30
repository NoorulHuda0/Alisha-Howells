import React from 'react';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { business } from '../config/business';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#0d1f17',
        color: '#c9d8d0',
        paddingTop: 'var(--space-64)',
        paddingBottom: 'var(--space-48)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: 'clamp(32px, 4vw, 56px)',
            marginBottom: 'var(--space-48)',
          }}
        >
          {/* Col 1: Wordmark & Tagline */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.45rem',
                fontWeight: 700,
                color: '#ffffff',
                display: 'block',
                marginBottom: '12px',
                letterSpacing: '-0.02em',
              }}
            >
              {business.name}
            </span>
            <p
              style={{
                fontSize: '0.94rem',
                lineHeight: 1.6,
                color: '#9eb4a9',
                marginBottom: '18px',
                maxWidth: '36ch',
              }}
            >
              {business.tagline} · {business.type}
            </p>
            <span style={{ fontSize: '0.84rem', color: '#7e968a' }}>
              Birmingham, United Kingdom
            </span>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#a3dfb8',
                marginBottom: '16px',
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {business.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    style={{
                      fontSize: '0.92rem',
                      color: '#c9d8d0',
                      transition: 'color var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#c9d8d0')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Inquiries & Actions */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#a3dfb8',
                marginBottom: '16px',
              }}
            >
              Direct Contact
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem' }}>
              <li>
                <a
                  href={business.actions.primary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#c9d8d0',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#a3dfb8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#c9d8d0')}
                >
                  <MessageCircle size={16} color="#a3dfb8" aria-hidden="true" />
                  <span>WhatsApp: {business.contact.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={business.actions.callDirect.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#c9d8d0',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#a3dfb8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#c9d8d0')}
                >
                  <Phone size={16} color="#a3dfb8" aria-hidden="true" />
                  <span>Phone: {business.contact.phoneDisplay}</span>
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#9eb4a9' }}>
                <MapPin size={16} color="#a3dfb8" style={{ flexShrink: 0, marginTop: '3px' }} aria-hidden="true" />
                <span>{business.contact.fullAddress}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div
          style={{
            paddingTop: 'var(--space-32)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.84rem',
            color: '#7e968a',
          }}
        >
          <div>
            © {currentYear} {business.footer.copyright}
          </div>
          <div>
            {business.footer.rightsStatement}
          </div>
        </div>
      </div>
    </footer>
  );
}
