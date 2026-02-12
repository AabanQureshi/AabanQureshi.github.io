# EmailJS Templates for Aaban Rehman Portfolio

This document contains the template code for both EmailJS templates used in the portfolio contact form.

---

## Variables Being Sent to EmailJS

### Main Notification Email (Template 1)
```javascript
{
  from_name: "John Doe",        // User's name
  from_email: "john@email.com", // User's email address
  message: "Hello, I would like to discuss...", // User's message
  // Legacy fields (for backward compatibility)
  name: "John Doe",
  email: "john@email.com"
}
```

### Auto-Reply Email (Template 2)
```javascript
{
  to_name: "John Doe",          // User's name (recipient)
  to_email: "john@email.com",   // User's email (recipient)
  // Legacy fields (for backward compatibility)
  name: "John Doe",
  email: "john@email.com"
}
```

---

## Template 1: Contact Notification Email (Sent to You)

**Template ID:** Use your own template ID (e.g., `template_x32jud7`)

### Subject Line:
```
New Portfolio Message from {{from_name}}
```

### Email Body (HTML):
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <!-- Header -->
    <tr>
      <td style="background: linear-gradient(135deg, #512BD4 0%, #0078D4 100%); padding: 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">📬 New Contact Form Submission</h1>
      </td>
    </tr>
    
    <!-- Body -->
    <tr>
      <td style="padding: 30px;">
        <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
          Hi Aaban,
        </p>
        <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
          You have received a new message from your portfolio website:
        </p>
        
        <!-- Sender Details -->
        <table width="100%" style="background-color: #f8f9fa; border-radius: 8px; margin-bottom: 20px;">
          <tr>
            <td style="padding: 20px;">
              <p style="margin: 0 0 10px 0; color: #666; font-size: 14px;">
                <strong style="color: #512BD4;">From:</strong> {{from_name}}
              </p>
              <p style="margin: 0; color: #666; font-size: 14px;">
                <strong style="color: #512BD4;">Email:</strong> 
                <a href="mailto:{{from_email}}" style="color: #0078D4; text-decoration: none;">{{from_email}}</a>
              </p>
            </td>
          </tr>
        </table>
        
        <!-- Message -->
        <div style="background-color: #f8f9fa; border-left: 4px solid #512BD4; padding: 20px; border-radius: 0 8px 8px 0; margin-bottom: 20px;">
          <p style="margin: 0 0 10px 0; color: #512BD4; font-weight: 600; font-size: 14px;">Message:</p>
          <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">{{message}}</p>
        </div>
        
        <!-- Action Button -->
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center; padding-top: 10px;">
              <a href="mailto:{{from_email}}" style="display: inline-block; background: linear-gradient(135deg, #512BD4 0%, #0078D4 100%); color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: 600; font-size: 14px;">
                Reply to {{from_name}}
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    
    <!-- Footer -->
    <tr>
      <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #eee;">
        <p style="color: #999; font-size: 12px; margin: 0;">
          This email was sent from your portfolio at 
          <a href="https://aabanrehman.me" style="color: #512BD4; text-decoration: none;">aabanrehman.me</a>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
```

### Plain Text Version:
```
New Portfolio Message from {{from_name}}

Hi Aaban,

You have received a new message from your portfolio website:

---
FROM: {{from_name}}
EMAIL: {{from_email}}

MESSAGE:
{{message}}
---

Reply directly to this email or click below:
mailto:{{from_email}}

---
Sent from aabanrehman.me
```

---

## Template 2: Auto-Reply Email (Sent to User)

**Template ID:** Use your own template ID (e.g., `template_yakaugv`)

### Subject Line:
```
Thanks for reaching out, {{to_name}}! 🎉
```

### Email Body (HTML):
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <!-- Header -->
    <tr>
      <td style="background: linear-gradient(135deg, #512BD4 0%, #0078D4 100%); padding: 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">✨ Thanks for Reaching Out!</h1>
      </td>
    </tr>
    
    <!-- Body -->
    <tr>
      <td style="padding: 30px;">
        <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
          Hi {{to_name}},
        </p>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          Thank you for getting in touch! I've received your message and will get back to you as soon as possible, usually within 24-48 hours.
        </p>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          In the meantime, feel free to check out my work or connect with me on social media:
        </p>
        
        <!-- Social Links -->
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
          <tr>
            <td style="text-align: center;">
              <a href="https://github.com/AabanQureshi" style="display: inline-block; background-color: #f8f9fa; color: #333; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 14px; margin: 5px;">
                🔗 GitHub
              </a>
              <a href="https://www.linkedin.com/in/aaban-qureshi/" style="display: inline-block; background-color: #f8f9fa; color: #333; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 14px; margin: 5px;">
                💼 LinkedIn
              </a>
            </td>
          </tr>
        </table>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 10px;">
          Looking forward to connecting with you!
        </p>
        
        <p style="color: #333; font-size: 16px; margin-bottom: 5px;">
          Best regards,
        </p>
        <p style="color: #512BD4; font-size: 18px; font-weight: 600; margin: 0;">
          Aaban Rehman
        </p>
        <p style="color: #666; font-size: 14px; margin-top: 5px;">
          Full-Stack .NET Developer
        </p>
      </td>
    </tr>
    
    <!-- Footer -->
    <tr>
      <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #eee;">
        <p style="color: #999; font-size: 12px; margin: 0 0 10px 0;">
          This is an automated response. Please don't reply to this email.
        </p>
        <p style="color: #999; font-size: 12px; margin: 0;">
          <a href="https://aabanrehman.me" style="color: #512BD4; text-decoration: none;">aabanrehman.me</a> | 
          <a href="mailto:aabanqureshi564@gmail.com" style="color: #512BD4; text-decoration: none;">aabanqureshi564@gmail.com</a>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
```

### Plain Text Version:
```
Thanks for reaching out, {{to_name}}! 🎉

Hi {{to_name}},

Thank you for getting in touch! I've received your message and will get back to you as soon as possible, usually within 24-48 hours.

In the meantime, feel free to check out my work:
- GitHub: https://github.com/AabanQureshi
- LinkedIn: https://www.linkedin.com/in/aaban-qureshi/

Looking forward to connecting with you!

Best regards,
Aaban Rehman
Full-Stack .NET Developer

---
This is an automated response. Please don't reply to this email.
Website: https://aabanrehman.me
Email: aabanqureshi564@gmail.com
```

---

## EmailJS Setup Instructions

### 1. Create Templates in EmailJS Dashboard

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to **Email Templates**
3. Create two templates:
   - **Template 1**: Contact Notification (copy HTML above)
   - **Template 2**: Auto-Reply (copy HTML above)

### 2. Configure Template Settings

**Template 1 (Contact Notification):**
- **To Email**: `aabanqureshi564@gmail.com` (your email)
- **From Name**: `{{from_name}}`
- **Reply To**: `{{from_email}}`
- **Subject**: `New Portfolio Message from {{from_name}}`

**Template 2 (Auto-Reply):**
- **To Email**: `{{to_email}}` (user's email - dynamic)
- **From Name**: `Aaban Rehman`
- **Reply To**: `aabanqureshi564@gmail.com`
- **Subject**: `Thanks for reaching out, {{to_name}}! 🎉`

### 3. Environment Variables

Make sure your `.env` file has these variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_contact_template_id
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=your_autoreply_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Variable Reference

| Variable | Template 1 | Template 2 | Description |
|----------|-----------|-----------|-------------|
| `from_name` | ✅ | ❌ | Sender's name |
| `from_email` | ✅ | ❌ | Sender's email |
| `message` | ✅ | ❌ | Message content |
| `to_name` | ❌ | ✅ | Recipient name (user) |
| `to_email` | ❌ | ✅ | Recipient email (user) |
| `name` | ✅ | ✅ | Legacy - same as from_name/to_name |
| `email` | ✅ | ✅ | Legacy - same as from_email/to_email |

---

## Testing

After setting up templates:

1. Fill out the contact form on your portfolio
2. Check your inbox for the notification email
3. Check the user's inbox (the email you entered) for the auto-reply
4. Verify all variables are populated correctly

If issues occur, check the browser console for EmailJS errors.
