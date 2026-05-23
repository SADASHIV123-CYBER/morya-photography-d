import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { siteData } from '../data/siteData';
import { ServiceCard } from '../components/ServiceCard';

export function ServicesSection() {
  return (
    <section id="services" className="bg-ivory py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr,0.38fr] lg:items-end">
          <SectionHeading
            eyebrow={siteData.services.section}
            title={
              <>
                {siteData.services.heading.split(',')[0]},{' '}
                <span className="italic text-saffron-deep">
                  {siteData.services.heading.split(',')[1].trim()}
                </span>
              </>
            }
          />
          <p className="max-w-md text-[15px] leading-7 text-charcoalSoft sm:text-base lg:justify-self-end">
            {siteData.services.subheading}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {siteData.services.items.map((item, index) => (
            <ServiceCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
