import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-wrapper">
      <div className="container">
        <SectionHeading
          eyebrow={business.whyChooseUs.eyebrow}
          title={business.whyChooseUs.title}
          subtitle={business.whyChooseUs.subtitle}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: 'clamp(20px, 3vw, 32px)',
          }}
        >
          {business.whyChooseUs.points.map((pt) => (
            <div
              key={pt.number}
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(24px, 3vw, 32px)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-rest)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color var(--transition-fast), transform var(--transition-smooth)',
              }}
            >
              {/* Editorial Numbering (human, no slashes) */}
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: 'var(--color-accent)',
                  marginBottom: '16px',
                  display: 'block',
                  lineHeight: 1,
                }}
              >
                {pt.number}
              </span>

              <h3
                style={{
                  fontSize: '1.2rem',
                  marginBottom: '10px',
                  color: 'var(--color-text-main)',
                }}
              >
                {pt.title}
              </h3>

              <p
                style={{
                  fontSize: '0.94rem',
                  lineHeight: 1.6,
                  color: 'var(--color-text-muted)',
                }}
              >
                {pt.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
