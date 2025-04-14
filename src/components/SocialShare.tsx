'use client';

import { useEffect, useState } from 'react';
import { FaTwitter, FaLinkedin, FaFacebook, FaWhatsapp, FaReddit } from 'react-icons/fa';

interface SocialShareProps {
  url: string;
  title: string;
  description: string;
}

declare global {
    interface Window {
      gtag: (command: string, action: string, params: object) => void;
    }
  }

export const SocialShare = ({ url, title, description }: SocialShareProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const trackShare = (platform: string) => {
    if (window.gtag) {
      window.gtag('event', 'share', {
        method: platform,
        content_type: 'page',
        item_id: url,
      });
    }
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDesc = encodeURIComponent(description);

  if (!isClient) {
    return null; // Return null on server-side
  }

  return (
    <div className="flex gap-4 items-center py-4">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1DA1F2] hover:opacity-80 transition-opacity"
        aria-label="Share on Twitter"
        onClick={() => trackShare('Twitter')}
      >
        <FaTwitter size={24} />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDesc}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#0077B5] hover:opacity-80 transition-opacity"
        aria-label="Share on LinkedIn"
        onClick={() => trackShare('LinkedIn')}
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#4267B2] hover:opacity-80 transition-opacity"
        aria-label="Share on Facebook"
        onClick={() => trackShare('Facebook')}
      >
        <FaFacebook size={24} />
      </a>
      <a
        href={`https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#FF4500] hover:opacity-80 transition-opacity"
        aria-label="Share on Reddit"
        onClick={() => trackShare('Reddit')}
      >
        <FaReddit size={24} />
      </a>
      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#25D366] hover:opacity-80 transition-opacity"
        aria-label="Share on WhatsApp"
        onClick={() => trackShare('WhatsApp')}
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};