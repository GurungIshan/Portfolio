import { SectionHeading } from '@/components/ui/heading';
import { experienceData } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap, Zap } from 'lucide-react';

const iconMap = {
  Experience: <Briefcase className="h-5 w-5 text-primary" />,
  Activity: <Zap className="h-5 w-5 text-primary" />,
  Education: <GraduationCap className="h-5 w-5 text-primary" />,
};

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-secondary py-16 sm:py-24">
      <div className="container">
        <SectionHeading
          title="Experience & Education"
          description="My professional journey, activities, and academic background."
        />
        <div className="relative mt-12">
          <div
            className="absolute left-9 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          ></div>
          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div
                key={item.title}
                className="relative flex items-start gap-6 md:gap-8"
              >
                <div
                  className={`absolute left-9 top-2 h-full md:left-1/2 md:-translate-x-1/2 ${
                    index % 2 === 0 ? '' : 'md:left-auto md:right-1/2 md:translate-x-1/2'
                  }`}
                >
                  <div className="absolute left-[-11px] top-0.5 h-6 w-6 rounded-full bg-background flex items-center justify-center ring-4 ring-primary">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                </div>

                <div className="w-full pl-16 md:w-1/2 md:pl-0">
                  <div
                    className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                  >
                    <Card className={`w-full ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <CardHeader>
                        <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            {iconMap[item.type]}
                          </div>
                          <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.organization}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{item.period}</p>
                        <p className="mt-2 text-foreground/80">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                {/* Spacer for layout alignment */}
                <div className="hidden w-1/2 md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
