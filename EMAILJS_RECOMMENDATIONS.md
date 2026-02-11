# EmailJS Contact Form - Recommendations

## Environment Variables Setup

The EmailJS credentials are now stored in environment variables for better security and configuration management.

### Configuration Files:

1. **`.env`** - Contains your actual EmailJS credentials (already configured)
2. **`.env.example`** - Template file for other developers

### Current Configuration:
```
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=template_xxxxx  # For auto-reply emails
```

**Note:** The `.env` file is excluded from git via `.gitignore` to keep credentials secure.

## Updated Contact Form Fields

The contact form now includes the following fields:

| Field | Variable Name | Type | Required |
|-------|--------------|------|----------|
| Name | `from_name` / `name` | Text | Yes |
| Email | `from_email` / `email` | Email | Yes |
| Phone | `phone` | Text | No |
| Company | `company` | Text | No |
| Service Required | `service` | Dropdown | Yes |
| Estimated Budget | `budget` | Dropdown | Yes |
| Project Timeline | `timeline` | Dropdown | Yes |
| Contact Preference | `contact_preference` | Radio | Yes |
| Project Details | `message` | Textarea | Yes |

## Auto-Reply Feature

The contact form supports automatic reply emails! When a user submits the form:
1. **Main email** is sent to you (aabanqureshi564@gmail.com)
2. **Auto-reply email** is sent to the user confirming receipt

---

## Template 1: Contact Notification (Sent to Admin)

### EmailJS Template Settings:
- **To Email**: aabanqureshi564@gmail.com
- **From Name**: Portfolio Contact Form
- **Reply-To**: {{from_email}}
- **Subject**: New Project Inquiry from {{from_name}}

### Complete HTML Template:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0a0e27; font-family: 'Segoe UI', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0e27; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #151937; border-radius: 16px; overflow: hidden; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">
                🚀 New Project Inquiry
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px;">
                Someone wants to work with you!
              </p>
            </td>
          </tr>
          
          <!-- Client Info Section -->
          <tr>
            <td style="padding: 30px;">
              <h2 style="color: #00d4ff; margin: 0 0 20px 0; font-size: 18px; border-bottom: 1px solid #1a1f3a; padding-bottom: 10px;">
                👤 Client Information
              </h2>
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="50%" style="padding: 10px 0;">
                    <p style="color: #64748b; margin: 0; font-size: 12px; text-transform: uppercase;">Name</p>
                    <p style="color: #ffffff; margin: 5px 0 0 0; font-size: 16px; font-weight: 500;">{{from_name}}</p>
                  </td>
                  <td width="50%" style="padding: 10px 0;">
                    <p style="color: #64748b; margin: 0; font-size: 12px; text-transform: uppercase;">Email</p>
                    <p style="color: #00d4ff; margin: 5px 0 0 0; font-size: 16px;">{{from_email}}</p>
                  </td>
                </tr>
                <tr>
                  <td width="50%" style="padding: 10px 0;">
                    <p style="color: #64748b; margin: 0; font-size: 12px; text-transform: uppercase;">Phone</p>
                    <p style="color: #ffffff; margin: 5px 0 0 0; font-size: 16px;">{{phone}}</p>
                  </td>
                  <td width="50%" style="padding: 10px 0;">
                    <p style="color: #64748b; margin: 0; font-size: 12px; text-transform: uppercase;">Company</p>
                    <p style="color: #ffffff; margin: 5px 0 0 0; font-size: 16px;">{{company}}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Project Details Section -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h2 style="color: #00d4ff; margin: 0 0 20px 0; font-size: 18px; border-bottom: 1px solid #1a1f3a; padding-bottom: 10px;">
                📋 Project Details
              </h2>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1a1f3a; border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 15px; border-bottom: 1px solid #0a0e27;">
                    <p style="color: #64748b; margin: 0; font-size: 12px; text-transform: uppercase;">Service Required</p>
                    <p style="color: #10b981; margin: 5px 0 0 0; font-size: 16px; font-weight: 600;">{{service}}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px; border-bottom: 1px solid #0a0e27;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="50%">
                          <p style="color: #64748b; margin: 0; font-size: 12px; text-transform: uppercase;">Budget</p>
                          <p style="color: #f59e0b; margin: 5px 0 0 0; font-size: 16px; font-weight: 600;">{{budget}}</p>
                        </td>
                        <td width="50%">
                          <p style="color: #64748b; margin: 0; font-size: 12px; text-transform: uppercase;">Timeline</p>
                          <p style="color: #7c3aed; margin: 5px 0 0 0; font-size: 16px; font-weight: 600;">{{timeline}}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px;">
                    <p style="color: #64748b; margin: 0; font-size: 12px; text-transform: uppercase;">Preferred Contact Method</p>
                    <p style="color: #00d4ff; margin: 5px 0 0 0; font-size: 16px;">{{contact_preference}}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Message Section -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h2 style="color: #00d4ff; margin: 0 0 20px 0; font-size: 18px; border-bottom: 1px solid #1a1f3a; padding-bottom: 10px;">
                💬 Project Description
              </h2>
              
              <div style="background-color: #1a1f3a; border-radius: 12px; padding: 20px; border-left: 4px solid #00d4ff;">
                <p style="color: #ffffff; margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">{{message}}</p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #0a0e27; padding: 20px 30px; text-align: center;">
              <p style="color: #64748b; margin: 0; font-size: 12px;">
                This inquiry was submitted from your portfolio website
              </p>
              <p style="color: #64748b; margin: 5px 0 0 0; font-size: 12px;">
                <a href="https://aabanrehman.me" style="color: #00d4ff; text-decoration: none;">aabanrehman.me</a>
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

## Template 2: Auto-Reply (Sent to Client)

### EmailJS Template Settings:
- **To Email**: {{to_email}} or {{from_email}}
- **From Name**: Aaban Rehman
- **Reply-To**: aabanqureshi564@gmail.com
- **Subject**: Thanks for reaching out! I'll respond within 24 hours

### Complete HTML Template:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0a0e27; font-family: 'Segoe UI', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0e27; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #151937; border-radius: 16px; overflow: hidden; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%); padding: 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">
                Thank You for Reaching Out! 🎉
              </h1>
            </td>
          </tr>
          
          <!-- Greeting -->
          <tr>
            <td style="padding: 40px 30px 20px 30px;">
              <p style="color: #ffffff; margin: 0; font-size: 18px; line-height: 1.6;">
                Hi <strong style="color: #00d4ff;">{{to_name}}</strong>,
              </p>
              <p style="color: #94a3b8; margin: 15px 0 0 0; font-size: 16px; line-height: 1.7;">
                I've received your inquiry and I'm excited about the possibility of working together! 
                I'll review your requirements carefully and get back to you within <strong style="color: #10b981;">24 hours</strong>.
              </p>
            </td>
          </tr>
          
          <!-- Summary -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background-color: #1a1f3a; border-radius: 12px; padding: 25px; border-left: 4px solid #00d4ff;">
                <h3 style="color: #00d4ff; margin: 0 0 20px 0; font-size: 16px;">
                  📋 Your Request Summary
                </h3>
                
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding: 8px 0;">
                      <span style="color: #64748b; font-size: 13px;">Service:</span>
                      <span style="color: #ffffff; font-size: 14px; float: right;">{{service}}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; border-top: 1px solid #0a0e27;">
                      <span style="color: #64748b; font-size: 13px;">Budget:</span>
                      <span style="color: #f59e0b; font-size: 14px; font-weight: 600; float: right;">{{budget}}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; border-top: 1px solid #0a0e27;">
                      <span style="color: #64748b; font-size: 13px;">Timeline:</span>
                      <span style="color: #7c3aed; font-size: 14px; font-weight: 600; float: right;">{{timeline}}</span>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
          
          <!-- What's Next -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h3 style="color: #ffffff; margin: 0 0 15px 0; font-size: 16px;">
                ⚡ What Happens Next?
              </h3>
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 10px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background-color: #00d4ff; color: #0a0e27; width: 28px; height: 28px; text-align: center; border-radius: 50%; font-weight: bold; font-size: 14px;">1</td>
                        <td style="padding-left: 15px; color: #94a3b8; font-size: 14px;">I'll review your project requirements in detail</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background-color: #7c3aed; color: #ffffff; width: 28px; height: 28px; text-align: center; border-radius: 50%; font-weight: bold; font-size: 14px;">2</td>
                        <td style="padding-left: 15px; color: #94a3b8; font-size: 14px;">We'll schedule a call to discuss your vision</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background-color: #10b981; color: #ffffff; width: 28px; height: 28px; text-align: center; border-radius: 50%; font-weight: bold; font-size: 14px;">3</td>
                        <td style="padding-left: 15px; color: #94a3b8; font-size: 14px;">I'll provide a detailed proposal and timeline</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Contact Info -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background-color: #1a1f3a; border-radius: 12px; padding: 20px; text-align: center;">
                <p style="color: #64748b; margin: 0 0 10px 0; font-size: 13px;">Need to reach me urgently?</p>
                <p style="margin: 0;">
                  <a href="mailto:aabanqureshi564@gmail.com" style="color: #00d4ff; text-decoration: none; font-size: 15px;">aabanqureshi564@gmail.com</a>
                </p>
                <p style="margin: 10px 0 0 0;">
                  <a href="https://www.linkedin.com/in/aaban-qureshi/" style="color: #00d4ff; text-decoration: none; font-size: 13px;">LinkedIn</a>
                  <span style="color: #64748b; margin: 0 10px;">•</span>
                  <a href="https://github.com/AabanQureshi" style="color: #00d4ff; text-decoration: none; font-size: 13px;">GitHub</a>
                </p>
              </div>
            </td>
          </tr>
          
          <!-- Signature -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <p style="color: #94a3b8; margin: 0; font-size: 15px; line-height: 1.6;">
                Looking forward to creating something amazing together!
              </p>
              <p style="color: #ffffff; margin: 20px 0 0 0; font-size: 16px; font-weight: 600;">
                Best regards,<br/>
                <span style="color: #00d4ff;">Aaban Rehman</span>
              </p>
              <p style="color: #64748b; margin: 5px 0 0 0; font-size: 13px;">
                Full-Stack .NET Developer | Microsoft Certified
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #0a0e27; padding: 20px 30px; text-align: center;">
              <p style="color: #64748b; margin: 0; font-size: 11px;">
                © 2025 Aaban Rehman. All rights reserved.
              </p>
              <p style="color: #64748b; margin: 5px 0 0 0; font-size: 11px;">
                <a href="https://aabanrehman.me" style="color: #00d4ff; text-decoration: none;">aabanrehman.me</a>
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

## Template Variables Reference

### Contact Notification Template (Template 1):
| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | Client's name | John Doe |
| `{{from_email}}` | Client's email | john@example.com |
| `{{phone}}` | Client's phone | +1 555 000 0000 |
| `{{company}}` | Client's company | Acme Corp |
| `{{service}}` | Selected service | Full-Stack Web Development |
| `{{budget}}` | Budget range | $5,000 - $10,000 |
| `{{timeline}}` | Project timeline | 3-4 weeks |
| `{{contact_preference}}` | Preferred contact | Email |
| `{{message}}` | Project details | Full project description... |

### Auto-Reply Template (Template 2):
| Variable | Description | Example |
|----------|-------------|---------|
| `{{to_name}}` | Client's name | John Doe |
| `{{to_email}}` | Client's email | john@example.com |
| `{{service}}` | Selected service | Full-Stack Web Development |
| `{{budget}}` | Budget range | $5,000 - $10,000 |
| `{{timeline}}` | Project timeline | 3-4 weeks |

---

## Setting Up in EmailJS Dashboard

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to **Email Templates**
3. Create or edit your templates
4. Copy-paste the HTML code into the template body
5. Set the template settings (To Email, Subject, Reply-To)
6. Save and test!

## Testing

After implementing these changes:
1. Send a test message from your live website
2. Verify you receive the admin notification email
3. Verify the client receives the auto-reply
4. Check formatting on both desktop and mobile email clients
5. Test the Reply-To functionality

## Security Note

Your EmailJS public key is in the client-side code, which is normal. EmailJS public keys are designed to be exposed. However:
- Set up domain restrictions in EmailJS dashboard
- Enable reCAPTCHA if spam becomes an issue
- Monitor your EmailJS usage (free tier: 200 emails/month)
