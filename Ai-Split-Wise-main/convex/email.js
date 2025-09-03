import { v } from "convex/values";
import { action } from "./_generated/server";
import { Resend } from "resend";

// Action to send email using Resend
export const sendEmail = action({
  args: {
    to: v.string(),
    subject: v.string(),
    html: v.string(),
    text: v.optional(v.string()),
    apiKey: v.string(),
  },
  handler: async (ctx, args) => {
    const resend = new Resend(args.apiKey);

    try {
      const result = await resend.emails.send({
        rom: 'Acme <onboarding@resend.dev>',
        to: ['foo@gmail.com'],
        subject: 'hello world',
        html: '<h1>it works!</h1>',
      });

      console.log("Email sent successfully:", result);

      return { success: true, id: result.id };
    } catch (error) {
      console.error("Failed to send email:", error);
      return { success: false, error: error.message };
    }
  },
});
