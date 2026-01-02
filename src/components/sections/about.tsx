'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/heading';
import { aboutData } from '@/lib/data';

export function AboutSection() {
  const [summary] = useState(aboutData.summary);

  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container">
        <SectionHeading
          title="About Me"
          description="A little bit about my journey, passions, and what drives me."
        />
        <div className="mt-12">
          <Card>
            <CardContent className="p-6 text-base text-muted-foreground">
              <p className="whitespace-pre-wrap">{summary}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
