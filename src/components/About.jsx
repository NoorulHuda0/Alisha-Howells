import React, { useState } from 'react';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="section-wrapper alt-bg">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: 'clamp(36px, 6vw, 72px)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Craft Image with Subtle Frame */}
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-hover)',
              border: '1px solid var(--color-border)',
              aspectRatio: '4 / 3',
              backgroundColor: 'var(--color-primary-light)',
            }}
          >
            {!imageError ? (
              <img
                src={business.about.image}
                alt={business.about.imageAlt}
                onError={() => setImageError(true)}
                referrerPolicy="no-referrer"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent)',
                  fontFamily: 'var(--font-display)',
                }}
              >
                {business.name}
              </div>
            )}
          </div>

          {/* Right Column: Editorial Intro & Details */}
          <div>
            <SectionHeading
              eyebrow={business.about.eyebrow}
              title={business.about.title}
              className="mb-6"
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginBottom: '32px',
              }}
            >
              {business.about.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.7,
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Quiet detail list */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '36px',
                paddingTop: '20px',
                borderTop: '1px solid var(--color-border)',
              }}
            >
              {business.about.details.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '12px',
                    fontSize: '0.94rem',
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      color: 'var(--color-text-main)',
                      minWidth: '140px',
                    }}
                  >
                    {item.label}:
                  </span>
                  <span style={{ color: 'var(--color-text-muted)' }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <Button
                href={business.actions.secondary.href}
                variant="outline"
                size="md"
                icon={ArrowRight}
              >
                {business.actions.secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
