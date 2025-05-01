# Setting Up EmailJS for the Contact Form

This guide will help you set up EmailJS to make your contact form functional. EmailJS allows you to send emails directly from JavaScript without any server-side code.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. The free plan allows 200 emails per month, which should be sufficient for a portfolio contact form

## Step 2: Add an Email Service

1. After signing in, go to the "Email Services" tab
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication process
5. Name your service and save it
6. **Note the Service ID** that EmailJS provides (you'll need this for the code)

## Step 3: Create an Email Template

1. Go to the "Email Templates" tab
2. Click "Create New Template"
3. Design your email template with variables that match the form fields:
   - `{{user_name}}` for the name field
   - `{{user_email}}` for the email field
   - `{{message}}` for the message field
4. Here's a sample template:
   ```
   Subject: New Contact Form Submission from {{user_name}}

   Name: {{user_name}}
   Email: {{user_email}}

   Message:
   {{message}}
   ```
5. Save the template
6. **Note the Template ID** that EmailJS provides (you'll need this for the code)

## Step 4: Get Your Public Key

1. Go to "Account" > "API Keys"
2. Copy your "Public Key" (you'll need this for the code)

## Step 5: Update Your Code

1. Open the `src/components/Contact.tsx` file
2. Replace the placeholder values with your actual EmailJS credentials:
   ```javascript
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your Service ID
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
   ```

## Step 6: Test Your Form

1. Run your application
2. Fill out the contact form
3. Submit it and check if you receive the email
4. If you encounter any issues, check the browser console for error messages

## Important Security Notes

- The Public Key can be safely used in client-side code
- Never share or commit your EmailJS account credentials
- Consider using environment variables for production

## Additional Configuration (Optional)

- You can set up spam filtering in your EmailJS account settings
- You can customize the email templates further with conditional logic
- For production, consider upgrading to a paid plan if you expect more than 200 emails per month 