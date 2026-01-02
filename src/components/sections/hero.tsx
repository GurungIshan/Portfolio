import { Button } from '@/components/ui/button';
import { heroData } from '@/lib/data';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden py-24 sm:py-32">
       <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-semibold text-primary">{heroData.role}</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            {heroData.name}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {heroData.tagline}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="#projects">
                View Projects
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="#contact">
                Contact Me <MoveRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
