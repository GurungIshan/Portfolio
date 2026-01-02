'use client';

import { useState, useRef, FormEvent } from 'react';
import Link from 'next/link';
import { Mail, Send } from 'lucide-react';

import { SectionHeading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { contactData } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const message = formData.get('message') as string;
    
    const mailtoLink = `mailto:${contactData.email}?subject=Contact from ${name}&body=${encodeURIComponent(message)}`;
    
    window.location.href = mailtoLink;

    toast({
      title: 'Email Client Opened',
      description: 'Please complete sending the message from your email client.',
    });
    
    formRef.current?.reset();
  };

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
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="space-y-2">
                     <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" name="email" type="email" placeholder="Your Email (for reference)" required />
                  </div>
                </div>
                <div className="space-y-2">
                   <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" name="message" placeholder="Your message..." rows={5} required />
                </div>
                 <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
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
