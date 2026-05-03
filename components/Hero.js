'use client';
import { useEffect, useRef } from 'react';
import { useLang } from '@/lib/useLang';

export default function Hero() {
  const { t } = useLang();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [], animId;

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    function createParticles() {
      particles = [];
      const count = Math.floor((W * H) / 18000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * W, y: Math.random() * H,
          r: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          alpha: Math.random() * 0.5 + 0.15,
          color: Math.random() > 0.7 ? '#3fb950' : '#1f6feb',
        });
      }
    }

    function drawGrid() {
      ctx.strokeStyle = 'rgba(48,54,61,0.45)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      for (let x = 0; x <= W; x += 50) { ctx.moveTo(x, 0); ctx.lineTo(x, H); }
      for (let y = 0; y <= H; y += 50) { ctx.moveTo(0, y); ctx.lineTo(W, y); }
      ctx.stroke();
    }

    function drawConnections() {
      const maxDist = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(31,111,235,${(1 - dist / maxDist) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    function drawParticles() {
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      }
    }

    function tick() {
      ctx.clearRect(0, 0, W, H);
      drawGrid();
      drawConnections();
      drawParticles();
      animId = requestAnimationFrame(tick);
    }

    resize();
    createParticles();
    tick();

    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(animId);
      resize();
      createParticles();
      tick();
    });
    ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '6rem 1.5rem 4rem', overflow: 'hidden',
    }}>
      {/* radial glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(31,111,235,0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(63,185,80,0.06) 0%, transparent 60%)',
      }} />

      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, width: '100%', height: '100%' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 860, animation: 'fadeUp 0.7s ease both' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(31,111,235,0.12)', border: '1px solid rgba(31,111,235,0.3)',
          color: '#58a6ff', fontSize: '0.8rem', fontWeight: 600,
          letterSpacing: '0.5px', textTransform: 'uppercase',
          padding: '0.35rem 1rem', borderRadius: 100, marginBottom: '1.75rem',
        }}>
          <span style={{
            width: 6, height: 6, background: 'var(--blue)', borderRadius: '50%', flexShrink: 0,
            animation: 'pulse 2s infinite',
          }} />
          {t('badge')}
        </div>

        {/* H1 */}
        <h1 style={{
          fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', fontWeight: 800,
          lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: '1.5rem',
          background: 'linear-gradient(135deg, #e6edf3 30%, #58a6ff 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>
          {t('hero_h1_1')}<br />{t('hero_h1_2')}
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: 'var(--muted)',
          maxWidth: 640, margin: '0 auto 2.5rem', lineHeight: 1.7,
        }}>
          {t('hero_sub')}
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
          <a href="https://t.me/vigilix_sales" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--blue)', color: '#fff', border: '1px solid transparent',
            padding: '0.8rem 2rem', borderRadius: 12, fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
            transition: 'background 0.2s',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            {t('hero_cta1')}
          </a>
          <a href="#how-it-works" onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector('#how-it-works');
            if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
          }} style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)',
            padding: '0.8rem 2rem', borderRadius: 12, fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
          }}>
            {t('hero_cta2')}
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { num: t('stat1_num'), label: t('stat1_label') },
            { num: t('stat2_num'), label: t('stat2_label') },
            { num: t('stat3_num'), label: t('stat3_label') },
          ].map((s, i, arr) => (
            <div key={i} style={{
              padding: '0.75rem 2rem',
              borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
              textAlign: 'center',
            }}>
              <span style={{ fontSize: '1.6rem', fontWeight: 800, display: 'block', lineHeight: 1.2 }}>{s.num}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 500 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}