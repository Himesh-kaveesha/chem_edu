export default function StudentsDemo() {
  const students = [
    { name: 'Amal Silva', ID: 'NX-2026-88', credits: '120 Earned', tracking: 'Excellent Track' },
    { name: 'Nimal Perera', ID: 'NX-2026-12', credits: '94 Earned', tracking: 'Stable Track' },
    { name: 'Rangi Jay', ID: 'NX-2026-04', credits: '61 Earned', tracking: 'Intervention Required' },
    { name: 'Sasha F.', ID: 'NX-2026-90', credits: '114 Earned', tracking: 'Excellent Track' },
  ];

  return (
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--white-10)', paddingBottom: '0.5rem' }}>
        <h3 style={{ fontFamily: "'Syne', sans-serif" }}>Student Registry Database</h3>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
        {students.map((student) => (
          <div key={student.ID} style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid var(--card-border)', padding: '1rem', borderRadius: '12px' }}>
            <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{student.name}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--white-50)', margin: '4px 0 8px' }}>UID: {student.ID}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
              <span style={{ color: 'var(--cyan)' }}>{student.credits}</span>
              <span style={{ color: student.tracking.includes('Excellent') ? '#00E676' : '#FFC107' }}>{student.tracking}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}