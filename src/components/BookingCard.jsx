import useTilt from '../hooks/useTilt.js';
import SceneArt from './SceneArt.jsx';
import { inr, fmtDate } from '../data.js';

export default function BookingCard({ item, bookedDate, onChoose }) {
  const tilt = useTilt(12);
  const isKayak = item.key === 'kayak';

  return (
    <div className="scene">
      <div
        className="card"
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        onTouchStart={(e) => e.currentTarget.classList.add('touch')}
      >
        {/* pop-out props: transparent images, no background box */}
        {isKayak ? (
          <>
            <div className="prop wave"><img src="/wave.svg" alt="" draggable="false" /></div>
            <div className="prop boat"><img src="/boat.svg" alt="" draggable="false" /></div>
          </>
        ) : (
          <>
            <div className="prop tent"><img src="/tent.svg" alt="" draggable="false" /></div>
            <div className="prop bush"><img src="/bush.svg" alt="" draggable="false" /></div>
          </>
        )}
        <div className="prop stone"><img src="/stone.svg" alt="" draggable="false" /></div>

        <div className="media"><SceneArt type={item.key} /></div>

        <div className="body">
          <div className="title">{item.title}</div>

          <div className="price-main">
            <span className="price-amount">{inr(item.price)}</span>
            <span className="price-separator">/</span>
            <span className="price-duration">{item.duration}</span>
          </div>
          <div className="per">per person</div>

          <div className="loc">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <span>{item.place}</span>
          </div>

          {bookedDate && (
            <div className="badge"><i /><span>Booked for {fmtDate(bookedDate)}</span></div>
          )}

          <button className="cta" onClick={onChoose}>
            {bookedDate ? 'Change Booking' : 'Choose Date'}
          </button>
        </div>
      </div>
    </div>
  );
}
