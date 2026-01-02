'use server';

import { z } from 'zod';
import { updateAboutMeFromLinkedIn } from '@/ai/flows/update-about-me-from-linkedin';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormState = {
  message: string;
  status: 'success' | 'error' | 'idle';
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.errors.map(e => e.message).join(' ');
    return {
      message: errorMessages,
      status: 'error',
    };
  }

  // Here you would typically send an email, e.g., using Nodemailer, Resend, or SendGrid.
  // For this example, we'll just simulate a successful submission.
  console.log('Form data submitted:', validatedFields.data);

  return {
    message: 'Thank you for your message! I will get back to you soon.',
    status: 'success',
  };
}


const updateAboutMeSchema = z.object({
  linkedinUrl: z.string().url({ message: 'Please enter a valid LinkedIn URL.' }),
});

export async function updateAboutMeAction(linkedinUrl: string) {
  try {
    const validatedUrl = updateAboutMeSchema.safeParse({ linkedinUrl });
    if (!validatedUrl.success) {
      throw new Error(validatedUrl.error.errors.map(e => e.message).join(' '));
    }

    const result = await updateAboutMeFromLinkedIn({
      linkedinProfileUrl: validatedUrl.data.linkedinUrl,
    });

    if (!result || !result.aboutMeSummary) {
      throw new Error('Failed to generate summary from the provided LinkedIn profile.');
    }

    return { success: true, summary: result.aboutMeSummary };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return { success: false, error: errorMessage };
  }
}
