import Image from 'next/image';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Resume from './sections/Resume';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Resume />
      {/* <Footer /> */}
    </div>
  );
}
