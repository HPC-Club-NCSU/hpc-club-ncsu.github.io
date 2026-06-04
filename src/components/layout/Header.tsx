import { Logo } from '../ui/Logo';

export const Header = () => {
  return (
    <header className="bg-ncsu-black text-ncsu-white p-6 shadow-md border-b border-ncsu-red/20">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <nav className="space-x-8 hidden md:flex">
          <a href="#" className="nav-link-underline font-tech text-sm uppercase">Events</a>
          <a href="#" className="nav-link-underline font-tech text-sm uppercase">Cluster</a>
          <a href="#" className="nav-link-underline font-tech text-sm uppercase">Team</a>
          <a href="#" className="nav-link-underline font-tech text-sm uppercase">Contact</a>
        </nav>
      </div>
    </header>
  );
};
