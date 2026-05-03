'use client';
import { useLang } from '@/lib/useLang';

export default function CtaSection() {
  const { t } = useLang();

  return (
    <section id="cta" style={{
      background: 'linear-gradient(135deg, rgba(31,111,235,0.15) 0%, rgba(63,185,80,0.06) 100%)',
      borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
      textAlign: 'center', padding: '6rem 1.5rem',
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          {/* glow */}
          <div style={{
            position: 'absolute', inset: -40, borderRadius: '50%',
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(31,111,235,0.2), transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1rem' }}>
              {t('cta_label')}
            </span>

            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.8px', lineHeight: 1.2, maxWidth: 700, margin: '0 auto 1rem' }}>
              {t('cta_title')}
            </h2>

            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: 560, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              {t('cta_sub')}
            </p>

            <a href="https://t.me/vigilix_sales" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--blue)', color: '#fff', border: '1px solid transparent',
              padding: '1rem 2.5rem', borderRadius: 12, fontSize: '1.1rem', fontWeight: 600,
              cursor: 'pointer', transition: 'background 0.2s',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              {t('cta_btn')}
            </a>

            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--muted)' }}>
              {t('cta_note')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}