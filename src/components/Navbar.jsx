import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { business } from '../config/business';
import Button from './ui/Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(249, 250, 248, 0.94)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${isScrolled ? 'var(--color-border)' : 'var(--color-border-subtle)'}`,
        transition: 'all var(--transition-smooth)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
        }}
      >
        {/* Zone 1: Single text element wordmark (Display face) */}
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.42rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--color-primary)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
          aria-label={`${business.name} homepage`}
        >
          <span>{business.name}</span>
        </a>

        {/* Zone 2: Clean text navigation links (Desktop) */}
        <nav
          style={{
            display: 'none',
          }}
          className="desktop-nav"
        >
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              listStyle: 'none',
            }}
          >
            {business.navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  style={{
                    fontSize: '0.94rem',
                    fontWeight: 500,
                    color: 'var(--color-text-muted)',
                    transition: 'color var(--transition-fast)',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Zone 3: Primary action button + Mobile menu toggle */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div className="desktop-cta" style={{ display: 'none' }}>
            <Button
              href={business.actions.primary.href}
              isExternal={business.actions.primary.isExternal}
              variant="primary"
              size="sm"
              icon={MessageCircle}
            >
              {business.actions.primary.label}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-text-main)',
              backgroundColor: mobileMenuOpen ? 'var(--color-primary-light)' : 'transparent',
              transition: 'background-color var(--transition-fast)',
            }}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            borderTop: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-surface)',
            padding: '24px var(--container-padding) 32px',
            boxShadow: 'var(--shadow-hover)',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              marginBottom: '24px',
            }}
          >
            {business.navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  style={{
                    display: 'block',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--color-text-main)',
                    padding: '8px 0',
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Button
              href={business.actions.primary.href}
              isExternal={business.actions.primary.isExternal}
              variant="primary"
              size="md"
              icon={MessageCircle}
              onClick={closeMenu}
            >
              {business.actions.primary.label}
            </Button>
            <Button
              href={business.actions.secondary.href}
              variant="secondary"
              size="md"
              onClick={closeMenu}
            >
              {business.actions.secondary.label}
            </Button>
          </div>
        </div>
      )}

      {/* Responsive Styles Injection */}
      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: block !important;
          }
          .desktop-cta {
            display: block !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
