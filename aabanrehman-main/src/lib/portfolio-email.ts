import emailjs from '@emailjs/browser';

export const emailConfigured = Boolean(
  import.meta.env.VITE_EMAILJS_SERVICE_ID && import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
  import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID && import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
);

// Serialize sends from both forms to respect EmailJS's one-request-per-second limit.
let queue: Promise<unknown> = Promise.resolve();
let lastSend = 0;
function send(template: string, parameters: Record<string, string>) {
  const task = queue.then(async () => {
    const delay = Math.max(0, 1100 - (Date.now() - lastSend));
    if (delay) await new Promise(resolve => window.setTimeout(resolve, delay));
    lastSend = Date.now();
    return emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, template, parameters, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  });
  queue = task.catch(() => undefined);
  return task;
}

export async function sendPortfolioEmail(parameters: Record<string, string>): Promise<'sent' | 'receipt-error'> {
  await send(import.meta.env.VITE_EMAILJS_TEMPLATE_ID, parameters);
  // Once the owner notification succeeds, never report the whole submission as failed.
  try {
    await send(import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID, parameters);
    return 'sent';
  } catch {
    return 'receipt-error';
  }
}
