import Link from 'next/link';
import { contactData } from '@/lib/data';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Ishan Gurung. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            {contactData.socials.map((social) => (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <Link href={social.url} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
