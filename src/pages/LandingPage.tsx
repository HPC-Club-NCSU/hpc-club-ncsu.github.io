import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroBanner } from '../components/modules/HeroBanner';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-ncsu-white flex flex-col">
      <Header />

      <main className="flex-grow">
        <HeroBanner />

        {/* Beginner Friendly Focus - Reintroduced from About page */}
        <section className="bg-ncsu-light-gray py-20 border-b border-ncsu-steel-gray/10">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h2 className="text-3xl md:text-5xl font-tech text-ncsu-black mb-6 uppercase tracking-tight leading-none">
              Complete <span className="text-ncsu-red">Beginner?</span> PERFECT.
            </h2>
            <p className="text-base md:text-lg text-ncsu-steel-gray font-body max-w-2xl mx-auto mb-12">
              We don't expect you to be an expert on day one. Our workshops and projects are built to take you from "Zero to Superuser."
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-ncsu-white p-8 border-l-4 border-ncsu-red shadow-sm hover-lift">
                <h3 className="text-xl font-tech text-ncsu-black mb-4 uppercase">For Beginners</h3>
                <p className="text-ncsu-steel-gray text-sm md:text-base leading-relaxed">
                  Every fall and spring, we start with the basics. We'll show you how to use Linux, how to connect to remote servers, and why parallel processing is essential for modern computing tasks.
                </p>
              </div>
              <div className="bg-ncsu-white p-8 border-l-4 border-ncsu-black shadow-sm hover-lift">
                <h3 className="text-xl font-tech text-ncsu-black mb-4 uppercase">For Experts</h3>
                <p className="text-ncsu-steel-gray text-sm md:text-base leading-relaxed">
                  Already know your way around a cluster? We host advanced projects where you can dive into specialized AI infrastructure, hardware-level optimization, and low-latency networking.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
