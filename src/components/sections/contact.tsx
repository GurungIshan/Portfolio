'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import Link from 'next/link';
import { Mail, Send, Loader2 } from 'lucide-react';

import { SectionHeading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { contactData } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { cn } from '@/lib/utils';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" /> Send Message
        </>
      )}
    </Button>
  );
}

export function ContactSection() {
  const initialState: ContactFormState = { message: '', status: 'idle' };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
    } else if (state.status === 'error') {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container">
        <SectionHeading
          title="Get in Touch"
          description="I'm open to new opportunities and collaborations. Feel free to reach out!"
        />
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <Card className="lg:col-span-3">
            <CardContent className="p-6">
              <form action={formAction} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="space-y-2">
                     <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" name="email" type="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="space-y-2">
                   <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" name="message" placeholder="Your message..." rows={5} required />
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-4 text-muted-foreground">
              <a href={`mailto:${contactData.email}`} className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-primary" />
                <span className="group-hover:text-primary transition-colors">{contactData.email}</span>
              </a>
              {contactData.socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <social.icon className="h-5 w-5 text-primary" />
                  <span className="group-hover:text-primary transition-colors">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
