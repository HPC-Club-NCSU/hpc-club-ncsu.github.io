import type { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const Card = ({ title, children, className = '' }: CardProps) => {
  return (
    <div className={`p-8 border border-ncsu-light-gray hover:border-ncsu-red transition-colors duration-300 ${className}`}>
      <h3 className="text-xl font-tech mb-4 uppercase">{title}</h3>
      <div className="text-ncsu-steel-gray font-body">
        {children}
      </div>
    </div>
  );
};
