"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../../../components/ui/button';
import './hero_image.css';

interface HeroImageProps {
  src: string;
  alt: string;
}

export function HeroImage({ src, alt }: HeroImageProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <>
      <div className="hero-image">
        <Image 
          src={src} 
          alt={alt} 
          className='rounded-lg shadow-sm'
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          style={{ 
            objectFit: 'cover',
            objectPosition: 'top' // This ensures the top is always visible
        }}
        />
        <div className="gallery-overlay">
          <Button 
            variant="secondary" 
            onClick={() => setIsExpanded(true)}
            className="expand-button"
          >
            Expand
          </Button>
        </div>
      </div>

      {isExpanded && (
        <div className="expanded-image-overlay" onClick={() => setIsExpanded(false)}>
          <div className="expanded-image-container" onClick={e => e.stopPropagation()}>
            <Button 
              variant="secondary"
              className="close-button"
              onClick={() => setIsExpanded(false)}
            >
              ✕
            </Button>
            <Image 
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              style={{ objectFit: 'contain' }}
              className="expanded-image"
            />
          </div>
        </div>
      )}
    </>
  );
}