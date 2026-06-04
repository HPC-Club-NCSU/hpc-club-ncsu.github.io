import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HiCpuChip, HiCommandLine, HiServer } from 'react-icons/hi2';

export const SubTeamsPage = () => {
  const teams = [
    {
      id: 'llm-opt',
      name: 'LLM Optimization Team',
      track: 'Track A',
      focus: 'Hardware Efficiency Layer',
      icon: <HiCpuChip className="text-ncsu-red text-5xl mb-4" />,
      accomplish: 'This team owns the hardware efficiency layer. They take a small open-source language model (Llama-3.2-3B-Instruct), analyze its performance, compress its memory footprint, and optimize it into a lightning-fast HTTP serving engine.',
      stack: ['PyTorch', 'HuggingFace Transformers', 'BitsAndBytes (INT4/INT8)', 'vLLM', 'PagedAttention', 'NVIDIA Profiling Tools']
    },
    {
      id: 'agentic-ai',
      name: 'Agentic AI Team',
      track: 'Track B',
      focus: 'Application & Brain Layer',
      icon: <HiCommandLine className="text-ncsu-red text-5xl mb-4" />,
      accomplish: 'This team builds the application logic and the "brains" of the system. They code the autonomous execution loops that allow the LLM to plan, use programmatic tools (like web search and PDF parsers), and evaluate the agent\'s accuracy using a rigorous, automated testing framework.',
      stack: ['Python', 'Tavily/Brave Search APIs', 'PyMuPDF', 'OpenAI/Anthropic APIs', 'RAGAS', 'GitHub Actions']
    },
    {
      id: 'platform-eng',
      name: 'Platform Engineering Team',
      track: 'Track C',
      focus: 'Production Plumbing Layer',
      icon: <HiServer className="text-ncsu-red text-5xl mb-4" />,
      accomplish: 'This team sits in the middle, building the production plumbing. They will code a custom backend proxy server to handle streaming, WebSockets, and sticky routing, package the software into containers, and deploy it to a Kubernetes cluster that automatically scales up under heavy user traffic.',
      stack: ['Go/Rust', 'Docker', 'Kubernetes (K3s/RunPod)', 'Helm', 'Prometheus', 'Grafana', 'NVIDIA DCGM Exporters']
    }
  ];

  return (
    <div className="min-h-screen bg-ncsu-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-ncsu-black py-20 border-b-2 border-ncsu-red">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h1 className="text-5xl md:text-7xl font-tech text-ncsu-white uppercase tracking-tighter mb-4">
              Sub<span className="text-ncsu-red">Teams</span>
            </h1>
            <p className="text-xl text-ncsu-white/60 font-body max-w-2xl mx-auto">
              Our engineering efforts are divided into three specialized tracks, 
              each focusing on a critical layer of the agentic AI stack.
            </p>
          </div>
        </section>

        <section className="py-24 container mx-auto px-6 max-w-5xl">
          <div className="grid gap-16">
            {teams.map((team) => (
              <div key={team.id} className="group relative">
                <div className="absolute -inset-1 bg-ncsu-red opacity-0 group-hover:opacity-10 transition duration-300 rounded-lg"></div>
                <div className="relative bg-ncsu-white border border-ncsu-steel-gray/20 p-8 md:p-12 flex flex-col md:flex-row gap-12">
                  <div className="md:w-1/4 flex flex-col items-center justify-start text-center">
                    <div className="bg-ncsu-light-gray p-6 rounded-full mb-6">
                      {team.icon}
                    </div>
                    <span className="text-ncsu-red font-tech text-sm tracking-[0.2em] uppercase mb-2">{team.track}</span>
                  </div>
                  <div className="md:w-3/4">
                    <h2 className="text-3xl font-tech text-ncsu-black uppercase mb-2 leading-tight">{team.name}</h2>
                    <h3 className="text-ncsu-steel-gray font-tech text-xs uppercase tracking-widest mb-6">Focus: {team.focus}</h3>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="font-tech text-ncsu-black text-xs uppercase tracking-widest mb-3 border-b border-ncsu-red w-fit pb-1">Objectives</h4>
                        <p className="text-ncsu-steel-gray font-body leading-relaxed">
                          {team.accomplish}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-tech text-ncsu-black text-xs uppercase tracking-widest mb-4 border-b border-ncsu-red w-fit pb-1">Technical Implementation</h4>
                        <div className="flex flex-wrap gap-2">
                          {team.stack.map((item) => (
                            <span key={item} className="bg-ncsu-black text-ncsu-white px-3 py-1 text-[10px] font-tech uppercase tracking-tighter">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
