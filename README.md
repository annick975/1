This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# EmailJS Integration Setup

To make the contact form work, you need to set up EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an Email Service:

   - Go to "Email Services" tab
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps

3. Create an Email Template:

   - Go to "Email Templates" tab
   - Click "Create New Template"
   - Design your template using these variables from the form:
     - {{firstName}} - First name of the sender
     - {{lastName}} - Last name of the sender
     - {{email}} - Email of the sender
     - {{phone}} - Phone number of the sender
     - {{message}} - Message content

4. Update your configuration:

   - In `src/components/contact/page.tsx`, replace these values:
     ```javascript
     const serviceId = "YOUR_EMAILJS_SERVICE_ID"; // Found in the Email Services tab
     const templateId = "YOUR_EMAILJS_TEMPLATE_ID"; // Found in the Email Templates tab
     const publicKey = "YOUR_EMAILJS_PUBLIC_KEY"; // Found in Account > API Keys
     ```

5. Test your form to ensure it's working properly
