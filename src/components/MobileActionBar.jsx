import { PrimaryButton, SecondaryButton } from './Button';
import { siteData } from '../data/siteData';
import { WhatsAppIcon, PhoneIcon } from './Icon';

export function MobileActionBar() {
  return (
    <div className="sticky bottom-0 z-40 border-t border-line/70 bg-soft-scrim px-4 pt-3 pb-[calc(0.9rem+env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-xl grid-cols-2 gap-2">
        <PrimaryButton href={siteData.whatsappHref} className="px-4 py-3 text-sm">
          <WhatsAppIcon className="h-4 w-4" />
          <span>{siteData.hero.ctaPrimary}</span>
        </PrimaryButton>
        <SecondaryButton href={`tel:${siteData.phoneHref}`} className="px-4 py-3 text-sm">
          <PhoneIcon className="h-4 w-4" />
          <span>{siteData.hero.ctaSecondary}</span>
        </SecondaryButton>
      </div>
    </div>
  );
}
