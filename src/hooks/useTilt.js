import { useRef, useCallback } from 'react';

// 3D tilt: rotates the element toward the cursor, eases back on leave
export default function useTilt(max = 12) {
  const ref = useRef(null);

  const onMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.classList.remove('leave');
    el.style.transform = `rotateX(${-y * max}deg) rotateY(${x * max}deg)`;
  }, [max]);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('leave');
    el.style.transform = '';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
