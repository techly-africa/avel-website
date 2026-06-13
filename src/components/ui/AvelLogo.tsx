import React from "react";
import Image from "next/image";

interface AvelLogoProps {
  className?: string;
  size?: number;
  light?: boolean;
}

export default function AvelLogo({ 
  className = "", 
  size = 52
}: AvelLogoProps) {
  const width = Math.round(size * (2280 / 873));

  return (
    <div className={`relative ${className}`} style={{ width, height: size }}>
      <Image
        src="/avel-new.png"
        alt="AVEL Africa"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
