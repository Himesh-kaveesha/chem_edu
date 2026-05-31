export default function OverviewDemo() {
  const rows = [
    { name: 'Amal Silva', initial: 'AS', course: 'Computer Sci.', gpa: '3.87', status: 'Active', bg: '#7B5CF0', sCls: '#00E676', sBg: 'rgba(0, 230, 118, 0.15)' },
    { name: 'Nimal Perera', initial: 'NP', course: 'Business', gpa: '3.41', status: 'Active', bg: '#00B4D8', sCls: '#00E676', sBg: 'rgba(0, 230, 118, 0.15)' },
    { name: 'Rangi Jay', initial: 'RJ', course: 'Engineering', gpa: '2.95', status: 'At Risk', bg: '#F97316', sCls: '#FFC107', sBg: 'rgba(255, 193, 7, 0.15)' },
  ];

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }} className="responsive-dash-row">
        <div style={{ background: 'rgba(255,255,255,0.05)', border: '0.5px solid var(--card-border)', borderRadius: '12px', padding: '1rem' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--white-50)', marginBottom: '0.4rem' }}>Total Students</div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.5rem', fontWeight: 700 }}>12,480</div>
          <div style={{ fontSize: '0.72rem', marginTop: '0.3rem', color: '#00E676' }}>↑ 8.2% this semester</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', border: '0.5px solid var(--card-border)', borderRadius: '12px', padding: '1rem' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--white-50)', marginBottom: '0.4rem' }}>Avg. GPA Performance</div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.5rem', fontWeight: 700 }}>3.61</div>
          <div style={{ fontSize: '0.72rem', marginTop: '0.3rem', color: '#00E676' }}>↑ 0.14 vs last term</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', border: '0.5px solid var(--card-border)', borderRadius: '12px', padding: '1rem' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--white-50)', marginBottom: '0.4rem' }}>Real-time Attendance</div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.5rem', fontWeight: 700 }}>94.7%</div>
          <div style={{ fontSize: '0.72rem', marginTop: '0.3rem', color: '#FF5252' }}>↓ 1.2% vs yesterday</div>
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.05)', border: '0.5px solid var(--card-border)', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ padding: '0.8rem 1rem', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--white-50)', background: 'rgba(255,255,255,0.03)', borderBottom: '0.5px solid var(--card-border)', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '0.5rem' }}>
          <span>Student</span><span>Course</span><span>GPA</span><span>Status</span>
        </div>
        {rows.map((row) => (
          <div key={row.initial} style={{ padding: '0.75rem 1rem', fontSize: '0.82rem', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '0.5rem', alignItems: 'center', borderBottom: '0.5px solid rgba(255,255,255,0.04)' }}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: row.bg, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 600, marginRight: '0.5rem' }}>{row.initial}</span>{row.name}
            </span>
            <span style={{ color: 'var(--white-50)' }}>{row.course}</span>
            <span>{row.gpa}</span>
            <span><span style={{ padding: '0.2rem 0.6rem', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 500, color: row.sCls, background: row.sBg }}>{row.status}</span></span>
          </div>
        ))}
      </div>
    </>
  );
}