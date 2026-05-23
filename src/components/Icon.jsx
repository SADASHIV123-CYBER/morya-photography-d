export function WhatsAppIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.92.55 3.79 1.6 5.4L2 22l4.84-1.7a9.95 9.95 0 0 0 5.2 1.45h.01c5.46 0 9.91-4.45 9.91-9.91A9.83 9.83 0 0 0 12.04 2zm5.71 14.06c-.24.68-1.4 1.3-1.94 1.34-.52.04-1.06.07-3.05-.65-2.57-.92-4.2-3.5-4.33-3.66-.13-.17-1.05-1.39-1.05-2.66 0-1.27.66-1.89.9-2.16.24-.27.52-.34.69-.34l.5.01c.16 0 .37-.06.58.44.24.59.78 2.05.85 2.2.07.14.12.32.02.5-.1.18-.15.29-.3.45-.15.16-.31.36-.45.49-.15.13-.3.28-.13.55.17.27.76 1.26 1.64 2.04 1.12 1 2.07 1.32 2.34 1.45.27.13.43.11.59-.07.16-.18.68-.78.86-1.05.18-.27.36-.22.6-.13.24.08 1.55.73 1.82.86.27.13.45.2.51.31.06.11.06.65-.18 1.33z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PhoneIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M21 16.5v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.1 3.8 2 2 0 0 1 3.09 1.6h3a2 2 0 0 1 2 1.72c.13.9.36 1.79.69 2.64a2 2 0 0 1-.45 2.11L7.1 9.3a16 16 0 0 0 6 6l1.23-1.23a2 2 0 0 1 2.11-.45c.85.33 1.74.56 2.64.7a2 2 0 0 1 1.72 2.18z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowNEIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M7 17L17 7M17 7H8M17 7v9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.3l7.1-.7L12 2z" fill="currentColor" />
    </svg>
  );
}
