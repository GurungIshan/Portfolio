import { SectionHeading } from '@/components/ui/heading';
import { skillsData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function SkillsSection() {
  return (
    <section id="skills" className="bg-secondary py-16 sm:py-24">
      <div className="container">
        <SectionHeading
          title="Technical Skills"
          description="A snapshot of the technologies, languages, and tools I work with."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category) => (
            <Card key={category.name} className="flex flex-col">
              <CardHeader className="flex-row items-center gap-4">
                <category.icon className="h-8 w-8 text-primary" />
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="text-sm">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
