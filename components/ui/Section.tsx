import { cn } from 'lib/utils';
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'blue' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  container?: boolean;
  id?: string;
}

export default function Section({
  children,
  className,
  background = 'white',
  padding = 'lg',
  container = true,
  id,
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-amber-50',
    blue: 'bg-orange-50',
    gradient: 'bg-gradient-to-br from-amber-50 to-orange-50',
  };

  const paddings = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-20',
    xl: 'py-32',
  };

  const content = <div className={cn(paddings[padding], backgrounds[background], className)}>{children}</div>;

  if (container) {
    return (
      <section id={id} className={cn(paddings[padding], backgrounds[background], className)}>
        <div className="max-w-6xl mx-auto px-4">{children}</div>
      </section>
    );
  }

  return (
    <section id={id} className={cn(paddings[padding], backgrounds[background], className)}>
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, className, centered = true }: SectionHeaderProps) {
  return (
    <div className={cn('mb-16', centered && 'text-center', className)}>
      <h2 className="text-4xl font-bold text-amber-900 mb-4">{title}</h2>
      {subtitle && <p className="text-xl text-amber-700 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
}
