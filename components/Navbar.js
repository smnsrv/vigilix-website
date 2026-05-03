'use client';
import { useState, useEffect, useCallback } from 'react';
import { useLang } from '@/lib/useLang';
import ShieldIcon from './ShieldIcon';

export default function Navbar() {
  const { lang, switchLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const smoothScroll = useCallback((e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    padding: '0 2rem', height: 68,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
    transition: 'background 0.25s ease, border-color 0.25s ease',
    borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    background: scrolled ? 'rgba(13,17,23,0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
  };

  const logoStyle = {
    display: 'flex', alignItems: 'center', gap: 10,
    fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.3px', flexShrink: 0,
  };

  const linksStyle = {
    display: 'flex', alignItems: 'center', gap: '2rem', listStyle: 'none',
  };

  const linkStyle = { color: 'var(--muted)', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer', transition: 'color 0.2s' };

  const actionsStyle = { display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 };

  const langSwitcherStyle = {
    display: 'flex', alignItems: 'center',
    background: 'var(--card)', border: '1px solid var(--border)',
    borderRadius: 8, overflow: 'hidden', flexShrink: 0,
  };

  const langBtnStyle = (active) => ({
    background: active ? 'var(--blue)' : 'none',
    border: 'none',
    borderRight: '1px solid var(--border)',
    color: active ? '#fff' : 'var(--muted)',
    fontSize: '0.75rem', fontWeight: 600,
    padding: '0.32rem 0.65rem',
    cursor: 'pointer',
    transition: 'background 0.2s, color 0.2s',
    fontFamily: 'inherit', lineHeight: 1.4,
  });

  const btnOutlineStyle = {
    background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)',
    padding: '0.5rem 1.1rem', borderRadius: 'var(--radius)', fontSize: '0.875rem', fontWeight: 600,
    cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'inherit',
    transition: 'border-color 0.2s, color 0.2s',
  };

  const btnPrimaryStyle = {
    background: 'var(--blue)', color: '#fff', border: '1px solid transparent',
    padding: '0.5rem 1.1rem', borderRadius: 'var(--radius)', fontSize: '0.875rem', fontWeight: 600,
    cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'inherit',
    transition: 'background 0.2s',
  };

  const hamburgerStyle = {
    display: 'none', flexDirection: 'column', gap: 5,
    background: 'none', border: 'none', padding: 4, cursor: 'pointer', flexShrink: 0,
  };

  const mobileMenuStyle = {
    display: menuOpen ? 'flex' : 'none',
    position: 'fixed', top: 68, left: 0, right: 0,
    background: 'rgba(13,17,23,0.97)', backdropFilter: 'blur(16px)',
    borderBottom: '1px solid var(--border)',
    padding: '1.5rem 2rem', zIndex: 999,
    flexDirection: 'column', gap: '1rem',
  };

  return (
    <>
      <nav style={navStyle}>
        <a href="#" style={logoStyle}>
          <ShieldIcon size={32} />
          Vigilix
        </a>

        <ul style={linksStyle} className="nav-links-desktop">
          <li><a href="#features" style={linkStyle} onClick={(e) => smoothScroll(e, '#features')}>{t('nav_features')}</a></li>
          <li><a href="#how-it-works" style={linkStyle} onClick={(e) => smoothScroll(e, '#how-it-works')}>{t('nav_how')}</a></li>
          <li><a href="#pricing" style={linkStyle} onClick={(e) => smoothScroll(e, '#pricing')}>{t('nav_pricing')}</a></li>
        </ul>

        <div style={langSwitcherStyle}>
          <button style={{ ...langBtnStyle(lang === 'uz') }} onClick={() => switchLang('uz')}>🇺🇿 UZ</button>
          <button style={{ ...langBtnStyle(lang === 'en'), borderRight: 'none' }} onClick={() => switchLang('en')}>🇺🇸 EN</button>
        </div>

        <div style={actionsStyle} className="nav-actions-desktop">
          <a href="https://app.vigilix.uz/login" style={btnOutlineStyle}>{t('nav_login')}</a>
          <a href="https://t.me/vigilix_sales" style={btnPrimaryStyle}>{t('nav_start')}</a>
        </div>

        <button
          style={hamburgerStyle}
          className="hamburger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
        >
          <span style={{ display: 'block', width: 22, height: 2, background: 'var(--text)', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 22, height: 2, background: 'var(--text)', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 22, height: 2, background: 'var(--text)', borderRadius: 2 }} />
        </button>
      </nav>

      <div style={mobileMenuStyle}>
        <a href="#features" style={{ color: 'var(--muted)', fontWeight: 500, paddingBottom: '0.5rem', borderBottom: '1px solid var(--border)' }} onClick={(e) => smoothScroll(e, '#features')}>{t('nav_features')}</a>
        <a href="#how-it-works" style={{ color: 'var(--muted)', fontWeight: 500, paddingBottom: '0.5rem', borderBottom: '1px solid var(--border)' }} onClick={(e) => smoothScroll(e, '#how-it-works')}>{t('nav_how')}</a>
        <a href="#pricing" style={{ color: 'var(--muted)', fontWeight: 500, paddingBottom: '0.5rem', borderBottom: '1px solid var(--border)' }} onClick={(e) => smoothScroll(e, '#pricing')}>{t('nav_pricing')}</a>
        <a href="https://app.vigilix.uz/login" style={{ ...btnOutlineStyle, textAlign: 'center', display: 'block' }}>{t('nav_login')}</a>
        <a href="https://t.me/vigilix_sales" style={{ ...btnPrimaryStyle, textAlign: 'center', display: 'block' }}>{t('nav_start')}</a>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .nav-links-desktop { display: none !important; }
          .nav-actions-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}