'use client';
import { useState } from 'react';
import { useLang } from '@/lib/useLang';

function FeatureCard({ icon, titleKey, textKey, t }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg)', border: `1px solid ${hovered ? 'rgba(31,111,235,0.5)' : 'var(--border)'}`,
        borderRadius: 14, padding: '1.75rem',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? '0 8px 30px rgba(31,111,235,0.08)' : 'none',
        transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
      }}
    >
      <span style={{ fontSize: '1.75rem', marginBottom: '1rem', display: 'block' }}>{icon}</span>
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.2px' }}>
        {t(titleKey)}
      </h3>
      <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65 }}>
        {t(textKey)}
      </p>
    </div>
  );
}

export default function Features() {
  const { t } = useLang();

  const features = [
    { icon: '🔍', titleKey: 'f1_title', textKey: 'f1_text' },
    { icon: '🔌', titleKey: 'f2_title', textKey: 'f2_text' },
    { icon: '🛡️', titleKey: 'f3_title', textKey: 'f3_text' },
    { icon: '📸', titleKey: 'f4_title', textKey: 'f4_text' },
    { icon: '📄', titleKey: 'f5_title', textKey: 'f5_text' },
    { icon: '👥', titleKey: 'f6_title', textKey: 'f6_text' },
  ];

  return (
    <section id="features" style={{ background: 'var(--card)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1rem' }}>
            {t('features_label')}
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.8px', marginBottom: '1rem', lineHeight: 1.2 }}>
            {t('features_title')}
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            {t('features_sub')}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="features-grid">
          {features.map((f) => (
            <FeatureCard key={f.titleKey} {...f} t={t} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}