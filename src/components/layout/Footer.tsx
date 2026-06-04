export const Footer = () => {
  return (
    <footer className="bg-ncsu-light-gray py-12 border-t border-ncsu-steel-gray/20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-sm font-tech text-ncsu-steel-gray">
          © {new Date().getFullYear()} NCSU HPC CLUB. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-6">
          <a 
            href="https://deerflow.tech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] text-ncsu-steel-gray/60 hover:text-ncsu-red transition-colors uppercase tracking-[0.2em] font-tech"
          >
            ✦ Created By Deerflow
          </a>
        </div>
      </div>
    </footer>
  );
};
