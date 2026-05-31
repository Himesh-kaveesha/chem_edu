export default function FacultyDemo() {
  const faculty = [
    { prof: 'Dr. Evelyn Harper', dept: 'Computational Engineering', status: 'In Lecture' },
    { prof: 'Prof. Marcus Vance', dept: 'Applied Quantum Physics', status: 'Available' },
    { prof: 'Dr. Clara Sterling', dept: 'Bio-Informatics Research', status: 'Off-Campus' },
  ];

  return (
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h3 style={{ fontFamily: "'Syne', sans-serif" }}>Departmental Chairs & Faculty</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {faculty.map((entry) => (
          <div key={entry.prof} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.8rem', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', border: '0.5px solid var(--card-border)', fontSize: '0.88rem' }}>
            <div>
              <div style={{ fontWeight: 600 }}>{entry.prof}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--white-50)' }}>{entry.dept}</div>
            </div>
            <div style={{ fontSize: '0.8rem', alignSelf: 'center', color: entry.status === 'Available' ? '#00E676' : '#FFC107' }}>
              ● {entry.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}