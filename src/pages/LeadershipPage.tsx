import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { leadershipData } from '../data/leadership';

export const LeadershipPage = () => {
  return (
    <div className="min-h-screen bg-ncsu-white flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-16 md:py-24 max-w-6xl">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-tech text-ncsu-black mb-6 uppercase tracking-tighter">
            Our <span className="text-ncsu-red">Leadership</span>
          </h1>
          <p className="text-xl text-ncsu-steel-gray font-body max-w-2xl">
            Meet the engineers and students building the future of distributed AI at NC State.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {leadershipData.map((leader) => (
            <div key={leader.id} className="group">
              {/* Image Container */}
              <div className="aspect-square bg-ncsu-light-gray mb-6 overflow-hidden border-2 border-transparent relative">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
                {leader.track && (
                  <div className="absolute top-4 right-4 bg-ncsu-red text-ncsu-white font-tech text-[10px] px-3 py-1 uppercase tracking-widest">
                    {leader.track}
                  </div>
                )}
              </div>

              {/* Text Content */}
              <div className="border-l-2 border-ncsu-red/30 pl-6 group-hover:border-ncsu-red transition-colors duration-300">
                <h3 className="text-2xl font-tech text-ncsu-black uppercase mb-1">{leader.name}</h3>
                <h4 className="text-sm font-tech text-ncsu-red uppercase tracking-widest mb-4">{leader.role}</h4>
                <p className="text-ncsu-steel-gray font-body text-sm leading-relaxed mb-6">
                  {leader.bio}
                </p>
                <div className="flex space-x-4">
                  {leader.github && (
                    <a href={leader.github} target="_blank" rel="noopener noreferrer" className="text-ncsu-steel-gray hover:text-ncsu-red transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    </a>
                  )}
                  {leader.linkedin && (
                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="text-ncsu-steel-gray hover:text-ncsu-red transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
