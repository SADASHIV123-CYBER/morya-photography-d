import { motion } from 'framer-motion';
import { useInViewOnce } from '../hooks/useInViewOnce';

export function Reveal({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInViewOnce();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
