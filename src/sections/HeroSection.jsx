import { motion } from 'framer-motion';
import { Container } from '../components/Container';
import { PrimaryButton, SecondaryButton } from '../components/Button';
import { Badge } from '../components/Badge';
import { siteData } from '../data/siteData';
import { StatCard } from '../components/StatCard';
import { WhatsAppIcon, PhoneIcon, StarIcon } from '../components/Icon';
import { Reveal } from '../components/Reveal';

export function HeroSection() {
  return (
    <section id="home" className="bg-cream pb-12 pt-6 sm:pb-16 sm:pt-10 lg:pb-24 lg:pt-12">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:gap-14">
          <div className="max-w-2xl">
            <Reveal>
              <Badge>{siteData.location} · {siteData.established}</Badge>
            </Reveal>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
              className="mt-5 font-display text-[clamp(2.75rem,9vw,5.4rem)] leading-[0.98] tracking-tighter2 text-charcoal"
            >
              {siteData.hero.headingTop}
              <br />
              <span className="italic text-saffron-deep">{siteData.hero.headingBottom}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.14 }}
              className="mt-6 max-w-xl text-[15px] leading-7 text-charcoalSoft sm:text-[17px]"
            >
              {siteData.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.22 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <PrimaryButton href={siteData.whatsappHref} className="w-full sm:w-auto sm:px-7 sm:py-4">
                <WhatsAppIcon className="h-5 w-5" />
                <span>{siteData.hero.ctaPrimary}</span>
              </PrimaryButton>
              <SecondaryButton href={`tel:${siteData.phoneHref}`} className="w-full sm:w-auto sm:px-7 sm:py-4">
                <PhoneIcon className="h-5 w-5" />
                <span>{siteData.hero.ctaSecondary}</span>
              </SecondaryButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="mt-10 grid max-w-xl grid-cols-3 rounded-[1.25rem] border border-line bg-white/95 p-4 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
            >
              {siteData.hero.metrics.map((metric, index) => (
                <StatCard key={metric.label} value={metric.value} label={metric.label} index={index} />
              ))}
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="relative mx-auto aspect-[4/5] w-full max-w-[32rem] overflow-hidden rounded-[1.5rem] bg-ivory shadow-[0_30px_60px_-20px_rgba(60,30,10,0.35)]"
            >
              <img
                src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&auto=format&fit=crop&q=80"
                alt="Morya studio hero"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-hero-scrim" />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/92 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoalSoft backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
                {siteData.location} · {siteData.established}
              </div>
              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-charcoal/78 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">
                <StarIcon className="h-3.5 w-3.5 text-[#FFC56B]" />
                ४.९ · ३२० रिव्ह्यू
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-white">
                <div className="max-w-[18rem]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80">
                    {siteData.hero.eyebrow}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/90">
                    प्रीमियम विवाह, बेबी, मॅटर्निटी आणि इव्हेंट कव्हरेज.
                  </p>
                </div>
                <div className="hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-right backdrop-blur-md sm:block">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Google</div>
                  <div className="mt-1 text-lg font-semibold">४.९ / ५</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
