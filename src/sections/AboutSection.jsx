import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { siteData } from '../data/siteData';

export function AboutSection() {
  return (
    <section id="about" className="bg-cream py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:gap-14">
          <Reveal>
            <div className="overflow-hidden rounded-[1.5rem] bg-ivory shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=1200&auto=format&fit=crop&q=80"
                alt="About Morya photography"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow={siteData.about.section}
              title={
                <>
                  {siteData.about.heading.split('.')[0]}{' '}
                  <span className="italic text-saffron-deep">एक कथा.</span>
                </>
              }
            />
            <Reveal>
              <p className="mt-6 max-w-2xl text-[15px] leading-8 text-charcoalSoft sm:text-lg">
                {siteData.about.body}
              </p>
            </Reveal>

            <div className="mt-8 flex flex-wrap gap-3">
              {siteData.about.bullets.map((bullet, index) => (
                <Reveal key={bullet} delay={index * 0.05}>
                  <div className="inline-flex items-center gap-3 rounded-full border border-line bg-white px-4 py-3 text-sm font-semibold text-charcoal shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                    <span className="h-2 w-2 rounded-full bg-saffron" />
                    {bullet}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
