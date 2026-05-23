export function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoalSoft shadow-sm backdrop-blur-md ${className}`}
    >
      {children}
    </span>
  );
}
