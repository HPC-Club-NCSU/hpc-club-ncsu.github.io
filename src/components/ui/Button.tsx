import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  className?: string;
}

export const Button = ({ children, variant = 'primary', onClick, className = '' }: ButtonProps) => {
  const baseStyles = "px-10 py-3 font-tech uppercase tracking-widest hover-lift transition-all duration-300 rounded-full text-sm font-bold";
  const variants = {
    primary: "bg-ncsu-red text-ncsu-white border-2 border-ncsu-red hover:bg-transparent hover:text-ncsu-red",
    outline: "border-2 border-ncsu-white/50 text-ncsu-white hover:border-ncsu-white hover:bg-ncsu-white hover:text-ncsu-black"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
