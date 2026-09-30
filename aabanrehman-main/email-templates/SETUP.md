# Shared EmailJS templates: enquiries and feedback

Edit your two existing templates. Do not create new ones.

| Setting | Owner notification | Client acknowledgment |
| --- | --- | --- |
| Paste HTML from | shared-notification.html | shared-auto-reply.html |
| To Email | aabanqureshi564@gmail.com (fixed) | {{to_email}} |
| Subject | {{email_heading}} — {{from_name}} | {{reply_heading}} — Aaban Rehman |
| From Name | Aaban Rehman Portfolio | Aaban Rehman |
| From Email | Connected email service sender | Connected email service sender |
| Reply To | {{from_email}} | aabanqureshi564@gmail.com |

Keep the current template IDs: VITE_EMAILJS_TEMPLATE_ID for the notification and VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID for the acknowledgment. Both forms also use VITE_EMAILJS_SERVICE_ID and VITE_EMAILJS_PUBLIC_KEY. These four settings are required for direct submission; otherwise the site offers email instead. Restart Vite after editing local .env. Production reads the corresponding GitHub Actions secrets on its next build.

Disable any dashboard-linked auto-reply on the notification template: the application explicitly sends the acknowledgment. Keeping both mechanisms enabled would send duplicate acknowledgments. Use double-brace variables so EmailJS escapes submitted text.

Enquiries send a private project message. Feedback sends client details, feedback text, and explicit Yes/No publication permissions in {{message}}. The acknowledgment uses {{reply_message}} and {{reply_details}} appropriate to the submission type. It does not echo untrusted feedback text to the client.

The owner email is requested first, then the acknowledgment. Requests are spaced at least 1.1 seconds apart. If the second fails, the form confirms receipt but reports acknowledgment failure and prevents resubmission. Two send requests are used; existing account quotas still apply. Leaving the page between requests may prevent the second email. API acceptance does not prove inbox delivery.

## CMS review

Submissions remain in your inbox. Manually copy consented, approved feedback into Approved client feedback in Pages CMS. Add Public email only if both publication permissions are Yes. Do not put private feedback, private emails, or consent evidence into the public repository. Keep the original consent email privately.

No live emails were sent during implementation. Template HTML must be saved in EmailJS before using the updated form in production.
