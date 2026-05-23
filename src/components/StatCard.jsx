export function StatCard({ value, label, index = 0 }) {
  return (
    <div className={`px-2 ${index !== 0 ? 'border-l border-line/80 pl-4 sm:pl-6' : 'pl-0'}`}>
      <div className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] leading-none text-charcoal">
        {value}
      </div>
      <div className="mt-2 max-w-[10rem] text-xs font-semibold leading-5 tracking-wide text-grayText sm:text-[13px]">
        {label}
      </div>
    </div>
  );
}
