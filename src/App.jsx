import { MainLayout } from './layouts/MainLayout';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { GallerySection } from './sections/GallerySection';
import { WhySection } from './sections/WhySection';
import { TestimonialSection } from './sections/TestimonialSection';
import { ContactSection } from './sections/ContactSection';
import { FooterSection } from './sections/FooterSection';

function App() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <WhySection />
      <TestimonialSection />
      <ContactSection />
      <FooterSection />
    </MainLayout>
  );
}

export default App;
