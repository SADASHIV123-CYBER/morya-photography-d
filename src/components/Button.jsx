import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[15px] font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron-deep/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream will-change-transform';

export function PrimaryButton({
  as: Component = 'a',
  className = '',
  children,
  ...props
}) {
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -1 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={cn(
        base,
        'bg-gradient-to-b from-saffron to-saffron-deep text-white shadow-[0_10px_24px_-8px_rgba(199,91,30,0.55)]',
        className
      )}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

export function SecondaryButton({
  as: Component = 'a',
  className = '',
  children,
  ...props
}) {
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -1 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={cn(
        base,
        'border border-charcoal/10 bg-white/90 text-charcoal backdrop-blur-md hover:bg-white',
        className
      )}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}