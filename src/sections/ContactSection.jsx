import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { siteData } from '../data/siteData';
import { ContactCard } from '../components/ContactCard';
import { PrimaryButton, SecondaryButton } from '../components/Button';
import { WhatsAppIcon, PhoneIcon } from '../components/Icon';
import { Reveal } from '../components/Reveal';

export function ContactSection() {
  return (
    <section id="contact" className="bg-cream py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow={siteData.contact.section}
              title={
                <>
                  चला, तुमची<br />
                  <span className="italic text-saffron-deep">कथा सांगू.</span>
                </>
              }
              subtitle={siteData.contact.subheading}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href={siteData.whatsappHref} className="w-full sm:w-auto sm:px-7 sm:py-4">
                <WhatsAppIcon className="h-5 w-5" />
                <span>{siteData.hero.ctaPrimary}</span>
              </PrimaryButton>
              <SecondaryButton href={`tel:${siteData.phoneHref}`} className="w-full sm:w-auto sm:px-7 sm:py-4">
                <PhoneIcon className="h-5 w-5" />
                <span>{siteData.hero.ctaSecondary}</span>
              </SecondaryButton>
            </div>
          </div>

          <Reveal>
            <div className="rounded-[1.5rem] border border-line bg-white p-2 shadow-premium">
              <div className="space-y-5 px-5 py-5 sm:px-6 sm:py-6">
                <ContactCard
                  label="फोन"
                  icon={<PhoneIcon className="h-3.5 w-3.5" />}
                >
                  {siteData.phone}
                </ContactCard>
                <ContactCard
                  label="पत्ता"
                  icon={
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                      <path d="M12 22s8-7.58 8-13a8 8 0 1 0-16 0c0 5.42 8 13 8 13z" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  }
                >
                  <div>{siteData.addressLine1}</div>
                  <div className="mt-1 text-sm font-medium text-grayText">{siteData.addressLine2}</div>
                </ContactCard>
                <ContactCard
                  label="वेळ"
                  icon={
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  }
                >
                  {siteData.hours}
                </ContactCard>
              </div>

              <div className="mx-4 mb-4 rounded-[1rem] bg-cream p-4 sm:mx-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-grayText">
                  नकाशा
                </div>
                <div className="mt-1 flex items-center justify-between gap-4">
                  <div className="text-[15px] font-semibold text-charcoal">मेन रोड, बसमत</div>
                  <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-saffron-deep">
                    पाहा
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                      <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
