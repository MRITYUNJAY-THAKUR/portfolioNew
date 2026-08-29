import { forwardRef, useRef, useImperativeHandle } from 'react';
import { useInViewport } from '~/hooks';
import { classes, cssProps, numToMs } from '~/utils/style';
import styles from './reveal.module.css';

export const Reveal = forwardRef(
  (
    {
      as: Component = 'div',
      children,
      className,
      animation = 'fade-up',
      delay = 0,
      duration = '800ms',
      threshold = 0.1,
      rootMargin = '0px 0px -6% 0px',
      style,
      visible: forceVisible,
      ...rest
    },
    ref
  ) => {
    const internalRef = useRef(null);
    useImperativeHandle(ref, () => internalRef.current);

    const inViewport = useInViewport(internalRef, true, {
      threshold,
      rootMargin,
    });

    const isVisible = forceVisible !== undefined ? forceVisible : inViewport;

    const delayMs = typeof delay === 'number' ? numToMs(delay) : delay;
    const durationMs = typeof duration === 'number' ? numToMs(duration) : duration;

    const combinedStyle = {
      ...style,
      ...cssProps({
        delay: delayMs,
        duration: durationMs,
      }),
    };

    return (
      <Component
        ref={internalRef}
        className={classes(styles.reveal, className)}
        data-visible={isVisible}
        data-animation={animation}
        style={combinedStyle}
        {...rest}
      >
        {typeof children === 'function' ? children({ visible: isVisible }) : children}
      </Component>
    );
  }
);

Reveal.displayName = 'Reveal';

export const RevealItem = forwardRef(
  (
    {
      as: Component = 'div',
      children,
      className,
      index = 0,
      stagger = 80,
      delay = 0,
      duration = '700ms',
      visible = true,
      style,
      ...rest
    },
    ref
  ) => {
    const itemDelayMs = numToMs(index * stagger);
    const baseDelayMs = typeof delay === 'number' ? numToMs(delay) : delay;
    const durationMs = typeof duration === 'number' ? numToMs(duration) : duration;

    const combinedStyle = {
      ...style,
      ...cssProps({
        'item-delay': itemDelayMs,
        delay: baseDelayMs,
        duration: durationMs,
      }),
    };

    return (
      <Component
        ref={ref}
        className={classes(styles.item, className)}
        data-visible={visible}
        style={combinedStyle}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

RevealItem.displayName = 'RevealItem';
