'use client';
import { useLang } from '@/lib/useLang';

export default function HowItWorks() {
  const { t } = useLang();

  const steps = [
    { n: 1, titleKey: 'step1_title', textKey: 'step1_text' },
    { n: 2, titleKey: 'step2_title', textKey: 'step2_text' },
    { n: 3, titleKey: 'step3_title', textKey: 'step3_text' },
    { n: 4, titleKey: 'step4_title', textKey: 'step4_text' },
  ];

  return (
    <section id="how-it-works" style={{ background: 'var(--bg)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1rem' }}>
            {t('how_label')}
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.8px', marginBottom: '1rem', lineHeight: 1.2 }}>
            {t('how_title')}
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            {t('how_sub')}
          </p>
        </div>

        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }} className="steps-grid">
          {/* connecting line */}
          <div style={{
            position: 'absolute', top: 28,
            left: 'calc(12.5% + 28px)', right: 'calc(12.5% + 28px)',
            height: 1,
            background: 'linear-gradient(90deg, var(--blue), var(--green))',
            opacity: 0.4, zIndex: 0,
          }} className="steps-line" />

          {steps.map(({ n, titleKey, textKey }) => (
            <div key={n} style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 0.5rem' }}>
              <div style={{
                width: 56, height: 56, background: 'var(--card)',
                border: '2px solid var(--blue)', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem', fontWeight: 800, color: 'var(--blue)',
                margin: '0 auto 1.25rem', position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', inset: -5, borderRadius: '50%',
                  background: 'rgba(31,111,235,0.08)',
                }} />
                {n}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{t(titleKey)}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6 }}>{t(textKey)}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .steps-line { display: none !important; }
        }
        @media (max-width: 640px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}