'use client';

import NextImage, { type ImageProps } from 'next/image';
import { useEffect, useRef } from 'react';
import { useLightbox } from './LightboxProvider';

interface Props extends ImageProps {
  caption?: string;
}

export default function LightboxImage({
  src,
  alt,
  caption,
  className,
  ...props
}: Props) {
  const { register, open } = useLightbox();
  const indexRef = useRef<number>(-1);

  useEffect(() => {
    indexRef.current = register({ src: src as string, alt, caption });
  }, [register, src, alt, caption]);

  return (
    <NextImage
      src={src}
      alt={alt}
      className={`cursor-zoom-in ${className ?? ''}`}
      onClick={() => {
        if (indexRef.current !== -1) open(indexRef.current);
      }}
      {...props}
    />
  );
}
