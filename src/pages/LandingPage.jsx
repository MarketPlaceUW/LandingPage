import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { Countdown } from '../components/Countdown';
import { Statistics } from '../components/Statistics';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Countdown />
        <Statistics />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
