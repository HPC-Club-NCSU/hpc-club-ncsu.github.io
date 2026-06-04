import { Link } from 'react-router-dom';
import { BannerLogo } from '../ui/BannerLogo';
import { Button } from '../ui/Button';

export const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-ncsu-black py-12 md:py-24 border-b-2 border-ncsu-red">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Narrower content container for "compact" width feel */}
      <div className="container mx-auto px-4 max-w-5xl relative z-10 flex flex-col items-center text-center">

        {/* New Specialized Banner Logo - Scaled for mobile */}
        <div className="mb-6 md:mb-8 scale-[0.8] md:scale-100 transition-transform">
          <BannerLogo />
        </div>

        {/* Supporting Copy */}
        <div className="max-w-3xl mx-auto mt-4 md:mt-8">
          <p className="text-base md:text-xl text-ncsu-white/70 mb-6 md:mb-8 font-body leading-relaxed px-2">
            Building performant scalable systems in domains of <span className="text-ncsu-white font-medium">Distributed Systems</span> and 
            <span className="text-ncsu-white font-medium"> AI Infrastructure</span>
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="primary" className="shadow-[0_0_20px_rgba(204,0,0,0.2)] w-full">
                Get Involved
              </Button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full">
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
