import { Reveal } from './Reveal';

export function GalleryCard({ src, alt, span = 'normal', index = 0 }) {
  const spanClass =
    span === 'wide' ? 'col-span-2' : span === 'tall' ? 'row-span-2' : '';

  const ratioClass = span === 'wide' ? 'aspect-[16/10]' : span === 'tall' ? 'aspect-[4/5]' : 'aspect-[3/4]';

  return (
    <Reveal delay={index * 0.03} className={`${spanClass} ${ratioClass}`}>
      <div className="group relative h-full overflow-hidden rounded-[1rem] bg-ivory shadow-[0_10px_30px_-18px_rgba(60,30,10,0.22)]">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    </Reveal>
  );
}
