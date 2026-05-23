import { motion } from 'framer-motion';
import { Container } from './Container';
import { PrimaryButton, SecondaryButton } from './Button';
import { siteData } from '../data/siteData';
import { WhatsAppIcon, PhoneIcon } from './Icon';
import logo from '../assets/logo.png';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/90 bg-cream/85 backdrop-blur-xl supports-[backdrop-filter]:bg-cream/75">
      <Container className="flex h-16 items-center justify-between gap-3 sm:h-[72px]">
        
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label={siteData.brand}
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_8px_24px_-10px_rgba(0,0,0,0.18)]">
            <img
              src={logo}
              alt={`${siteData.brand} logo`}
              className="h-11 w-11 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="eager"
              decoding="async"
            />
          </div>

          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.15rem] font-semibold tracking-tight text-charcoal sm:text-[1.22rem]">
              {siteData.brand}
            </span>

            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-grayText">
              Photography · Design
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="मुख्य नेव्हिगेशन"
        >
          {siteData.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative text-[15px] font-semibold text-charcoalSoft transition-colors duration-200 hover:text-charcoal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 sm:flex">
          <SecondaryButton
            href={`tel:${siteData.phoneHref}`}
            className="px-4 py-2.5 text-sm"
          >
            <PhoneIcon className="h-4 w-4" />
            <span>कॉल करा</span>
          </SecondaryButton>

          <PrimaryButton
            href={siteData.whatsappHref}
            className="px-4 py-2.5 text-sm"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>व्हॉट्सअ‍ॅप</span>
          </PrimaryButton>
        </div>

        {/* Mobile WhatsApp */}
        <motion.a
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
          href={siteData.whatsappHref}
          aria-label="WhatsApp"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-charcoal text-white shadow-premium sm:hidden"
        >
          <WhatsAppIcon className="h-4 w-4" />
        </motion.a>
      </Container>
    </header>
  );
}