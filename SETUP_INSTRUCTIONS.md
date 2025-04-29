# Setting Up Email Functionality with SendGrid

Follow these steps to set up the contact form email functionality using SendGrid:

## 1. Create a SendGrid Account

1. Go to [SendGrid](https://sendgrid.com/) and sign up for an account if you don't already have one.
2. Once signed in, verify your sender identity. You'll need to verify the email address you want to send from (`gaurav404.gk@gmail.com`).

## 2. Create an API Key

1. In the SendGrid dashboard, navigate to **Settings > API Keys**.
2. Click **Create API Key**.
3. Name your key (e.g., "Portfolio Contact Form").
4. Select the appropriate permissions (at minimum, you need "Mail Send" permissions).
5. Click **Create & View**.
6. Copy the API key that is displayed (you won't be able to see it again).

## 3. Set Up Environment Variables

1. Create a file named `.env.local` in the root of your project.
2. Add the following line to the file:
   ```
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   ```
3. Replace `your_sendgrid_api_key_here` with the actual API key you copied from SendGrid.

## 4. Restart Your Development Server

After setting up the environment variables, restart your Next.js development server:

```
npm run dev
```

## Testing the Contact Form

1. Fill out the contact form on your portfolio website.
2. If everything is set up correctly:
   - The person who contacted you will receive a confirmation email.
   - You will receive an email with the details of the submission.

## Troubleshooting

If emails are not being sent:

1. Check the console for error messages.
2. Verify that your SendGrid API key is correct.
3. Make sure your sender email (`gaurav404.gk@gmail.com`) is verified in SendGrid.
4. Check SendGrid's activity log to see if there are any sending issues.

## Production Deployment

When deploying to production, make sure to add the `SENDGRID_API_KEY` environment variable to your hosting platform. 