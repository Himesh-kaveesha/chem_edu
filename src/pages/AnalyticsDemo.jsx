export default function AnalyticsDemo() {
  return (
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
      <h3 style={{ fontFamily: "'Syne', sans-serif" }}>Predictive Institutional Telemetry</h3>
      <div style={{ height: '140px', background: 'rgba(255,255,255,0.02)', border: '1px dashed var(--white-20)', borderRadius: '12px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '1rem' }}>
        <div style={{ width: '30px', height: '60%', background: 'var(--accent)', borderRadius: '4px 4px 0 0' }}></div>
        <div style={{ width: '30px', height: '75%', background: 'var(--accent-bright)', borderRadius: '4px 4px 0 0' }}></div>
        <div style={{ width: '30px', height: '45%', background: 'var(--accent)', borderRadius: '4px 4px 0 0' }}></div>
        <div style={{ width: '30px', height: '90%', background: 'var(--cyan)', borderRadius: '4px 4px 0 0' }}></div>
        <div style={{ width: '30px', height: '85%', background: 'var(--accent-bright)', borderRadius: '4px 4px 0 0' }}></div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="responsive-dash-row">
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '0.5px solid var(--card-border)' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--white-50)' }}>Retention Index Probability</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '5px', color: '#00E676' }}>98.24%</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '0.5px solid var(--card-border)' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--white-50)' }}>Resource Allocation Load</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '5px', color: 'var(--cyan)' }}>Optimal</div>
        </div>
      </div>
    </div>
  );
}