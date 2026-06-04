import { HiCpuChip } from 'react-icons/hi2';

export const BannerLogo = () => {
  return (
    <div className="flex flex-col items-center gap-6 group">
      {/* Reverting to the specialized prominent icon for the banner */}
      <div className="relative">
        <div className="absolute -inset-2 bg-ncsu-red/30 rounded-sm blur-md group-hover:bg-ncsu-red/50 transition-all duration-500"></div>
        <div className="relative bg-ncsu-black border-2 border-ncsu-red/50 p-3 rounded-sm flex items-center justify-center group-hover:border-ncsu-red transition-colors duration-500">
          <HiCpuChip className="text-ncsu-red text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-500" />
        </div>
      </div>

      {/* Expanded Textual Branding */}
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl md:text-5xl font-tech font-extrabold tracking-tighter text-ncsu-white uppercase">
            High Performance
          </h1>
          <span className="text-3xl md:text-5xl font-tech font-light text-ncsu-red">//</span>
          <h1 className="text-3xl md:text-5xl font-tech font-extrabold tracking-tighter text-ncsu-white uppercase">
            Computing
          </h1>
        </div>
        
        <div className="mt-4 flex items-center gap-4 w-full">
          <div className="h-[1px] flex-grow bg-ncsu-steel-gray/30"></div>
          <span className="text-xs md:text-sm font-tech text-ncsu-red tracking-[0.5em] uppercase whitespace-nowrap">
            North Carolina State University
          </span>
          <div className="h-[1px] flex-grow bg-ncsu-steel-gray/30"></div>
        </div>
      </div>
    </div>
  );
};
