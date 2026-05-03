'use client';
import { useLang } from '@/lib/useLang';
import ShieldIcon from './ShieldIcon';

export default function Footer() {
  const { t } = useLang();

  const linkStyle = { fontSize: '0.875rem', color: 'var(--muted)', transition: 'color 0.2s' };

  return (
    <footer style={{ background: 'var(--card)', borderTop: '1px solid var(--border)', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontWeight: 700 }}>
            <ShieldIcon size={28} />
            Vigilix
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: 4 }}>
            {t('footer_tagline')}
          </div>
        </div>

        <nav style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap' }}>
          <a href="#features" style={linkStyle}>{t('footer_features')}</a>
          <a href="#pricing" style={linkStyle}>{t('footer_pricing')}</a>
          <a href="https://app.vigilix.uz/login" style={linkStyle}>{t('footer_login')}</a>
          <a href="mailto:contact@vigilix.uz" style={linkStyle}>{t('footer_contact')}</a>
        </nav>
      </div>

      <div style={{
        maxWidth: 1140, margin: '2rem auto 0', paddingTop: '1.5rem',
        borderTop: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.8rem', color: 'var(--muted)',
      }}>
        <span>{t('footer_copy')}</span>
        <a href="mailto:contact@vigilix.uz" style={{ color: 'var(--muted)' }}>contact@vigilix.uz</a>
      </div>
    </footer>
  );
}