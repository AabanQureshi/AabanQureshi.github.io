# Auto-Reply Email Template for EmailJS

## Overview

The auto-reply template sends an automatic confirmation email to users who submit your contact form. This improves UX by:
- Confirming their message was received
- Setting expectations for response time
- Providing your contact information
- Building trust and professionalism

## EmailJS Template Configuration

### Create a New Template in EmailJS Dashboard

1. Go to your EmailJS dashboard: https://dashboard.emailjs.com/
2. Navigate to **Email Templates**
3. Click **Create New Template**
4. Use the settings and HTML below

### Template Settings

```
Template Name: Portfolio Contact Auto-Reply
Template ID: [You'll get this after creating - add it to .env as VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID]

To Email: {{email}}  ← The person who submitted the form
From Name: Aaban Rehman
From Email: [Your EmailJS verified email]
Subject: Thanks for reaching out! I received your message
Reply-To: aabanqureshi564@gmail.com  ← Your email so they can reply to you
```

### Template Parameters

The auto-reply template uses these parameters (sent from your contact form):
- `{{name}}` - The sender's name
- `{{email}}` - The sender's email (used as "To Email")
- `{{message}}` - The sender's message (optional - for confirmation)

---

## HTML Template for Auto-Reply

Copy and paste this HTML into your EmailJS auto-reply template body:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Message Received</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header with gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 40px 30px; border-radius: 12px 12px 0 0; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                Thanks for Reaching Out!
              </h1>
            </td>
          </tr>
          
          <!-- Main content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px; color: #1f2937; font-size: 16px; line-height: 1.6;">
                Hi <strong>{{name}}</strong>,
              </p>
              
              <p style="margin: 0 0 20px; color: #4b5563; font-size: 16px; line-height: 1.6;">
                Thank you for contacting me through my portfolio! I've received your message and wanted to confirm it reached me successfully.
              </p>
              
              <p style="margin: 0 0 30px; color: #4b5563; font-size: 16px; line-height: 1.6;">
                I'll review your message and get back to you as soon as possible, typically within 24-48 hours.
              </p>
              
              <!-- Message confirmation box -->
              <div style="background-color: #f3f4f6; border-left: 4px solid #3b82f6; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                <p style="margin: 0 0 10px; color: #1f2937; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                  Your Message:
                </p>
                <p style="margin: 0; color: #4b5563; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
                  {{message}}
                </p>
              </div>
              
              <!-- Contact information -->
              <div style="background-color: #eff6ff; padding: 25px; border-radius: 8px; margin-bottom: 30px;">
                <p style="margin: 0 0 15px; color: #1f2937; font-size: 16px; font-weight: 600;">
                  In the meantime, feel free to:
                </p>
                <ul style="margin: 0; padding-left: 20px; color: #4b5563; font-size: 15px; line-height: 1.8;">
                  <li>Check out my latest projects on <a href="https://github.com/AabanQureshi" style="color: #3b82f6; text-decoration: none; font-weight: 500;">GitHub</a></li>
                  <li>Connect with me on <a href="https://www.linkedin.com/in/aaban-qureshi/" style="color: #3b82f6; text-decoration: none; font-weight: 500;">LinkedIn</a></li>
                  <li>Email me directly at <a href="mailto:aabanqureshi564@gmail.com" style="color: #3b82f6; text-decoration: none; font-weight: 500;">aabanqureshi564@gmail.com</a></li>
                </ul>
              </div>
              
              <p style="margin: 0 0 10px; color: #4b5563; font-size: 16px; line-height: 1.6;">
                Best regards,
              </p>
              <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 600;">
                Aaban Rehman
              </p>
              <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">
                Full-Stack ASP.NET Core Developer
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px; background-color: #f9fafb; border-radius: 0 0 12px 12px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #9ca3af; font-size: 13px; line-height: 1.6; text-align: center;">
                This is an automated confirmation email from <a href="https://aabanqureshi.github.io" style="color: #3b82f6; text-decoration: none;">aabanqureshi.github.io</a>
              </p>
              <p style="margin: 10px 0 0; color: #9ca3af; font-size: 13px; line-height: 1.6; text-align: center;">
                Please do not reply to this email. If you need immediate assistance, contact me at aabanqureshi564@gmail.com
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## Alternative: Simpler Text-Friendly Version

If you prefer a simpler, more text-friendly version (better for email clients with disabled HTML):

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
  <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
    Thanks for Your Message!
  </h2>
  
  <p>Hi {{name}},</p>
  
  <p>Thank you for reaching out through my portfolio website. I've received your message and wanted to confirm it arrived successfully.</p>
  
  <div style="background-color: #f0f4f8; padding: 15px; border-radius: 5px; margin: 20px 0;">
    <strong>Your message:</strong><br/>
    <p style="white-space: pre-wrap; margin-top: 10px;">{{message}}</p>
  </div>
  
  <p>I'll review your message and get back to you within 24-48 hours.</p>
  
  <p>In the meantime, feel free to:</p>
  <ul>
    <li>Check out my projects: <a href="https://github.com/AabanQureshi">GitHub</a></li>
    <li>Connect on <a href="https://www.linkedin.com/in/aaban-qureshi/">LinkedIn</a></li>
    <li>Email me: <a href="mailto:aabanqureshi564@gmail.com">aabanqureshi564@gmail.com</a></li>
  </ul>
  
  <p>Best regards,<br/>
  <strong>Aaban Rehman</strong><br/>
  Full-Stack ASP.NET Core Developer</p>
  
  <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
  
  <p style="font-size: 12px; color: #666;">
    This is an automated confirmation from <a href="https://aabanqureshi.github.io">aabanqureshi.github.io</a><br/>
    Please do not reply to this email.
  </p>
</div>
```

---

## Setup Instructions

### Step 1: Create the Auto-Reply Template in EmailJS

1. Log in to https://dashboard.emailjs.com/
2. Go to **Email Templates** → **Create New Template**
3. Set the template settings as specified above
4. Copy and paste the HTML template into the **Content** field
5. **Save** the template and note the **Template ID** (e.g., `template_autoreply123`)

### Step 2: Update Your Environment Variables

Add the auto-reply template ID to your `.env` file:

```bash
# Existing variables
VITE_EMAILJS_SERVICE_ID=service_hbiv80m
VITE_EMAILJS_TEMPLATE_ID=template_x32jud7
VITE_EMAILJS_PUBLIC_KEY=k1IFJNKhJ2s-yZ7xQ

# New auto-reply template ID
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=template_autoreply123
```

Also update `.env.example`:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=your_autoreply_template_id_here
```

### Step 3: Test Your Auto-Reply

1. Fill out the contact form on your website
2. Check the sender's email inbox
3. Verify the auto-reply email:
   - Has the correct recipient (sender's email)
   - Shows the sender's name
   - Includes their message
   - Looks professional and formatted correctly

---

## Benefits of Auto-Reply

✅ **Immediate confirmation** - Users know their message was received  
✅ **Set expectations** - They know when to expect a response  
✅ **Professionalism** - Shows you value their time and communication  
✅ **Reduce anxiety** - Eliminates the "did it work?" concern  
✅ **Branding opportunity** - Reinforces your professional image  
✅ **Provide alternatives** - Gives them other ways to connect while they wait  

---

## Troubleshooting

### Auto-reply not sending?

1. **Check EmailJS Dashboard**: Verify the template is active
2. **Verify Template ID**: Make sure it's correctly added to `.env`
3. **Check Console**: Look for errors in browser developer tools
4. **Test Email**: Ensure the sender's email is valid
5. **EmailJS Limits**: Check you haven't exceeded free tier (200 emails/month)

### Email going to spam?

1. **Verify sender domain** in EmailJS settings
2. **Don't use too many links** in the email
3. **Test with different email providers** (Gmail, Outlook, etc.)
4. **Add SPF/DKIM records** if using custom domain

### Variables not showing?

1. **Check parameter names** match exactly: `{{name}}`, `{{email}}`, `{{message}}`
2. **Use double curly braces**: `{{variable}}` not `{variable}`
3. **Test in EmailJS dashboard** using the "Test it" feature

---

## Pro Tips

💡 **Personalization**: The `{{name}}` variable makes the email feel personal  
💡 **Brevity**: Keep auto-replies short and actionable  
💡 **Mobile-friendly**: The table-based layout works on all devices  
💡 **Clear CTA**: Include links to your GitHub, LinkedIn, etc.  
💡 **Set expectations**: Tell them when they'll hear back  

---

## What's Next?

After setting up the auto-reply:

1. **Monitor delivery** - Check EmailJS dashboard for send statistics
2. **A/B test** - Try different versions to see what resonates
3. **Track responses** - See if auto-replies lead to more engagement
4. **Update regularly** - Keep contact info and links current

---

**Need Help?** Check the EmailJS documentation: https://www.emailjs.com/docs/
