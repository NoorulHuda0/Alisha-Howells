import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

export default function Faq() {
  if (!business.faq || !business.faq.items || business.faq.items.length === 0) {
    return null;
  }

  // Open first question by default for convenience
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section-wrapper alt-bg">
      <div className="container">
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <SectionHeading
            eyebrow={business.faq.eyebrow}
            title={business.faq.title}
            subtitle={business.faq.subtitle}
            align="center"
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            {business.faq.items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    overflow: 'hidden',
                    transition: 'box-shadow var(--transition-fast)',
                    boxShadow: isOpen ? 'var(--shadow-rest)' : 'none',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '20px 24px',
                      textAlign: 'left',
                      fontWeight: 600,
                      fontSize: '1.05rem',
                      color: isOpen ? 'var(--color-primary)' : 'var(--color-text-main)',
                      gap: '16px',
                    }}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      size={20}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform var(--transition-smooth)',
                        flexShrink: 0,
                        color: 'var(--color-accent)',
                      }}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 24px 22px 24px',
                        fontSize: '0.96rem',
                        lineHeight: 1.65,
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
