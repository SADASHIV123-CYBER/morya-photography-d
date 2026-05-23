import { motion } from 'framer-motion';
import { Container } from './Container';
import { PrimaryButton, SecondaryButton } from './Button';
import { siteData } from '../data/siteData';
import { WhatsAppIcon, PhoneIcon } from './Icon';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/90 bg-cream/85 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-3 sm:h-18">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-saffron to-red-600 text-lg font-bold text-white shadow-[0_4px_12px_-4px_rgba(199,91,30,0.5)]">
            म
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.2rem] text-charcoal">{siteData.brand}</span>
            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-grayText">
              Photography · Design
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="मुख्य नेव्हिगेशन">
          {siteData.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[15px] font-semibold text-charcoalSoft hover:text-charcoal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <SecondaryButton href={`tel:${siteData.phoneHref}`} className="px-4 py-2.5 text-sm">
            <PhoneIcon className="h-4 w-4" />
            <span>कॉल करा</span>
          </SecondaryButton>
          <PrimaryButton href={siteData.whatsappHref} className="px-4 py-2.5 text-sm">
            <WhatsAppIcon className="h-4 w-4" />
            <span>व्हॉट्सअ‍ॅप</span>
          </PrimaryButton>
        </div>

        <motion.a
          whileTap={{ scale: 0.98 }}
          href={siteData.whatsappHref}
          className="inline-flex items-center justify-center rounded-full bg-charcoal px-4 py-2.5 text-sm font-semibold text-white shadow-premium sm:hidden"
        >
          <WhatsAppIcon className="h-4 w-4" />
        </motion.a>
      </Container>
    </header>
  );
}
