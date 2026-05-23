import { Container } from '../components/Container';
import { siteData } from '../data/siteData';
import { Reveal } from '../components/Reveal';
import { StarIcon } from '../components/Icon';

export function TestimonialSection() {
  return (
    <section className="bg-cream py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="rounded-[1.5rem] border border-line bg-white p-6 shadow-[0_24px_40px_-28px_rgba(60,30,10,0.25)] sm:p-8 lg:p-10">
              <div className="flex gap-1 text-[#FFC56B]">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-[clamp(1.5rem,3.2vw,2.2rem)] leading-[1.4] tracking-tight text-charcoal">
                {siteData.testimonial.quote}
              </blockquote>
              <div className="mt-7 flex items-center gap-3">
                <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-saffron-soft bg-ivory">
                  <img
                    src="https://images.unsplash.com/photo-1604681630513-fa6f95cd1c33?w=600&auto=format&fit=crop&q=80"
                    alt={siteData.testimonial.by}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-charcoal">{siteData.testimonial.by}</div>
                  <div className="text-xs text-grayText">{siteData.testimonial.role}</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
