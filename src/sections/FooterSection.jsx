import { Container } from '../components/Container';
import { siteData } from '../data/siteData';

export function FooterSection() {
  return (
    <footer className="bg-charcoal pb-8 pt-12 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.6fr,1fr,1fr,1fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-saffron to-red-600 text-lg font-bold text-white">
                म
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-[1.35rem] text-white">{siteData.brand}</span>
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/45">
                  Photography · Design
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-sm font-display text-2xl leading-tight text-[#F0C490]">
              {siteData.footer.tagline}
            </p>
          </div>

          <FooterColumn title="नेव्हिगेशन" items={siteData.nav.map((item) => item.label)} />
          <FooterColumn title="सेवा" items={siteData.services.items.map((item) => item.title)} />
          <FooterColumn
            title="संपर्क"
            items={[siteData.phone, siteData.addressLine1, siteData.addressLine2, siteData.socialHandle]}
          />
        </div>

        <div className="mt-10 h-px bg-white/10" />
        <div className="mt-4 flex flex-col gap-2 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>{siteData.footer.copy}</span>
          <span>Designed for premium Marathi clients in {siteData.location}</span>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F0C490]">
        {title}
      </div>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-white/70">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
