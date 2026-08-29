import { useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { throttle } from '~/utils/throttle';
import styles from './background.module.css';

export const AppBackground = () => {
  const glowRef = useRef(null);
  const [active, setActive] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const handleMouseMove = throttle(event => {
      if (!glowRef.current) return;
      glowRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      if (!active) setActive(true);
    }, 40);

    const handleMouseLeave = () => {
      setActive(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [active, reduceMotion]);

  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.gradientBase} />
      <div className={styles.orbPrimary} />
      <div className={styles.orbSecondary} />
      <div className={styles.orbCenter} />
      <div
        ref={glowRef}
        className={styles.interactiveGlow}
        data-active={active}
      />
      <div className={styles.noiseLayer} />
    </div>
  );
};
