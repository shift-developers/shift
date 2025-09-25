This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to se e the result .

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

# shift-website

## Environment Variables

This project requires several environment variables for different services. Copy `.env.example` to `.env.local` and fill in your actual values:

```bash
# Contentful CMS Configuration
CONTENTFUL_SPACE_ID=your_contentful_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token_here

# ConvertKit Configuration (Newsletter)
KIT_API_KEY=your_convertkit_api_key_here
KIT_FORM_ID=your_convertkit_form_id_here

# SendGrid Configuration (Contact Form)
SENDGRID_API_KEY=your_sendgrid_api_key_here
FROM_EMAIL=noreply@shift.com
ADMIN_EMAIL=admin@shift.com
```

### Setup Instructions:

1. **Contentful CMS Setup:**
   - Log in to [Contentful](https://app.contentful.com/)
   - Navigate to Settings > API keys
   - Create or select a Content Delivery API key
   - Copy the Space ID and Content Delivery API access token
   - Add these to your `.env.local` file

2. **ConvertKit Newsletter Setup:**
   - Sign up or log in at [ConvertKit](https://app.convertkit.com/)
   - Go to Account Settings > Advanced
   - Generate an API Key
   - Navigate to Forms and copy your form ID from the URL or embed code
   - Add both values to your `.env.local` file

3. **SendGrid Email Setup:**
   - Sign up at [SendGrid](https://sendgrid.com/)
   - Go to Settings > API Keys
   - Create a new API key with "Mail Send" permissions
   - Copy the API key to your `.env.local` file
   - Verify sender authentication in Settings > Sender Authentication
   - Update `FROM_EMAIL` and `ADMIN_EMAIL` as needed

### Using the Template

A `.env.example` file is provided with all required variables. Copy it to `.env.local` and replace the placeholder values with your actual credentials:

```bash
cp .env.example .env.local
```

**Important:** Never commit `.env.local` to version control as it contains sensitive credentials

## Contact Form

The contact form is available at `/contact-us` and includes:

- Form validation using Formik and Yup
- SendGrid email integration
- Automatic confirmation emails to users
- Admin notifications for new submissions
