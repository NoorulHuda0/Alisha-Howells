import React, { useState } from 'react';

/**
 * ServiceCard component with image aspect ratio, quiet hover depth,
 * and zero-pill typographic metadata separators.
 */
export default function ServiceCard({
  service,
  onSelectService,
}) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      style={{
        backgroundColor: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: isHovered ? 'var(--shadow-hover)' : 'var(--shadow-rest)',
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'transform var(--transition-smooth), box-shadow var(--transition-smooth), border-color var(--transition-fast)',
        borderColor: isHovered ? 'var(--color-primary)' : 'var(--color-border)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with fixed aspect ratio and tonal hover zoom */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 10',
          overflow: 'hidden',
          backgroundColor: 'var(--color-primary-light)',
        }}
      >
        {!imageError ? (
          <img
            src={service.image}
            alt={service.imageAlt || service.title}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: isHovered ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
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
              backgroundColor: 'var(--color-surface-alt)',
              color: 'var(--color-accent)',
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              fontWeight: 600,
            }}
          >
            {service.title}
          </div>
        )}

        {/* Subtle tonal gradient scrim to ground the card visual */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(17, 25, 21, 0.25) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Content Area */}
      <div
        style={{
          padding: 'clamp(20px, 3vw, 28px)',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        {/* Unboxed Metadata (Zero-Pill Rule) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '8px',
            fontFamily: 'var(--font-body)',
          }}
        >
          <span>{service.category}</span>
          <span aria-hidden="true" style={{ opacity: 0.5 }}>·</span>
          <span>Birmingham</span>
        </div>

        <h3
          style={{
            fontSize: '1.28rem',
            marginBottom: '12px',
            color: 'var(--color-text-main)',
          }}
        >
          {service.title}
        </h3>

        <p
          style={{
            fontSize: '0.96rem',
            lineHeight: 1.6,
            color: 'var(--color-text-muted)',
            marginBottom: '20px',
            flexGrow: 1,
          }}
        >
          {service.description}
        </p>

        {/* Modules / Key Topics */}
        {service.tools && service.tools.length > 0 && (
          <div
            style={{
              paddingTop: '16px',
              borderTop: '1px solid var(--color-border-subtle)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.82rem',
              color: 'var(--color-text-muted)',
            }}
          >
            <span style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>Focus:</span>
            {service.tools.map((tool, index) => (
              <React.Fragment key={tool}>
                <span>{tool}</span>
                {index < service.tools.length - 1 && (
                  <span aria-hidden="true" style={{ color: 'var(--color-border)' }}>·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
