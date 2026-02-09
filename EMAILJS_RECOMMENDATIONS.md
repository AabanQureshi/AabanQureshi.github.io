# EmailJS Contact Form - Recommendations

## Environment Variables Setup

The EmailJS credentials are now stored in environment variables for better security and configuration management.

### Configuration Files:

1. **`.env`** - Contains your actual EmailJS credentials (already configured)
2. **`.env.example`** - Template file for other developers

### Current Configuration:
```
VITE_EMAILJS_SERVICE_ID=service_hbiv80m
VITE_EMAILJS_TEMPLATE_ID=template_x32jud7
VITE_EMAILJS_PUBLIC_KEY=k1IFJNKhJ2s-yZ7xQ
```

**Note:** The `.env` file is excluded from git via `.gitignore` to keep credentials secure.

## Email Template Body

Your current template uses the basic parameters (name, email, message). Here's a recommended enhanced template body for better professional presentation:

### Recommended HTML Body for EmailJS Template:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
    New Contact Form Submission
  </h2>
  
  <p style="color: #666; margin-bottom: 20px;">
    You have received a new message from your portfolio website.
  </p>
  
  <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
    <p style="margin: 10px 0;">
      <strong style="color: #1f2937;">Name:</strong><br/>
      <span style="color: #4b5563;">{{name}}</span>
    </p>
    
    <p style="margin: 10px 0;">
      <strong style="color: #1f2937;">Email:</strong><br/>
      <span style="color: #4b5563;">{{email}}</span>
    </p>
    
    <p style="margin: 10px 0;">
      <strong style="color: #1f2937;">Message:</strong><br/>
      <span style="color: #4b5563; white-space: pre-wrap;">{{message}}</span>
    </p>
  </div>
  
  <p style="color: #9ca3af; font-size: 12px; border-top: 1px solid #e5e7eb; padding-top: 15px;">
    This message was sent from the contact form on your portfolio website (aabanqureshi.github.io)
  </p>
</div>
```

## Reply-To Configuration

### ✅ **Recommended: Use "Reply-To" Field**

Set the **Reply-To** field to `{{email}}` (the sender's email address).

**Why?**
- When you click "Reply" in your email client, it will automatically address the response to the person who contacted you
- This is the most user-friendly and professional approach
- You can see their email in the message body AND reply directly to them

### EmailJS Template Settings:

In your EmailJS template settings, configure:
- **To Email**: Your email (aabanqureshi564@gmail.com)
- **From Name**: {{name}} or "Portfolio Contact Form"
- **Reply-To**: {{email}} ← **Set this!**
- **Subject**: "New Contact Form Message from {{name}}"

### ❌ **Not Recommended: CC or BCC**

- **Don't use CC**: The sender would see they're copied, which is confusing
- **Don't use BCC**: You can't BCC the sender on their own message
- **CC/BCC are for**: Including additional recipients (like a team member or assistant)

## Example Configuration Summary

```
Template Settings:
├── To Email: aabanqureshi564@gmail.com
├── From Name: Portfolio Contact Form
├── Reply-To: {{email}}
├── Subject: New message from {{name}} - Portfolio
└── Body: [Use the HTML template above]
```

## Testing

After implementing these changes:
1. Send a test message from your live website
2. Check that you receive the email
3. Click "Reply" and verify it's addressed to the sender's email
4. Ensure the formatting looks professional

## Security Note

Your EmailJS public key is now in the client-side code, which is normal and expected. EmailJS public keys are designed to be exposed in client-side code. However:
- Consider setting up domain restrictions in EmailJS dashboard
- Enable reCAPTCHA if spam becomes an issue
- Monitor your EmailJS usage to stay within free tier limits (200 emails/month)
