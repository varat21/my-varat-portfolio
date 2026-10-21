import { motion } from 'framer-motion';

/**
 * Scroll-triggered fade/slide-in wrapper.
 * Children animate in the first time they enter the viewport.
 */
export default function Reveal({ children, className = '', delay = 0, y = 28, as = 'div', ...rest }) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}
