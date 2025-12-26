export default function BudgetSummary({ budget }) {
    const percentage = Math.round((budget.spent / budget.total) * 100);

    return (
        <div className="premium-card">
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>Budget Tracker</h3>

            <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    <span>Total Spent</span>
                    <span style={{ fontWeight: '700' }}>¥{budget.spent.toLocaleString()} / ¥{budget.total.toLocaleString()}</span>
                </div>
                <div style={{
                    width: '100%',
                    height: '12px',
                    background: '#eee',
                    borderRadius: '10px',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        width: `${percentage}%`,
                        height: '100%',
                        background: 'var(--sunshine-yellow)',
                        transition: 'width 1s ease-out'
                    }}></div>
                </div>
            </div>

            <div style={{ display: 'grid', gap: '0.8rem' }}>
                {budget.categories.map((cat, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        <span>{cat.name}</span>
                        <span>¥{cat.amount.toLocaleString()}</span>
                    </div>
                ))}
            </div>

            <button className="btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
                Add Expense
            </button>
        </div>
    )
}
