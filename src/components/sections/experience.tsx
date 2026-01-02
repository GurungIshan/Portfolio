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
            className="absolute left-0 top-0 h-full w-0.5 translate-x-6 bg-border md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          ></div>
          <div className="space-y-8">
            {experienceData.map((item, index) => (
              <div
                key={item.title}
                className="relative flex items-start md:items-center"
              >
                <div
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 ring-8 ring-secondary md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2`}
                >
                  {iconMap[item.type]}
                </div>
                <div
                  className={`ml-8 w-full md:ml-0 md:w-[calc(50%-2.5rem)] ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto md:text-right'
                  }`}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex-1">
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.organization}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.period}</p>
                      <p className="mt-2 text-foreground/80">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
