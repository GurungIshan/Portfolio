import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/heading';
import { projectsData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import data from '@/lib/placeholder-images.json';

export function ProjectsSection() {
  const imagePlaceholders = data.placeholderImages;
  
  const getPlaceholder = (id: string) => {
    return imagePlaceholders.find(p => p.id === id);
  }

  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="container">
        <SectionHeading
          title="Projects Showcase"
          description="A selection of my work, from academic assignments to hackathon challenges."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projectsData.map((project) => {
            const placeholder = getPlaceholder(project.imageId);
            return (
              <Card key={project.title} className="flex flex-col overflow-hidden">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-start gap-2">
                  <Button asChild variant="outline">
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
