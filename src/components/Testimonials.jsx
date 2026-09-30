import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

/**
 * Testimonials component renders ONLY if genuine testimonials exist in business configuration.
 * Per project instructions: If none provided, omit this section entirely — never fabricate filler.
 */
export default function Testimonials() {
  if (!business.testimonials || !Array.isArray(business.testimonials) || business.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section-wrapper alt-bg">
      <div className="container">
        <SectionHeading
          eyebrow="Learner Feedback"
          title="What our students say."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '24px',
          }}
        >
          {business.testimonials.map((t, idx) => (
            <blockquote
              key={idx}
              style={{
                backgroundColor: 'var(--color-surface)',
                padding: '32px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-rest)',
              }}
            >
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: 'var(--color-text-main)',
                  marginBottom: '20px',
                  fontStyle: 'italic',
                }}
              >
                "{t.quote}"
              </p>
              <footer>
                <cite
                  style={{
                    fontStyle: 'normal',
                    fontWeight: 600,
                    color: 'var(--color-text-main)',
                    display: 'block',
                  }}
                >
                  {t.author}
                </cite>
                {t.role && (
                  <span style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)' }}>
                    {t.role}
                  </span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
