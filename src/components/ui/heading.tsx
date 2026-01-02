import { cn } from '@/lib/utils';
import type React from 'react';

type SectionHeadingProps = {
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('mx-auto max-w-2xl text-center', className)}>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
