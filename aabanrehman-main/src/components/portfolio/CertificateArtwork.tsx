import { useState } from 'react';
import { Award } from 'lucide-react';

// Issuer logos identify the credential provider, not an affiliation or endorsement.
export function CertificateArtwork({ image, issuerLogo, issuer }: { image?: string; issuerLogo?: string; issuer: string }) {
  const [failedImage, setFailedImage] = useState(false);
  const [failedLogo, setFailedLogo] = useState(false);
  if (image && !failedImage) return <img src={image} alt={`${issuer} certificate`} loading="lazy" onError={() => setFailedImage(true)} />;
  if (issuerLogo && !failedLogo) return <img className="issuer-logo" src={issuerLogo} alt={`${issuer} logo`} loading="lazy" onError={() => setFailedLogo(true)} />;
  return <Award size={42} aria-label={`${issuer} credential`} />;
}
