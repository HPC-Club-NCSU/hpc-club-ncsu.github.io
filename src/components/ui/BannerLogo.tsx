import { HiCpuChip } from 'react-icons/hi2';

export const BannerLogo = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto group">
      {/* Centered Icon with responsive sizing */}
      <div className="relative mb-6 md:mb-10">
        <div className="absolute -inset-4 bg-ncsu-red/20 rounded-sm blur-xl group-hover:bg-ncsu-red/40 transition-all duration-700"></div>
        <div className="relative bg-ncsu-black border-2 border-ncsu-red/60 p-4 md:p-6 rounded-sm flex items-center justify-center group-hover:border-ncsu-red transition-all duration-500 shadow-[0_0_30px_rgba(204,0,0,0.15)]">
          <HiCpuChip className="text-ncsu-red text-5xl md:text-7xl lg:text-8xl group-hover:scale-110 transition-transform duration-500" />
        </div>
      </div>

      {/* Primary Branding: Responsive and Bold */}
      <div className="flex flex-col items-center w-full px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-x-6">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-tech font-extrabold tracking-tighter text-ncsu-white uppercase">
            High Performance
          </h1>
          <span className="hidden sm:inline text-4xl md:text-7xl font-tech font-light text-ncsu-red opacity-80">//</span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-tech font-extrabold tracking-tighter text-ncsu-white uppercase">
            Computing
          </h1>
        </div>
        
        {/* University Subtext: Much more visible and integrated */}
        <div className="mt-6 md:mt-10 flex items-center gap-4 w-full max-w-2xl">
          <div className="h-[2px] flex-grow bg-ncsu-red/40"></div>
          <span className="text-sm sm:text-lg md:text-xl font-tech text-ncsu-white font-bold tracking-[0.3em] uppercase whitespace-nowrap">
            North Carolina State University
          </span>
          <div className="h-[2px] flex-grow bg-ncsu-red/40"></div>
        </div>
      </div>
    </div>
  );
};
