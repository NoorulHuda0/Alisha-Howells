import React from 'react';
import { MessageCircle, ArrowRight, MapPin, Phone } from 'lucide-react';
import { business } from '../config/business';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'clamp(620px, 90vh, 920px)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#0f241a',
      }}
    >
      {/* Background Photography with Tonal Scrim */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      >
        <img
          src={business.hero.image}
          alt={business.hero.imageAlt}
          referrerPolicy="no-referrer"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(0.85)',
          }}
        />
        {/* Single restrained tonal overlay for contrast & readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(13, 31, 23, 0.92) 0%, rgba(17, 43, 31, 0.82) 50%, rgba(13, 27, 20, 0.90) 100%)',
          }}
        />
      </div>

      {/* Hero Content Container */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          paddingTop: 'var(--space-64)',
          paddingBottom: 'var(--space-64)',
          width: '100%',
        }}
      >
        <div
          style={{
            maxWidth: '780px',
          }}
        >
          {/* Eyebrow / Location & Niche */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.84rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#a3dfb8',
              marginBottom: '20px',
              fontFamily: 'var(--font-body)',
            }}
          >
            <span>{business.hero.eyebrow}</span>
          </div>

          {/* H1 Headline */}
          <h1
            style={{
              color: '#ffffff',
              fontSize: 'clamp(2.7rem, 5.2vw, 4.2rem)',
              lineHeight: 1.12,
              marginBottom: '24px',
              fontWeight: 700,
              letterSpacing: '-0.03em',
            }}
          >
            {business.hero.title}
          </h1>

          {/* Lead Paragraph */}
          <p
            style={{
              color: '#d4e4dc',
              fontSize: 'clamp(1.1rem, 2vw, 1.28rem)',
              lineHeight: 1.65,
              marginBottom: '36px',
              maxWidth: '62ch',
            }}
          >
            {business.hero.lead}
          </p>

          {/* Dual CTAs: WhatsApp + Contact */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center',
              marginBottom: '44px',
            }}
          >
            <Button
              href={business.actions.primary.href}
              isExternal={business.actions.primary.isExternal}
              variant="primary"
              size="lg"
              icon={MessageCircle}
            >
              {business.actions.primary.label}
            </Button>

            <Button
              href={business.actions.secondary.href}
              variant="secondary"
              size="lg"
              icon={ArrowRight}
            >
              {business.actions.secondary.label}
            </Button>
          </div>

          {/* Quiet Trust / Verification Line */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '24px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.14)',
              color: '#b6ccc1',
              fontSize: '0.88rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} color="#a3dfb8" aria-hidden="true" />
              <span>{business.contact.area}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={16} color="#a3dfb8" aria-hidden="true" />
              <span>{business.contact.phoneDisplay}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
