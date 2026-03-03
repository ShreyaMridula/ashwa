import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ComboHighlight } from './components/ComboHighlight';
import { MenuCategories } from './components/MenuCategories';
import { PopularItems } from './components/PopularItems';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ComboHighlight />
      <PopularItems />
      <MenuCategories />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
