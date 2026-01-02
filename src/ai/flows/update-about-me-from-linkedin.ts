'use server';
/**
 * @fileOverview Updates the 'About Me' section of the portfolio with a summary from a LinkedIn profile.
 *
 * - updateAboutMeFromLinkedIn - A function that triggers the update process.
 * - UpdateAboutMeInput - The input type for the updateAboutMeFromLinkedIn function.
 * - UpdateAboutMeOutput - The return type for the updateAboutMeFromLinkedIn function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const UpdateAboutMeInputSchema = z.object({
  linkedinProfileUrl: z
    .string()
    .describe('The URL of the LinkedIn profile to extract information from.'),
});
export type UpdateAboutMeInput = z.infer<typeof UpdateAboutMeInputSchema>;

const UpdateAboutMeOutputSchema = z.object({
  aboutMeSummary: z
    .string()
    .describe('A summary of the LinkedIn profile for the About Me section.'),
});
export type UpdateAboutMeOutput = z.infer<typeof UpdateAboutMeOutputSchema>;

export async function updateAboutMeFromLinkedIn(input: UpdateAboutMeInput): Promise<UpdateAboutMeOutput> {
  return updateAboutMeFromLinkedInFlow(input);
}

const prompt = ai.definePrompt({
  name: 'updateAboutMePrompt',
  input: {schema: UpdateAboutMeInputSchema},
  output: {schema: UpdateAboutMeOutputSchema},
  prompt: `You are a professional resume writer.  Summarize the LinkedIn profile at the following URL into a short "About Me" section for a personal portfolio website:

{{linkedinProfileUrl}}`,
});

const updateAboutMeFromLinkedInFlow = ai.defineFlow(
  {
    name: 'updateAboutMeFromLinkedInFlow',
    inputSchema: UpdateAboutMeInputSchema,
    outputSchema: UpdateAboutMeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
