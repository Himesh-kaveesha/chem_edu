import { useState } from 'react';

export default function ChatStartDemo({ onBack }) {
  const [selectedOption, setSelectedOption] = useState('Past papers');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [hasSelectedPastYear, setHasSelectedPastYear] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState('Western Province');
  const [expandedProvince, setExpandedProvince] = useState(null);

  const resourceOptions = [
    'Past papers',
    'Model papers',
    'Provincial papers',
    'Marking schemes',
    'Inorganic practicals',
    'Quizzes',
  ];

  const pastPaperLinks = {
    '2024': {
      mcq: 'https://drive.google.com/file/d/1Euj0okkxYqb5aTndVuvLh1svtjudlUOY/view?usp=drive_link',
      essay: '',
    },
    // Add other years like this:
    // '2025': {
    //   mcq: 'https://drive.google.com/file/d/your-mcq-id/view?usp=drive_link',
    //   essay: 'https://drive.google.com/file/d/your-essay-id/view?usp=drive_link',
    // },
  };



  const pastPaperYears = Array.from({ length: 26 }, (_, index) => String(2025 - index));

  const provincialPapers = [
    { province: 'Western Province', years: ['2025', '2024', '2023', '2022'] },
    { province: 'Central Province', years: ['2025', '2023', '2021'] },
    { province: 'Southern Province', years: ['2025', '2024', '2022'] },
    { province: 'Northern Province', years: ['2025', '2024', '2021'] },
    { province: 'Eastern Province', years: ['2025', '2023', '2020'] },
  ];

  const selectedProvinceData = provincialPapers.find((provinceItem) => provinceItem.province === selectedProvince) ?? provincialPapers[0];
  const selectedYearPaperLinks = pastPaperLinks[selectedYear];

  const handlePastPaperYearSelect = (year) => {
    setSelectedYear(year);
    setHasSelectedPastYear(true);
  };

  const handlePastPaperTypeOpen = (paperType) => {
    const paperLink = pastPaperLinks[selectedYear]?.[paperType];

    if (paperLink) {
      window.open(paperLink, '_blank', 'noopener,noreferrer');
    }
  };

  const renderSelectionPanel = () => {
    if (selectedOption === 'Past papers') {
      return (
        <div style={{ width: '100%', maxWidth: '560px', textAlign: 'left', padding: '1rem', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(255,255,255,0.10)' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--white-50)', marginBottom: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Choose year
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(88px, 1fr))', gap: '0.6rem' }}>
            {pastPaperYears.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => handlePastPaperYearSelect(year)}
                style={{
                  padding: '0.7rem 0.8rem',
                  borderRadius: '12px',
                  border: selectedYear === year ? '0.5px solid rgba(123,92,240,0.5)' : '0.5px solid rgba(255,255,255,0.12)',
                  background: selectedYear === year ? 'rgba(123,92,240,0.22)' : 'rgba(255,255,255,0.05)',
                  color: 'var(--white)',
                  cursor: 'pointer',
                  fontSize: '0.88rem',
                  fontWeight: 600
                }}
              >
                {year}
              </button>
            ))}
          </div>
          <div style={{ marginTop: '0.9rem', color: 'var(--white-80)', fontSize: '0.9rem', lineHeight: 1.6 }}>
            Showing past papers for <strong style={{ color: 'var(--white)' }}>{selectedYear}</strong>.
            <div style={{ color: 'var(--white-50)', fontSize: '0.82rem', marginTop: '0.25rem' }}>
              Years are listed from 2025 at the top down to 2000 at the bottom.
            </div>

            {hasSelectedPastYear && (
              <div style={{ marginTop: '0.8rem' }}>
                <div style={{ color: 'var(--white-50)', fontSize: '0.82rem', marginBottom: '0.45rem' }}>
                  Choose paper type for {selectedYear}:
                </div>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => handlePastPaperTypeOpen('mcq')}
                    style={{
                      padding: '0.5rem 0.85rem',
                      borderRadius: '10px',
                      border: '0.5px solid rgba(123,92,240,0.45)',
                      background: 'rgba(123,92,240,0.2)',
                      color: 'var(--white)',
                      cursor: 'pointer',
                      fontSize: '0.82rem',
                      fontWeight: 600
                    }}
                  >
                    MCQ paper
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePastPaperTypeOpen('essay')}
                    style={{
                      padding: '0.5rem 0.85rem',
                      borderRadius: '10px',
                      border: '0.5px solid rgba(0,212,255,0.45)',
                      background: 'rgba(0,212,255,0.15)',
                      color: 'var(--white)',
                      cursor: 'pointer',
                      fontSize: '0.82rem',
                      fontWeight: 600
                    }}
                  >
                    Essay paper
                  </button>
                </div>
              </div>
            )}

            {!selectedYearPaperLinks?.mcq && !selectedYearPaperLinks?.essay && (
              <div style={{ color: 'var(--white-50)', fontSize: '0.82rem', marginTop: '0.25rem' }}>
                No MCQ or Essay link added for {selectedYear} yet. Add both in pastPaperLinks.
              </div>
            )}
            {selectedYearPaperLinks && !selectedYearPaperLinks.mcq && (
              <div style={{ color: 'var(--white-50)', fontSize: '0.82rem', marginTop: '0.25rem' }}>
                MCQ link missing for {selectedYear}.
              </div>
            )}
            {selectedYearPaperLinks && !selectedYearPaperLinks.essay && (
              <div style={{ color: 'var(--white-50)', fontSize: '0.82rem', marginTop: '0.25rem' }}>
                Essay link missing for {selectedYear}.
              </div>
            )}
          </div>
        </div>
      );
    }

    if (selectedOption === 'Provincial papers') {
      return (
        <div style={{ width: '100%', maxWidth: '560px', textAlign: 'left', padding: '1rem', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(255,255,255,0.10)' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--white-50)', marginBottom: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Choose province
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.7rem' }}>
            {provincialPapers.map((provinceItem) => (
              <div key={provinceItem.province} style={{ borderRadius: '14px', overflow: 'hidden', border: selectedProvince === provinceItem.province ? '0.5px solid rgba(123,92,240,0.5)' : '0.5px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProvince(provinceItem.province);
                    setExpandedProvince((current) => (current === provinceItem.province ? null : provinceItem.province));
                    setSelectedYear(provinceItem.years[0]);
                  }}
                  style={{
                    width: '100%',
                    padding: '0.95rem 1rem',
                    border: 'none',
                    background: 'transparent',
                    color: 'var(--white)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.96rem',
                    fontWeight: 700
                  }}
                >
                  <span>{provinceItem.province}</span>
                  <span style={{ color: 'var(--white-50)', fontSize: '0.8rem' }}>{expandedProvince === provinceItem.province ? 'Hide years' : 'Show years'}</span>
                </button>

                {expandedProvince === provinceItem.province && (
                  <div style={{ padding: '0 1rem 1rem' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                      {provinceItem.years.map((year) => (
                        <button
                          key={year}
                          type="button"
                          onClick={() => setSelectedYear(year)}
                          style={{
                            padding: '0.38rem 0.65rem',
                            borderRadius: '999px',
                            background: selectedYear === year ? 'rgba(123,92,240,0.24)' : 'rgba(255,255,255,0.07)',
                            border: selectedYear === year ? '0.5px solid rgba(123,92,240,0.5)' : '0.5px solid rgba(255,255,255,0.10)',
                            fontSize: '0.8rem',
                            color: 'var(--white)',
                            cursor: 'pointer'
                          }}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                   
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', background: 'radial-gradient(circle at top, rgba(123,92,240,0.22), transparent 48%), linear-gradient(180deg, #090912 0%, #07070d 100%)' }}>
      <div style={{ width: '100%', maxWidth: '720px', borderRadius: '28px', padding: '2rem', background: 'rgba(255,255,255,0.04)', border: '0.5px solid var(--card-border)', boxShadow: '0 30px 80px rgba(0,0,0,0.35)', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(0, 212, 255, 0.16)', border: '0.5px solid rgba(0, 212, 255, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.7rem', color: 'var(--cyan)' }}>💬</div>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', margin: 0 }}>Chat Bot Start Page</h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--white-50)', maxWidth: '520px', lineHeight: 1.7, margin: 0 }}>
          This is the frontend landing page for the chat bot launcher. Backend chat logic can be connected here later.
        </p>
        <div style={{ width: '100%', maxWidth: '560px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem', marginTop: '0.25rem' }}>
          {resourceOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                setSelectedOption(option);
                if (option !== 'Past papers') {
                  setSelectedYear('2025');
                  setHasSelectedPastYear(false);
                }
                if (option !== 'Provincial papers') {
                  setSelectedProvince('Western Province');
                  setExpandedProvince(null);
                }
              }}
              style={{
                padding: '0.85rem 1rem',
                borderRadius: '16px',
                background: selectedOption === option ? 'rgba(123,92,240,0.22)' : 'rgba(255,255,255,0.05)',
                border: selectedOption === option ? '0.5px solid rgba(123,92,240,0.45)' : '0.5px solid rgba(255,255,255,0.12)',
                color: 'var(--white)',
                fontSize: '0.9rem',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'transform 0.2s ease, border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease',
                boxShadow: selectedOption === option ? '0 0 0 1px rgba(123,92,240,0.18), 0 12px 28px rgba(123,92,240,0.18)' : 'none',
                transform: selectedOption === option ? 'translateY(-1px)' : 'translateY(0)'
              }}
            >
              {option}
            </button>
          ))}
        </div>

       

        {renderSelectionPanel()}

        

        <button type="button" onClick={onBack} style={{ marginTop: '0.5rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.18)', color: 'var(--white)', padding: '0.75rem 1.25rem', borderRadius: '999px', cursor: 'pointer' }}>
          Back to site
        </button>
      </div>
    </div>
  );
}