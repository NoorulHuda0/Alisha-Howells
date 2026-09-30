import React from 'react';

/**
 * Reusable Button component respecting design tokens and single-line layout rules.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  isExternal = false,
  className = '',
  type = 'button',
  icon: Icon,
  disabled = false,
}) {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: 600,
    borderRadius: 'var(--radius-sm)',
    transition: 'all var(--transition-fast)',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    lineHeight: 1.2,
    fontFamily: 'var(--font-body)',
  };

  const sizeStyles = {
    sm: { padding: '10px 18px', fontSize: '0.88rem' },
    md: { padding: '14px 24px', fontSize: '0.98rem' },
    lg: { padding: '16px 32px', fontSize: '1.05rem' },
  };

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--color-primary)',
      color: '#ffffff',
      border: '1px solid var(--color-primary)',
      boxShadow: '0 2px 6px rgba(21, 62, 45, 0.15)',
    },
    secondary: {
      backgroundColor: '#ffffff',
      color: 'var(--color-primary)',
      border: '1px solid var(--color-border)',
      boxShadow: 'var(--shadow-rest)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid var(--color-primary)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-text-main)',
      border: '1px solid transparent',
    },
    dark: {
      backgroundColor: '#111915',
      color: '#ffffff',
      border: '1px solid #111915',
    }
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const hoverEffect = isHovered && !disabled ? {
    primary: {
      backgroundColor: 'var(--color-primary-hover)',
      borderColor: 'var(--color-primary-hover)',
      transform: 'translateY(-1px)',
      boxShadow: '0 6px 16px rgba(21, 62, 45, 0.22)',
    },
    secondary: {
      backgroundColor: '#ffffff',
      borderColor: 'var(--color-primary)',
      transform: 'translateY(-1px)',
      boxShadow: 'var(--shadow-hover)',
    },
    outline: {
      backgroundColor: 'var(--color-primary-light)',
      borderColor: 'var(--color-primary)',
    },
    ghost: {
      backgroundColor: 'var(--color-surface-alt)',
    },
    dark: {
      backgroundColor: '#233229',
      borderColor: '#233229',
      transform: 'translateY(-1px)',
    }
  }[variant] : {};

  const combinedStyles = {
    ...baseStyles,
    ...(sizeStyles[size] || sizeStyles.md),
    ...(variantStyles[variant] || variantStyles.primary),
    ...hoverEffect,
  };

  if (href) {
    return (
      <a
        href={href}
        style={combinedStyles}
        className={className}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {Icon && <Icon size={18} aria-hidden="true" />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      style={combinedStyles}
      className={className}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {Icon && <Icon size={18} aria-hidden="true" />}
      <span>{children}</span>
    </button>
  );
}
