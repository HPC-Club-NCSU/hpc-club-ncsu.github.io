import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HiServer, HiLightningBolt, HiCode, HiChip } from 'react-icons/hi';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-ncsu-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Our Mission - Hero Section */}
        <section className="bg-ncsu-black py-16 md:py-24 border-b-2 border-ncsu-red">
          <div className="container mx-auto px-6 max-w-5xl text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-tech text-ncsu-white mb-6 uppercase tracking-tighter">
              Our <span className="text-ncsu-red">Mission</span>
            </h1>
            <p className="text-lg md:text-2xl text-ncsu-white/80 font-body leading-relaxed max-w-4xl">
              We move beyond the classroom to build <span className="text-ncsu-white">Production-Grade Distributed Systems</span>. 
              Our focus is the intersection of high-performance hardware, autonomous AI agents, and the 
              scalable software infrastructure that powers the modern web.
            </p>
          </div>
        </section>

        {/* Beyond the Cluster - The "Why" */}
        <section className="py-20 container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-tech text-ncsu-black mb-6 uppercase">Beyond the Cluster</h2>
              <div className="space-y-6 text-lg text-ncsu-steel-gray font-body leading-relaxed">
                <p>
                  High Performance Computing is no longer just about supercomputers—it's about <strong>end-to-end engineering</strong>. 
                </p>
                <p>
                  At the HPC Club, we don't just run code on clusters; we build the <strong>serving layers</strong>, 
                  the <strong>optimization pipelines</strong>, and the <strong>autonomous logic</strong> required 
                  to ship real-world, production-ready AI systems.
                </p>
                <p>
                  Our goal is to master the full stack: from low-level GPU kernels and Kubernetes orchestration to 
                  building software that scales automatically to meet real user demand.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-ncsu-light-gray p-8 flex flex-col items-center text-center group hover:bg-ncsu-red/5 transition-colors">
                <HiChip className="text-ncsu-red text-4xl mb-3" />
                <span className="font-tech text-[10px] uppercase tracking-widest font-bold">LLM Optimization</span>
              </div>
              <div className="bg-ncsu-black p-8 flex flex-col items-center text-center text-ncsu-white">
                <HiCode className="text-ncsu-red text-4xl mb-3" />
                <span className="font-tech text-[10px] uppercase tracking-widest font-bold">Agentic AI</span>
              </div>
              <div className="bg-ncsu-black p-8 flex flex-col items-center text-center text-ncsu-white">
                <HiServer className="text-ncsu-red text-4xl mb-3" />
                <span className="font-tech text-[10px] uppercase tracking-widest font-bold">Platform Engineering</span>
              </div>
              <div className="bg-ncsu-light-gray p-8 flex flex-col items-center text-center group hover:bg-ncsu-red/5 transition-colors">
                <HiLightningBolt className="text-ncsu-red text-4xl mb-3" />
                <span className="font-tech text-[10px] uppercase tracking-widest font-bold">Production SWE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Beginner Friendly Focus */}
        <section className="bg-ncsu-light-gray py-20 border-y border-ncsu-steel-gray/10">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h2 className="text-3xl md:text-5xl font-tech text-ncsu-black mb-6 uppercase tracking-tight">
              NEVER OPENED A <span className="text-ncsu-red">TERMINAL?</span> PERFECT.
            </h2>
            <p className="text-lg md:text-xl text-ncsu-steel-gray font-body max-w-2xl mx-auto mb-12 leading-relaxed">
              You don't need to be a systems expert to start. Our semester-long projects are designed to onboard novices 
              while providing deep technical challenges for veterans.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-ncsu-white p-10 border-l-4 border-ncsu-red shadow-sm hover-lift">
                <h3 className="text-xl font-tech text-ncsu-black mb-4 uppercase">For Beginners</h3>
                <p className="text-ncsu-steel-gray leading-relaxed">
                  Join our <strong>Guided Tracks</strong>. We'll show you how to navigate Linux, containerize your first app with Docker, 
                  and understand the fundamentals of how AI models actually run on hardware.
                </p>
              </div>
              <div className="bg-ncsu-white p-10 border-l-4 border-ncsu-black shadow-sm hover-lift">
                <h3 className="text-xl font-tech text-ncsu-black mb-4 uppercase">For Systems Experts</h3>
                <p className="text-ncsu-steel-gray leading-relaxed">
                  Dive into <strong>Technical Tracks</strong>. Focus on CUDA kernels, custom Kubernetes controllers in Go/Rust, 
                  and optimizing PagedAttention mechanisms for multi-tenant LLM serving.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Technical Pillars */}
        <section className="py-24 container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-tech text-ncsu-black mb-16 uppercase text-center md:text-left">The Pillars of our Work</h2>
          <div className="space-y-20">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-tech text-ncsu-red uppercase mb-4 leading-tight">Distributed Systems</h3>
                <div className="h-1.5 w-20 bg-ncsu-black"></div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-ncsu-steel-gray font-body leading-relaxed">
                  We focus on the "teamwork" of the compute world. Our projects involve building resilient architectures 
                  where many nodes coordinate to serve complex requests. We teach you how to handle network latency, 
                  load balancing, and the "sticky" routing required for stateful AI agents.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-tech text-ncsu-red uppercase mb-4 leading-tight">High Performance Computing</h3>
                <div className="h-1.5 w-20 bg-ncsu-black"></div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-ncsu-steel-gray font-body leading-relaxed">
                  We treat hardware as a first-class citizen. Our members learn to squeeze every drop of performance out 
                  of GPUs and CPUs, using quantization (INT4/INT8) and efficient memory management to turn slow models 
                  into lightning-fast production engines.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-tech text-ncsu-red uppercase mb-4 leading-tight">AI Infrastructure</h3>
                <div className="h-1.5 w-20 bg-ncsu-black"></div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-ncsu-steel-gray font-body leading-relaxed">
                  The infrastructure layer is the "plumbing" of modern AI. We focus on building the platforms that 
                  train and serve massive models, utilizing Kubernetes, Prometheus for observability, and custom 
                  proxies to create systems that can scale to thousands of users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-ncsu-black py-20 text-center border-t border-ncsu-red/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-tech text-ncsu-white mb-8 uppercase">Ready to join the pack?</h2>
            <p className="text-ncsu-white/60 mb-12 font-body max-w-xl mx-auto">
              No applications, no fees, no prerequisites. We meet weekly to build the future of systems engineering.
            </p>
            <a href="/contact" className="inline-block border-2 border-ncsu-red p-1 rounded-full overflow-hidden group">
              <div className="bg-ncsu-red text-ncsu-white px-10 py-4 font-tech uppercase tracking-widest cursor-pointer group-hover:bg-ncsu-white group-hover:text-ncsu-red transition-all rounded-full">
                Get in Touch
              </div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
