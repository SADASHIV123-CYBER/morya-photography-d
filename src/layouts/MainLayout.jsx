import { SiteHeader } from '../components/SiteHeader';
import { MobileActionBar } from '../components/MobileActionBar';

export function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <SiteHeader />
      <main>{children}</main>
      <MobileActionBar />
    </div>
  );
}
