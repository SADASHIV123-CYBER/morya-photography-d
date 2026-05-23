import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { siteData } from '../data/siteData';
import { Reveal } from '../components/Reveal';

export function WhySection() {
  return (
    <section className="bg-charcoal py-14 text-white sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={siteData.why.section}
          title={
            <>
              {siteData.why.heading.split(' ')[0]}{' '}
              <span className="italic text-[#F0C490]">कारणे.</span>
            </>
          }
          subtitle="विश्वास, डिलिव्हरी, आणि प्रीमियम अनुभव — हेच आमचे तीन मुख्य स्तंभ आहेत."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {siteData.why.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <div className="flex h-full min-h-[220px] flex-col rounded-[1.25rem] border border-white/10 bg-white/5 p-5 shadow-[0_1px_0_rgba(255,255,255,0.04)]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F0C490]">
                  0{index + 1}
                </div>
                <h3 className="mt-3 font-display text-[1.5rem] leading-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
