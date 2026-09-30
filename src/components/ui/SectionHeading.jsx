import React from 'react';

/**
 * Clean SectionHeading component following typographic hierarchy rules.
 * No pill boxes around eyebrows; clean letter-spaced accent text.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
  light = false,
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`section-heading ${className}`}
      style={{
        textAlign: isCenter ? 'center' : 'left',
        maxWidth: isCenter ? '760px' : '820px',
        marginLeft: isCenter ? 'auto' : '0',
        marginRight: isCenter ? 'auto' : '0',
        marginBottom: 'clamp(32px, 5vw, 48px)',
      }}
    >
      {eyebrow && (
        <span
          className="eyebrow"
          style={{
            color: light ? '#a3b8ad' : 'var(--color-accent)',
          }}
        >
          {eyebrow}
        </span>
      )}

      {title && (
        <h2
          style={{
            color: light ? '#ffffff' : 'var(--color-text-main)',
            marginBottom: subtitle ? '16px' : '0',
          }}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          style={{
            fontSize: '1.05rem',
            color: light ? '#d1dcd5' : 'var(--color-text-muted)',
            marginLeft: isCenter ? 'auto' : '0',
            marginRight: isCenter ? 'auto' : '0',
            lineHeight: 1.65,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
