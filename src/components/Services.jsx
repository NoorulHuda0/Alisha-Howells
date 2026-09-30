import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import ServiceCard from './ui/ServiceCard';

export default function Services() {
  return (
    <section id="services" className="section-wrapper">
      <div className="container">
        <SectionHeading
          eyebrow={business.services.eyebrow}
          title={business.services.title}
          subtitle={business.services.subtitle}
        />

        {/* 3 across on desktop, 2 on tablet, 1 on mobile */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'clamp(20px, 3vw, 32px)',
          }}
          className="services-grid"
        >
          {business.services.items.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
