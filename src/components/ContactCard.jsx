export function ContactCard({ icon, label, children }) {
  return (
    <div className="grid grid-cols-[2.25rem,1fr] gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-saffron-soft text-saffron-deep">
        {icon}
      </div>
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-grayText">
          {label}
        </div>
        <div className="mt-1 text-[15px] font-semibold leading-6 text-charcoal sm:text-base">
          {children}
        </div>
      </div>
    </div>
  );
}
