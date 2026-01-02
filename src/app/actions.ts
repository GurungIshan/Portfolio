'use server';

import { z } from 'zod';
import { updateAboutMeFromLinkedIn } from '@/ai/flows/update-about-me-from-linkedin';

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
