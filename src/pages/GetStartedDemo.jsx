export default function GetStartedDemo() {
  return (
    <div style={{ padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(123, 92, 240, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'var(--accent-bright)' }}>⚡</div>
      <h3 style={{ fontFamily: "'Syne', sans-serif" }}>Provision New Campus Node Instance</h3>
      <p style={{ fontSize: '0.82rem', color: 'var(--white-50)', maxWidth: '380px' }}>
        Deploy a sandboxed NexusEdu engine cluster bound to your active domain instantly.
      </p>
      <button style={{ background: 'var(--accent)', border: 'none', color: '#fff', padding: '0.6rem 1.5rem', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 15px var(--accent-glow)' }}>
        Initialize Workspace Cluster
      </button>
    </div>
  );
}