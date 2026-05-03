'use client';
import { useState } from 'react';
import { useLang } from '@/lib/useLang';

function ProblemCard({ icon, titleKey, textKey, t }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg)', border: `1px solid ${hovered ? 'var(--blue)' : 'var(--border)'}`,
        borderRadius: 14, padding: '2rem', position: 'relative', overflow: 'hidden',
        transform: hovered ? 'translateY(-3px)' : 'none',
        transition: 'border-color 0.25s, transform 0.25s',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, var(--blue), var(--green))',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.25s',
      }} />
      <div style={{
        width: 48, height: 48, background: 'rgba(31,111,235,0.12)',
        border: '1px solid rgba(31,111,235,0.25)', borderRadius: 12,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.4rem', marginBottom: '1.25rem',
      }}>{icon}</div>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.6rem', letterSpacing: '-0.3px' }}>
        {t(titleKey)}
      </h3>
      <p style={{ fontSize: '0.92rem', color: 'var(--muted)', lineHeight: 1.65 }}>
        {t(textKey)}
      </p>
    </div>
  );
}

export default function Problem() {
  const { t } = useLang();

  const cards = [
    { icon: '🕳️', titleKey: 'p1_title', textKey: 'p1_text' },
    { icon: '⚡', titleKey: 'p2_title', textKey: 'p2_text' },
    { icon: '👁️', titleKey: 'p3_title', textKey: 'p3_text' },
  ];

  return (
    <section id="problem" style={{ background: 'var(--card)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1rem' }}>
            {t('problem_label')}
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.8px', marginBottom: '1rem', lineHeight: 1.2 }}>
            {t('problem_title')}
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            {t('problem_sub')}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {cards.map((c) => (
            <ProblemCard key={c.titleKey} {...c} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}