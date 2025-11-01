// Controls task visibility for chart/list

export default function StatusFilter({ activeFilter, onChange }) {
    return (
        <div className='filters'>
            {['all', 'completed', 'pending'].map((f) => (
                <button
                    key={f}
                    className={`filter-btn ${
                        activeFilter === f ? 'active' : ''
                    }`}
                    onClick={() => onChange(f)}
                >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
            ))}
        </div>
    );
}
