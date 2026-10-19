import { ACTIVITIES, inr, fmtDate } from '../data.js';

export default function DetailsPanel({ current, booked, onSelect }) {
  const total = Object.values(ACTIVITIES).reduce(
    (sum, a) => sum + (booked[a.key] ? a.price : 0), 0
  );

  return (
    <aside className="panel">
      <h3>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="3" />
        </svg>
        Booking Details
      </h3>

      {Object.values(ACTIVITIES).map((a) => (
        <button
          key={a.key}
          className={`row ${current === a.key ? 'active' : ''}`}
          onClick={() => onSelect(a.key)}
        >
          <div className="top"><span>{a.emoji} {a.title}</span><span>{inr(a.price)}</span></div>
          <div className="bot">
            <span>per person</span>
            <span className={`chip ${booked[a.key] ? 'ok' : ''}`}>
              {booked[a.key] ? fmtDate(booked[a.key]) : 'Not booked'}
            </span>
          </div>
        </button>
      ))}

      <div className="total"><span>TOTAL PRICE</span><b>{inr(total)}</b></div>
    </aside>
  );
}
