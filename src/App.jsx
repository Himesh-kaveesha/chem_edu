import React, { useState, useEffect } from 'react';
import OverviewDemo from './pages/OverviewDemo.jsx';
import StudentsDemo from './pages/StudentsDemo.jsx';
import AnalyticsDemo from './pages/AnalyticsDemo.jsx';
import FacultyDemo from './pages/FacultyDemo.jsx';
import GetStartedDemo from './pages/GetStartedDemo.jsx';
import ChatStartDemo from './pages/ChatStartDemo.jsx';

const demoPages = {
  overview: OverviewDemo,
  students: StudentsDemo,
  analytics: AnalyticsDemo,
  faculty: FacultyDemo,
  'get-started': GetStartedDemo,
  'chat-start': ChatStartDemo,
};

export default function App() {
  const [activePage, setActivePage] = useState('overview');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isChatRotating, setIsChatRotating] = useState(false);
  const [showChatPrompt, setShowChatPrompt] = useState(false);
  const ActiveDemoPage = demoPages[activePage] ?? OverviewDemo;

  // Handle transparent to blurred navbar background switch on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isChatRotating) {
      return undefined;
    }

    const rotationTimer = window.setTimeout(() => {
      setIsChatRotating(false);
    }, 700);

    return () => window.clearTimeout(rotationTimer);
  }, [isChatRotating]);

  useEffect(() => {
    if (!showChatPrompt) {
      return undefined;
    }

    const promptTimer = window.setTimeout(() => {
      setShowChatPrompt(false);
    }, 1400);

    return () => window.clearTimeout(promptTimer);
  }, [showChatPrompt]);

  const handleChatLauncherClick = () => {
    setActivePage('chat-start');
    setIsChatRotating(true);
    setShowChatPrompt(true);
  };

  const handleChatStartClick = () => {
    setShowChatPrompt(false);
    setActivePage('chat-start');
  };

  // Inline CSS Variables and Globals Injection
  useEffect(() => {
    const styles = `
      :root {
        --accent: #7B5CF0;
        --accent-bright: #9D7FF5;
        --accent-glow: rgba(123, 92, 240, 0.35);
        --cyan: #00D4FF;
        --cyan-dim: rgba(0, 212, 255, 0.15);
        --white: #FFFFFF;
        --white-80: rgba(255,255,255,0.8);
        --white-50: rgba(255,255,255,0.5);
        --white-20: rgba(255,255,255,0.2);
        --white-10: rgba(255,255,255,0.1);
        --white-06: rgba(255,255,255,0.06);
        --dark: #08080F;
        --card-bg: rgba(255,255,255,0.04);
        --card-border: rgba(255,255,255,0.1);
      }
      * { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body {
        font-family: 'DM Sans', sans-serif;
        background: var(--dark);
        color: var(--white);
        overflow-x: hidden;
      }
      /* Custom responsive overrides for grid structures */
      @media (max-width: 968px) {
        .responsive-features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .responsive-stats-inner { grid-template-columns: repeat(2, 1fr) !important; }
        .responsive-dash-body { grid-template-columns: 1fr !important; }
        .responsive-hero-stats { position: relative !important; right: auto !important; bottom: auto !important; margin: 2rem auto 0 !important; width: 100%; padding: 0 2rem; }
        .responsive-hero { height: auto !important; min-height: auto !important; padding: 8rem 0 4rem !important; flex-direction: column; }
        .responsive-hero-content { padding: 0 2rem !important; text-align: center; max-width: 100% !important; margin-top: 0 !important; }
        .responsive-hero-actions { justify-content: center; }
        nav { padding: 1rem !important; }
        .nav-links { gap: 1rem !important; }
        .nav-links li:not(:last-child) { display: none; } /* Collapses raw text links on mobile */
      }
      @media (max-width: 580px) {
        .responsive-features-grid { grid-template-columns: 1fr !important; }
        .responsive-stats-inner { grid-template-columns: 1fr !important; }
        .responsive-dash-row { grid-template-columns: 1fr !important; }
        .chat-launcher { right: 1rem !important; bottom: 1rem !important; width: 58px !important; height: 58px !important; }
        .chat-launcher-bubble { right: 4.75rem !important; bottom: 1.25rem !important; }
      }

      @keyframes bubblePop {
        0% { opacity: 0; transform: translateX(10px) scale(0.92); }
        16% { opacity: 1; transform: translateX(0) scale(1); }
        84% { opacity: 1; transform: translateX(0) scale(1); }
        100% { opacity: 0; transform: translateX(0) scale(0.96); }
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  if (activePage === 'chat-start') {
    return <ChatStartDemo onBack={() => setActivePage('overview')} />;
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--dark)', position: 'relative' }}>
      
      {/* NAVIGATION BAR */}
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.25rem 3rem',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        background: isScrolled ? 'rgba(8,8,15,0.92)' : 'rgba(8,8,15,0.6)',
        borderBottom: '0.5px solid var(--white-10)',
        transition: 'all 0.3s'
      }}>
        <a href="#" className="nav-logo" style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '1.3rem',
          letterSpacing: '-0.02em',
          color: 'var(--white)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <div style={{
            width: '8px', height: '8px',
            background: 'var(--accent)',
            borderRadius: '50%',
            boxShadow: '0 0 12px var(--accent)',
            animation: 'pulse 2s infinite'
          }}></div>
          CHEM_Edu
        </a>
        <ul className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', listStyle: 'none' }}>
          {['overview', 'students', 'analytics', 'faculty'].map((page) => (
            <li key={page}>
              <a 
                href="#demo-showcase" 
                onClick={() => setActivePage(page)}
                style={{
                  color: activePage === page ? 'var(--white)' : 'var(--white-50)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: activePage === page ? '600' : '400',
                  letterSpacing: '0.03em',
                  textTransform: 'capitalize',
                  transition: 'color 0.2s'
                }}
              >
                {page}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#demo-showcase" 
              onClick={() => setActivePage('get-started')}
              style={{
                background: 'var(--accent)',
                color: 'var(--white)',
                padding: '0.55rem 1.4rem',
                borderRadius: '50px',
                fontWeight: '500',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 0 20px var(--accent-glow)',
                transition: 'all 0.2s'
              }}
            >
              Get Started →
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="responsive-hero" style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
            opacity: 0.55
          }}
        >
          <source src="/Epic_sci-fi_style_DNA_202605311005.mp4" type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(105deg, rgba(8,8,15,0.92) 0%, rgba(8,8,15,0.75) 40%, rgba(8,8,15,0.25) 70%, rgba(8,8,15,0.1) 100%)',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '200px',
          background: 'linear-gradient(to top, var(--dark), transparent)',
          zIndex: 2
        }}></div>

        <div className="responsive-hero-content" style={{ position: 'relative', zIndex: 3, maxWidth: '620px', padding: '0 3rem', marginTop: '5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(123, 92, 240, 0.15)',
            border: '0.5px solid rgba(123, 92, 240, 0.4)',
            color: 'var(--accent-bright)',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '0.4rem 1rem',
            borderRadius: '50px',
            marginBottom: '1.5rem'
          }}>
            <span style={{ width: '6px', height: '6px', background: 'var(--accent-bright)', borderRadius: '50%' }}></span>
            Next-Gen Academic Platform
          </div>
          
          
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '0.8rem' }}>
            D2JK<br />
            <span style={{
              background: 'linear-gradient(135deg, var(--accent-bright), var(--cyan))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>CHEMISTRY</span><br />
          </h1>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.25rem, 5vw, 2.1rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.4rem' }}>
            CLASS MANAGEMENT SYSTEM.
          </h2>
          <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--white-50)', lineHeight: 1.7, maxWidth: '480px', marginBottom: '2.2rem' }}>
         A Next-Generation Chemistry Learning Platform designed to make education smarter, simpler, and more engaging.

Connect with your classes, access learning resources, monitor your progress, and experience a modern approach to chemistry education—all from one powerful platform.</p>
          
          <div className="responsive-hero-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
            <a href="#features" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--accent)',
              color: 'var(--white)',
              padding: '0.85rem 2rem',
              borderRadius: '50px',
              fontSize: '0.95rem',
              fontWeight: 500,
              textDecoration: 'none',
              boxShadow: '0 0 30px var(--accent-glow)'
            }}>
              Explore Platform
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#demo-showcase" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--white-80)',
              fontSize: '0.95rem',
              fontWeight: 400,
              textDecoration: 'none',
              padding: '0.85rem 1.5rem',
              borderRadius: '50px',
              border: '0.5px solid var(--white-20)',
              background: 'var(--white-06)',
              backdropFilter: 'blur(10px)'
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
                <path d="M6 5.5l4 2.5-4 2.5V5.5z" fill="rgba(255,255,255,0.7)" />
              </svg>
              View Live Demos
            </a>
          </div>
        </div>

        {/* FLOATING STAT CARDS */}
        <div className="responsive-hero-stats" style={{ position: 'absolute', right: '3rem', bottom: '8rem', zIndex: 3, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { icon: '🎓', val: '20 +', label: 'Active Students', color: 'rgba(123, 92, 240, 0.2)' }
            // { icon: '📊', val: '94.7%', label: 'Attendance Rate', color: 'rgba(0, 212, 255, 0.15)' },
            // { icon: '⚡', val: '3.2s', label: 'Avg. Report Time', color: 'rgba(0, 230, 120, 0.15)' }
          ].map((stat, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(20px)',
              border: '0.5px solid var(--white-10)',
              borderRadius: '14px',
              padding: '0.9rem 1.3rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              minWidth: '210px'
            }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', background: stat.color }}>{stat.icon}</div>
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.3rem', fontWeight: 700, lineHeight: 1 }}>{stat.val}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--white-50)', marginTop: '2px' }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE CAPABILITIES / FEATURES SECTION */}
      <section id="features" style={{ padding: '6rem 3rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3.5rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-bright)', marginBottom: '1rem' }}>Core Capabilities</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '1rem' }}>Everything your institution<br />needs in one place.</h2>
          <p style={{ fontSize: '1rem', color: 'var(--white-50)', fontWeight: 300, maxWidth: '500px', lineHeight: 1.7 }}>From enrollment to graduation — NexusEdu provides the intelligence layer your campus deserves.</p>
        </div>

        <div className="responsive-features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {[
            { icon: '👤', title: 'Student Profiles', desc: 'Comprehensive digital profiles with academic history, attendance records, and behavioral insights in real time.' },
            { icon: '📈', title: 'Grade Analytics', desc: 'Deep-dive into academic performance with interactive charts, trend analysis, and predictive GPA modeling.' },
            { icon: '📅', title: 'Timetable Builder', desc: 'AI-assisted scheduling that resolves conflicts automatically and adapts to teacher availability.' },
            { icon: '✅', title: 'Smart Attendance', desc: 'Biometric, QR, and manual attendance logging with automated parent notifications and reporting.' },
            { icon: '💬', title: 'Communication Hub', desc: 'Unified messaging between faculty, students, and parents with announcements, emails, and alerts.' },
            { icon: '🔐', title: 'Secure Access', desc: 'Role-based permissions with SSO, 2FA, and audit trails ensuring complete data privacy.' }
          ].map((feat, i) => (
            <div key={i} style={{ background: 'var(--card-bg)', border: '0.5px solid var(--card-border)', borderRadius: '18px', padding: '1.8rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: '1.2rem', background: 'rgba(123, 92, 240, 0.15)', border: '0.5px solid rgba(123, 92, 240, 0.25)' }}>{feat.icon}</div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.6rem' }}>{feat.title}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--white-50)', lineHeight: 1.65 }}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ background: 'linear-gradient(135deg, rgba(123,92,240,0.08) 0%, rgba(0,212,255,0.05) 100%)', borderTop: '0.5px solid var(--card-border)', borderBottom: '0.5px solid var(--card-border)', padding: '5rem 3rem' }}>
        <div className="responsive-stats-inner" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
          {[
            { value: '500+', label: 'Institutions Worldwide' },
            { value: '2M+', label: 'Students Managed' },
            { value: '99.9%', label: 'Uptime Guarantee' },
            { value: '40%', label: 'Admin Time Saved' }
          ].map((s, idx) => (
            <div key={idx}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.03em', background: 'linear-gradient(135deg, var(--white), var(--accent-bright))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1, marginBottom: '0.5rem' }}>{s.value}</div>
              <div style={{ fontSize: '0.88rem', color: 'var(--white-50)', fontWeight: 300 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* DYNAMIC DEMO INTERACTIVE PREVIEW SYSTEM */}
      <section id="demo-showcase" style={{ padding: '5rem 3rem 7rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-bright)', marginBottom: '1rem' }}>Interactive Sandbox</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '1rem' }}>Explore Live Engine Previews.</h2>
          <p style={{ fontSize: '1rem', color: 'var(--white-50)', fontWeight: 300, maxWidth: '500px', lineHeight: 1.7 }}>Use the navbar options above or the control dock below to toggle live dashboards engineered for multi-tier ecosystems.</p>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.03)', border: '0.5px solid var(--card-border)', borderRadius: '24px', overflow: 'hidden', marginTop: '3rem' }}>
          {/* Top Address Frame Bar */}
          <div style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '0.5px solid var(--card-border)', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '10px', height: '10px', background: '#FF5F57', borderRadius: '50%' }}></div>
            <div style={{ width: '10px', height: '10px', background: '#FEBC2E', borderRadius: '50%' }}></div>
            <div style={{ width: '10px', height: '10px', background: '#28C840', borderRadius: '50%' }}></div>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '0.5px solid var(--card-border)', borderRadius: '6px', padding: '0.35rem 0.8rem', fontSize: '0.75rem', color: 'var(--white-50)', marginLeft: '1rem', fontFamily: 'monospace' }}>
              nexusedu.io/engine/{activePage}
            </div>
          </div>

          <div className="responsive-dash-body" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', minHeight: '450px' }}>
            {/* Dashboard Sidebar Context Controller */}
            <div style={{ background: 'rgba(255,255,255,0.02)', borderRight: '0.5px solid var(--card-border)', padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {[
                { id: 'overview', icon: '🏠', label: 'Overview Base' },
                { id: 'students', icon: '👥', label: 'Student Matrix' },
                { id: 'analytics', icon: '📊', label: 'Telemetry Layer' },
                { id: 'faculty', icon: '👨‍🏫', label: 'Faculty Directory' },
                { id: 'get-started', icon: '⚡', label: 'Provision Cluster' }
              ].map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => setActivePage(item.id)}
                  style={{
                    padding: '0.6rem 0.9rem',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    transition: 'all 0.2s',
                    background: activePage === item.id ? 'rgba(123, 92, 240, 0.2)' : 'transparent',
                    color: activePage === item.id ? 'var(--white)' : 'var(--white-50)',
                    border: activePage === item.id ? '0.5px solid rgba(123, 92, 240, 0.3)' : '0.5px solid transparent'
                  }}
                >
                  <span>{item.icon}</span> {item.label}
                </div>
              ))}
            </div>

            {/* MAIN ROUTED RENDER VIEWS */}
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#0a0a14' }}>
              
              <ActiveDemoPage />

            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '0.5px solid var(--card-border)', padding: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.2rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '8px', height: '8px', background: 'var(--accent)', borderRadius: '50%' }}></div>
          NexusEdu
        </div>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
          <li><a href="#" style={{ color: 'var(--white-50)', textDecoration: 'none', fontSize: '0.85rem' }}>Privacy</a></li>
          <li><a href="#" style={{ color: 'var(--white-50)', textDecoration: 'none', fontSize: '0.85rem' }}>Terms</a></li>
          <li><a href="#" style={{ color: 'var(--white-50)', textDecoration: 'none', fontSize: '0.85rem' }}>Support</a></li>
        </ul>
        <p style={{ fontSize: '0.8rem', color: 'var(--white-50)' }}>© 2026 NexusEdu. All rights reserved.</p>
      </footer>

      {showChatPrompt && (
        <button
          type="button"
          onClick={handleChatStartClick}
          className="chat-launcher-bubble"
          style={{
          position: 'fixed',
          right: '5rem',
          bottom: '1.75rem',
          zIndex: 10000,
          background: 'rgba(8,8,15,0.92)',
          border: '1px solid rgba(255,255,255,0.12)',
          color: 'var(--white)',
          borderRadius: '999px',
          padding: '0.55rem 1rem',
          fontSize: '0.85rem',
          fontWeight: 600,
          letterSpacing: '0.04em',
          boxShadow: '0 18px 40px rgba(0, 0, 0, 0.35)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.12)',
          cursor: 'pointer',
          animation: 'bubblePop 1.4s ease both'
        }}>
          Start
        </button>
      )}

      <button
        type="button"
        aria-label="Open chat bot"
        onClick={handleChatLauncherClick}
        className={isChatRotating ? 'chat-launcher is-rotating' : 'chat-launcher'}
        style={{
          position: 'fixed',
          right: '1.5rem',
          bottom: '1.5rem',
          zIndex: 9999,
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.12)',
          background: 'linear-gradient(135deg, rgba(123,92,240,0.95), rgba(0,212,255,0.9))',
          color: 'var(--white)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 18px 40px rgba(0, 0, 0, 0.35), 0 0 30px rgba(123, 92, 240, 0.35)',
          cursor: 'pointer',
          backdropFilter: 'blur(12px)',
          transform: isChatRotating ? 'rotate(360deg)' : 'rotate(0deg)',
          transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease'
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7 8.5h10M7 12h7M8 19l-2.5 2V6.5A2.5 2.5 0 0 1 8 4h8a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 16 18H9.2L8 19Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

    </div>
  );
}