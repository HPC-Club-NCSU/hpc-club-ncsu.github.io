import { HiCpuChip } from 'react-icons/hi2';

export const Logo = () => {
  return (
    <div className="flex items-center gap-4 group cursor-pointer">
      {/* Restoring the CPU icon with a refined container */}
      <div className="relative">
        <div className="absolute -inset-1 bg-ncsu-red/20 rounded-sm blur-sm group-hover:bg-ncsu-red/40 transition-all duration-300"></div>
        <div className="relative bg-ncsu-black border border-ncsu-red/40 p-1.5 rounded-sm flex items-center justify-center group-hover:border-ncsu-red transition-colors duration-300">
          <HiCpuChip className="text-ncsu-red text-xl group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>

      {/* Keeping the "Industrial Split" typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1">
          <span className="text-2xl font-tech font-extrabold tracking-tighter text-ncsu-white group-hover:text-ncsu-red transition-colors duration-300">
            HPC
          </span>
          <span className="text-2xl font-tech font-light tracking-tighter text-ncsu-red">
            //
          </span>
          <span className="text-2xl font-tech font-extrabold tracking-tighter text-ncsu-white group-hover:text-ncsu-red transition-colors duration-300">
            NCSU
          </span>
        </div>
        <span className="text-[9px] font-tech text-ncsu-steel-gray tracking-[0.4em] uppercase mt-1">
          High Performance Computing
        </span>
      </div>
    </div>
  );
};
