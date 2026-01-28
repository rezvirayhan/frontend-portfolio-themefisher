import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Resume from './sections/Resume';
import Skills from './sections/Skills';
import Blog from './sections/Blog';
import Pricing from './sections/Pricing';
import Portfolio from './sections/Portfolio';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Resume />
      <Skills />
      <Blog />
      <Pricing />
      <Footer />
    </div>
  );
}
