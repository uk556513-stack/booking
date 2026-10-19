import { useEffect, useState } from 'react';
import { inr, toISO } from '../data.js';

export default function BookingModal({ open, item, initialDate, onClose, onConfirm }) {
  const today = toISO(new Date());
  const [date, setDate] = useState(today);
  const [quick, setQuick] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (open) { setDate(initialDate || today); setQuick(null); setError(''); }
  }, [open]); // eslint-disable-line

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const pick = (kind) => {
    const t = new Date();
    if (kind === 'sat') t.setDate(t.getDate() + ((6 - t.getDay() + 7) % 7 || 7));
    else t.setDate(t.getDate() + kind);
    setDate(toISO(t));
    setQuick(kind);
  };

  const confirm = () => {
    if (!date) return setError('Please pick a date first.');
    if (date < today) return setError('Date cannot be in the past.');
    onConfirm(date);
  };

  return (
    <div className={`overlay ${open ? 'open' : ''}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true">
        <button className="close" onClick={onClose} aria-label="Close">×</button>
        <span className="tag">{item.emoji} {item.title}</span>
        <h2>Select Booking Date</h2>
        <p className="sub">Choose a date — {inr(item.price)} per person</p>

        <label htmlFor="date">CHOOSE DATE</label>
        <input id="date" type="date" min={today} value={date} onChange={(e) => { setDate(e.target.value); setQuick(null); }} />

        <div className="quick">
          <button className={quick === 1 ? 'on' : ''} onClick={() => pick(1)}>Tomorrow</button>
          <button className={quick === 'sat' ? 'on' : ''} onClick={() => pick('sat')}>This Saturday</button>
          <button className={quick === 7 ? 'on' : ''} onClick={() => pick(7)}>In 1 Week</button>
        </div>

        <button className="confirm" onClick={confirm}>Confirm Booking</button>
        <div className="err">{error}</div>
      </div>
    </div>
  );
}
