import { Container } from '../components/Container';
import { siteData } from '../data/siteData';
import logo from '../assets/logo.png';

export function FooterSection() {
  return (
    <footer className="bg-charcoal pb-8 pt-14 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.6fr,1fr,1fr,1fr]">
          
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                <img
                  src={logo}
                  alt={`${siteData.brand} logo`}
                  className="h-12 w-12 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <span className="flex flex-col leading-none">
                <span className="font-display text-[1.35rem] text-white">
                  {siteData.brand}
                </span>

                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/45">
                  Photography · Design
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-sm font-display text-2xl leading-tight text-[#F0C490]">
              {siteData.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <FooterColumn
            title="नेव्हिगेशन"
            items={siteData.nav.map((item) => item.label)}
          />

          {/* Services */}
          <FooterColumn
            title="सेवा"
            items={siteData.services.items.map((item) => item.title)}
          />

          {/* Contact */}
          <FooterColumn
            title="संपर्क"
            items={[
              siteData.phone,
              siteData.addressLine1,
              siteData.addressLine2,
              siteData.socialHandle,
            ]}
          />
        </div>

        {/* Divider */}
        <div className="mt-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="mt-4 flex flex-col gap-2 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>{siteData.footer.copy}</span>

          <span className="hidden sm:block">
            Premium Photography & Design Studio
          </span>
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
          <li
            key={item}
            className="text-sm leading-relaxed text-white/70 transition-colors duration-200 hover:text-white"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}