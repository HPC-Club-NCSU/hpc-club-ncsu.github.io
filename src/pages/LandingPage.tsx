import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroBanner } from '../components/modules/HeroBanner';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-ncsu-white flex flex-col">
      <Header />

      <main className="flex-grow">
        <HeroBanner />

        {/* Features Section */}
        <section className="bg-ncsu-light-gray/30 py-24 border-b border-ncsu-light-gray">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <Card title="Wolfpack Cluster">
                Access to state-of-the-art parallel computing resources for research, simulations, and member-led projects.
              </Card>
              <Card title="Expert Workshops">
                Hands-on training in MPI, CUDA, OpenMP, and scalable architecture design led by industry professionals.
              </Card>
              <Card title="Competitions">
                Represent NCSU in international student cluster competitions and high-stakes engineering hackathons.
              </Card>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="border-l-4 border-ncsu-red pl-8 py-4">
              <h3 className="text-3xl font-tech mb-4 uppercase">System Status: Operational</h3>
              <p className="text-ncsu-steel-gray font-body leading-relaxed">
                Our current heterogeneous architecture leverages NVIDIA H100 GPUs and AMD EPYC processors to deliver peak performance for complex neural network training and fluid dynamics simulations.
              </p>
            </div>
            <div className="bg-ncsu-black p-8 text-ncsu-white font-tech text-sm border border-ncsu-red/20 shadow-2xl">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-ncsu-red"></div>
                <div className="w-3 h-3 rounded-full bg-ncsu-steel-gray"></div>
                <div className="w-3 h-3 rounded-full bg-ncsu-steel-gray"></div>
              </div>
              <p className="text-ncsu-red mb-2">$ ssh guest@cluster.hpc.ncsu.edu</p>
              <p className="text-ncsu-white/60"># Initializing wolfpack-node-01...</p>
              <p className="text-ncsu-white/60"># Loading MPI/CUDA environment...</p>
              <p className="text-ncsu-white"># Status: Ready for computation.</p>
              <div className="mt-4 animate-pulse">_</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
