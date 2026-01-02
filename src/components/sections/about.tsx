'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Wand2, Loader2, ServerCrash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/heading';
import { aboutData } from '@/lib/data';
import { updateAboutMeAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  linkedinUrl: z.string().url({ message: 'Please enter a valid LinkedIn URL.' }),
});

export function AboutSection() {
  const [summary, setSummary] = useState(aboutData.summary);
  const [isUpdating, setIsUpdating] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      linkedinUrl: aboutData.linkedinUrl,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsUpdating(true);
    try {
      const result = await updateAboutMeAction(values.linkedinUrl);
      if (result.success && result.summary) {
        setSummary(result.summary);
        toast({
          title: 'Success!',
          description: 'Your "About Me" section has been updated with AI.',
        });
      } else {
        throw new Error(result.error || 'An unknown error occurred.');
      }
    } catch (error) {
       const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
       toast({
        variant: 'destructive',
        title: 'Update Failed',
        description: errorMessage,
      });
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container">
        <SectionHeading
          title="About Me"
          description="A little bit about my journey, passions, and what drives me."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardContent className="p-6 text-base text-muted-foreground">
                <p className="whitespace-pre-wrap">{summary}</p>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              <Wand2 className="mr-2 inline-block h-5 w-5 text-primary" />
              Update with AI
            </h3>
            <p className="text-sm text-muted-foreground">
              Use AI to generate a new summary from a LinkedIn profile.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="linkedinUrl"
                  render={({ field }) => (
                    <FormItem>
                      <Input
                        placeholder="https://linkedin.com/in/..."
                        {...field}
                        disabled={isUpdating}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isUpdating}>
                  {isUpdating ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Generate Summary
                </Button>
              </form>
            </Form>
             <Alert>
                <ServerCrash className="h-4 w-4" />
                <AlertTitle>Note</AlertTitle>
                <AlertDescription>
                  The AI summary generation may not work on all LinkedIn profiles due to scraping limitations.
                </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    </section>
  );
}
