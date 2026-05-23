import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { ArrowNEIcon } from './Icon';

export function ServiceCard({ item, index }) {
  return (
    <Reveal delay={index * 0.04} className="h-full">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 240, damping: 24 }}
        className="group h-full overflow-hidden rounded-2xl border border-line bg-white shadow-[0_1px_0_rgba(0,0,0,0.02)]"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {item.tag ? (
            <span className="absolute left-3 top-3 rounded-full bg-charcoal/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
              {item.tag}
            </span>
          ) : null}
        </div>
        <div className="flex h-full flex-col p-5 sm:p-6">
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-grayText">
            0{index + 1}
          </div>
          <h3 className="mt-2 font-display text-[1.45rem] leading-tight tracking-tight text-charcoal">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-charcoalSoft sm:text-[15px]">
            {item.description}
          </p>
          <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-saffron-deep">
            अधिक जाणून घ्या <ArrowNEIcon className="h-3.5 w-3.5" />
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}
