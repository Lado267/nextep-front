"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';
import './gallery.css';

interface GalleryProps {
  images: string[];
}

export function Gallery({ images }: GalleryProps) {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <Image 
              src={image} 
              alt={`Project showcase image ${index + 1}`}
              className="rounded-lg shadow-sm"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="gallery-overlay">
              <Button 
                variant="secondary" 
                onClick={() => setExpandedImage(image)}
                className="expand-button"
              >
                Expand
              </Button>
            </div>
          </div>
        ))}
      </div>

      {expandedImage && (
        <div className="expanded-image-overlay" onClick={() => setExpandedImage(null)}>
          <div className="expanded-image-container" onClick={e => e.stopPropagation()}>
            <Button 
              variant="secondary"
              className="close-button"
              onClick={() => setExpandedImage(null)}
            >
              ✕
            </Button>
            <Image 
              src={expandedImage}
              alt="Expanded view"
              fill
              style={{ objectFit: 'contain' }}
              className="expanded-image"
            />
          </div>
        </div>
      )}
    </>
  );
}