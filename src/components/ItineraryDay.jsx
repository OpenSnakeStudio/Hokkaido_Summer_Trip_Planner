export default function ItineraryDay({ day }) {
    return (
        <div className="premium-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ color: 'var(--text-main)' }}>Day {day.day}</h3>
                <span className="lavender-tag">{day.date}</span>
            </div>
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                {day.activities.map((activity, idx) => (
                    <li key={idx} style={{
                        padding: '0.8rem 0',
                        borderBottom: idx === day.activities.length - 1 ? 'none' : '1px solid #eee',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '0.95rem'
                    }}>
                        <span style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: 'var(--meadow-green)',
                            marginRight: '1rem'
                        }}></span>
                        {activity}
                    </li>
                ))}
            </ul>
            <button style={{
                marginTop: '1rem',
                background: 'none',
                border: `1px dashed var(--biei-blue)`,
                color: 'var(--biei-blue)',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                width: '100%',
                cursor: 'pointer',
                fontWeight: '600'
            }}>
                + Add Activity
            </button>
        </div>
    )
}
