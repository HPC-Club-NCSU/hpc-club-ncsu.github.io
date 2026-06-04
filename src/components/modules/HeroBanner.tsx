import { BannerLogo } from '../ui/BannerLogo';
import { Button } from '../ui/Button';

export const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-ncsu-black py-16 md:py-24 border-b-2 border-ncsu-red">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Narrower content container for "compact" width feel */}
      <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col items-center text-center">
        
        {/* New Specialized Banner Logo */}
        <div className="mb-8">
          <BannerLogo />
        </div>

        {/* Supporting Copy */}
        <div className="max-w-3xl mx-auto mt-8">
          <p className="text-lg md:text-xl text-ncsu-white/70 mb-8 font-body leading-relaxed">
            Pushing the boundaries of <span className="text-ncsu-white font-medium">High-Performance Computing</span>, 
            building resilient <span className="text-ncsu-white font-medium">Distributed Systems</span>, 
            and pioneering the <span className="text-ncsu-white font-medium">Large-Scale AI Infrastructure </span> 
            of the future.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button variant="primary" className="shadow-[0_0_20px_rgba(204,0,0,0.2)]">
              Get Involved
            </Button>
            <Button variant="outline">
              Resources
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
