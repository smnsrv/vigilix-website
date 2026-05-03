'use client';
import { useState } from 'react';
import { useLang } from '@/lib/useLang';

function PricingCard({ nameKey, price, billingKey, features, ctaKey, ctaHref, featured, t }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--card)', border: featured ? '1px solid var(--blue)' : '1px solid var(--border)',
        borderRadius: 16, padding: '2rem', position: 'relative',
        boxShadow: featured ? '0 0 0 1px var(--blue), 0 20px 60px rgba(31,111,235,0.15)' : 'none',
        transform: featured ? (hovered ? 'scale(1.03) translateY(-4px)' : 'scale(1.03)') : (hovered ? 'translateY(-4px)' : 'none'),
        transition: 'transform 0.25s, box-shadow 0.25s',
      }}
    >
      {featured && (
        <div style={{
          position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
          background: 'var(--blue)', color: '#fff', fontSize: '0.72rem', fontWeight: 700,
          letterSpacing: '0.8px', textTransform: 'uppercase',
          padding: '0.3rem 1rem', borderRadius: 100, whiteSpace: 'nowrap',
        }}>
          ⭐ Most Popular
        </div>
      )}

      <div style={{ fontSize: '1rem', fontWeight: 700, color: featured ? '#58a6ff' : 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>
        {t(nameKey)}
      </div>

      <div style={{ fontSize: '2.8rem', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1, marginBottom: '0.25rem' }}>
        {price}{price !== 'Custom' && price !== t('plan_enterprise_price') && <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--muted)', letterSpacing: 0 }}>/mo</span>}
      </div>

      <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        {t(billingKey)}
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '1.25rem 0' }} />

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.4 }}>
            <span style={{ color: f.included ? 'var(--green)' : 'var(--muted)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>
              {f.included ? '✓' : '·'}
            </span>
            {f.text}
          </li>
        ))}
      </ul>

      <a href={ctaHref} style={{
        display: 'block', textAlign: 'center', width: '100%',
        background: featured ? 'var(--blue)' : 'transparent',
        border: featured ? '1px solid transparent' : '1px solid var(--border)',
        color: featured ? '#fff' : 'var(--text)',
        padding: '0.8rem 2rem', borderRadius: 12, fontSize: '1rem', fontWeight: 600,
        transition: 'background 0.2s',
      }}>
        {t(ctaKey)}
      </a>
    </div>
  );
}

export default function Pricing() {
  const { t } = useLang();

  const plans = [
    {
      nameKey: 'plan_free', price: '$0', billingKey: 'plan_free_billing',
      ctaKey: 'cta_contact', ctaHref: 'https://t.me/vigilix_sales', featured: false,
      features: [
        { text: '1 domain', included: true },
        { text: '1 scan per month', included: true },
        { text: 'Basic findings dashboard', included: true },
        { text: 'Email support', included: true },
        { text: 'PDF reports', included: false },
        { text: 'CVE detection', included: false },
      ],
    },
    {
      nameKey: 'plan_starter', price: '$99', billingKey: 'plan_starter_billing',
      ctaKey: 'cta_contact', ctaHref: 'https://t.me/vigilix_sales', featured: false,
      features: [
        { text: '5 domains', included: true },
        { text: 'Weekly automated scans', included: true },
        { text: 'Full findings dashboard', included: true },
        { text: 'PDF reports', included: true },
        { text: 'CVE detection', included: true },
        { text: 'Priority support', included: false },
      ],
    },
    {
      nameKey: 'plan_pro', price: '$299', billingKey: 'plan_pro_billing',
      ctaKey: 'cta_contact', ctaHref: 'https://t.me/vigilix_sales', featured: true,
      features: [
        { text: '20 domains', included: true },
        { text: 'Daily automated scans', included: true },
        { text: 'All features included', included: true },
        { text: 'PDF reports', included: true },
        { text: 'CVE & login monitoring', included: true },
        { text: 'Priority support', included: true },
      ],
    },
    {
      nameKey: 'plan_enterprise', price: null, billingKey: 'plan_enterprise_billing',
      ctaKey: 'cta_contact', ctaHref: 'https://t.me/vigilix_sales', featured: false,
      features: [
        { text: 'Unlimited domains', included: true },
        { text: 'Custom scan schedules', included: true },
        { text: 'All Pro features', included: true },
        { text: 'Dedicated support engineer', included: true },
        { text: 'SLA guarantee', included: true },
        { text: 'On-premise option', included: true },
      ],
    },
  ];

  return (
    <section id="pricing" style={{ background: 'var(--bg)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1rem' }}>
            {t('pricing_label')}
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.8px', marginBottom: '1rem', lineHeight: 1.2 }}>
            {t('pricing_title')}
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            {t('pricing_sub')}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', alignItems: 'start' }} className="pricing-grid">
          {plans.map((plan) => (
            <PricingCard
              key={plan.nameKey}
              {...plan}
              price={plan.price ?? t('plan_enterprise_price')}
              t={t}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}