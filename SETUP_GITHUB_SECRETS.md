# Setting Up GitHub Secrets for EmailJS

This guide explains how to configure the required GitHub repository secrets for the contact form to work in production.

## Why Are Secrets Needed?

The contact form uses EmailJS to send emails. For security reasons, EmailJS credentials should not be committed to the repository. Instead, they are:
- Stored in a `.env` file for local development (ignored by Git)
- Configured as GitHub Secrets for production deployment

## Step-by-Step Setup

### 1. Get Your EmailJS Credentials

1. Sign up or log in to [EmailJS](https://www.emailjs.com/)
2. Create a new email service (e.g., Gmail, Outlook)
3. Create two email templates:
   - **Admin Notification Template**: Receives messages from the contact form
   - **Auto-Reply Template** (optional): Sends confirmation to users
4. Note down:
   - Service ID (from your Email Services page)
   - Template IDs (from your Email Templates page)
   - Public Key (from Account → General)

### 2. Configure GitHub Repository Secrets

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each of the following secrets:

#### Required Secrets

| Secret Name | Description | Example Value |
|------------|-------------|---------------|
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS service ID | `service_abc1234` |
| `VITE_EMAILJS_TEMPLATE_ID` | Template for admin notifications | `template_xyz5678` |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS public key | `abcdef123456` |

#### Optional Secrets

| Secret Name | Description | Example Value |
|------------|-------------|---------------|
| `VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID` | Template for user auto-reply | `template_reply123` |

### 3. Verify Configuration

After adding the secrets:
1. Push a change to the `main` branch to trigger a deployment
2. Wait for the GitHub Actions workflow to complete
3. Visit your live site and test the contact form
4. Check the Actions tab if you encounter any issues

## Local Development

For local development:
1. Copy `.env.example` to `.env` in the `aabanrehman-main` directory
2. Fill in your EmailJS credentials (same values as the secrets above)
3. The `.env` file is already in `.gitignore` and will not be committed

## Troubleshooting

### Contact Form Shows Error Message

**Error**: "EmailJS configuration is missing. Please check environment variables."

**Solution**: Verify that all required GitHub secrets are configured correctly (see step 2 above).

### GitHub Actions Build Fails

**Check**:
1. Ensure all required secrets are added (at minimum: SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY)
2. Verify secret names exactly match: `VITE_EMAILJS_SERVICE_ID`, etc. (case-sensitive)
3. Check the Actions tab for detailed error logs

### Auto-Reply Not Sending

**Note**: The auto-reply is optional. If `VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID` is not configured:
- The main notification email will still be sent
- Users won't receive a confirmation email
- No error will be shown (this is by design)

## Security Notes

- **Never** commit `.env` files or credentials to the repository
- GitHub Secrets are encrypted and only accessible during workflow runs
- EmailJS public key is safe to expose (it's meant to be used in client-side code)
- For additional security, configure EmailJS domain restrictions in your account settings

## Further Reading

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [GitHub Secrets Documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
