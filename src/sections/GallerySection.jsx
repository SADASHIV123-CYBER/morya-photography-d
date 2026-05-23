import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { siteData } from '../data/siteData';
import { GalleryCard } from '../components/GalleryCard';
import { PrimaryButton } from '../components/Button';
import { ArrowNEIcon } from '../components/Icon';

const layout = [
  { span: 'normal' },
  { span: 'normal' },
  { span: 'wide' },
  { span: 'normal' },
  { span: 'normal' },
  { span: 'normal' },
  { span: 'normal' },
  { span: 'normal' },
];

export function GallerySection() {
  return (
    <section id="gallery" className="bg-cream py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={siteData.gallery.section}
            title={
              <>
                {siteData.gallery.heading.split(' ')[0]}{' '}
                <span className="italic text-saffron-deep">क्षण.</span>
              </>
            }
            subtitle={siteData.gallery.subheading}
          />
          <PrimaryButton href="#" className="self-start sm:self-auto">
            {siteData.gallery.cta}
            <ArrowNEIcon className="h-4 w-4" />
          </PrimaryButton>
        </div>

        <div className="mt-10 columns-2 gap-3 md:columns-3 lg:columns-4 lg:gap-4">
          {siteData.gallery.items.map((src, index) => (
            <div key={src} className="mb-3 break-inside-avoid lg:mb-4">
              <GalleryCard
                src={src}
                alt={`Gallery image ${index + 1}`}
                span={layout[index]?.span}
                index={index}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
