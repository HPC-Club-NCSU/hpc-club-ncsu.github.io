import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-ncsu-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Project Hero */}
        <section className="bg-ncsu-black py-20 border-b-2 border-ncsu-red">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-sm font-tech text-ncsu-red uppercase tracking-[0.4em] mb-4">Flagship Project 2026-2027</h2>
            <h1 className="text-4xl md:text-7xl font-tech text-ncsu-white mb-8 uppercase tracking-tighter">
              Production-Grade <span className="text-ncsu-red">AI Stack</span>
            </h1>
            <p className="text-xl text-ncsu-white/80 font-body leading-relaxed max-w-3xl">
              We are building and optimizing a production-grade, end-to-end agentic AI system. 
              Instead of training models, we focus entirely on the systems, application, 
              and infrastructure layers to make AI fast, reliable, efficient, and auto-scaling.
            </p>
          </div>
        </section>

        {/* Project High-Level Overview */}
        <section className="py-24 container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="font-tech text-2xl text-ncsu-black uppercase mb-6 border-b-2 border-ncsu-red w-fit pb-2">The Mission</h3>
              <p className="text-ncsu-steel-gray font-body leading-relaxed mb-6">
                The ultimate goal is to ship a public GitHub repository and showcase a live system 
                serving real requests during Demo Day. We are tackling the complexity of 
                real-world AI deployments, moving beyond simple chat stubs to autonomous utility.
              </p>
              <div className="bg-ncsu-light-gray p-8 border-l-4 border-ncsu-red">
                <h4 className="font-tech text-sm uppercase mb-4 text-ncsu-black">Key Deliverables</h4>
                <ul className="space-y-3 text-ncsu-steel-gray font-body text-sm">
                  <li>• Optimized Llama-3.2-3B Inference Engine</li>
                  <li>• Multi-step autonomous agent with tool-use</li>
                  <li>• Auto-scaling Kubernetes deployment</li>
                  <li>• Real-time observability dashboard</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-12">
              <div>
                <h3 className="font-tech text-xl text-ncsu-black uppercase mb-4 flex items-center">
                  <span className="w-8 h-[2px] bg-ncsu-red mr-3"></span>
                  High Performance
                </h3>
                <p className="text-ncsu-steel-gray font-body text-sm leading-relaxed">
                  We maximize token throughput and lower latency by implementing state-of-the-art 
                  optimization techniques like PagedAttention and INT8 quantization.
                </p>
              </div>
              <div>
                <h3 className="font-tech text-xl text-ncsu-black uppercase mb-4 flex items-center">
                  <span className="w-8 h-[2px] bg-ncsu-red mr-3"></span>
                  Autonomous Utility
                </h3>
                <p className="text-ncsu-steel-gray font-body text-sm leading-relaxed">
                  Our agents don't just talk; they solve. By planning and using programmatic 
                  tools like web search and PDF parsers, they achieve complex real-world tasks.
                </p>
              </div>
              <div>
                <h3 className="font-tech text-xl text-ncsu-black uppercase mb-4 flex items-center">
                  <span className="w-8 h-[2px] bg-ncsu-red mr-3"></span>
                  Production Infrastructure
                </h3>
                <p className="text-ncsu-steel-gray font-body text-sm leading-relaxed">
                  Reliability at scale. We deploy the entire stack inside a live K8s cluster 
                  managed with Helm and monitored via Prometheus and Grafana.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation to Sub-Teams */}
        <section className="bg-ncsu-light-gray py-20 border-y border-ncsu-steel-gray/10">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h2 className="text-3xl font-tech text-ncsu-black mb-6 uppercase">Driven by Specialized Teams</h2>
            <p className="text-ncsu-steel-gray font-body max-w-2xl mx-auto mb-10">
              This flagship project is a collaborative effort across our three core engineering tracks: 
              LLM Optimization, Agentic AI, and Platform Engineering.
            </p>
            <a href="/sub-teams" className="inline-block bg-ncsu-red text-ncsu-white px-10 py-4 font-tech uppercase tracking-widest hover:bg-ncsu-black transition-colors">
              Explore Sub-Teams
            </a>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-ncsu-black text-center">
          <div className="container mx-auto px-6 max-w-2xl">
            <h2 className="text-3xl font-tech text-ncsu-white mb-6 uppercase tracking-tight">Open Sourced. Live System.</h2>
            <p className="text-ncsu-white/60 font-body mb-10 leading-relaxed">
              We are shipping a public GitHub repository and showcasing a live system serving real requests 
              during Demo Day. Want to contribute to the stack?
            </p>
            <a href="/contact" className="inline-block border-2 border-ncsu-red p-1 rounded-full overflow-hidden group">
              <div className="bg-ncsu-red text-ncsu-white px-10 py-4 font-tech uppercase tracking-widest cursor-pointer group-hover:bg-ncsu-white group-hover:text-ncsu-red transition-all rounded-full">
                Join our Discord
              </div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
