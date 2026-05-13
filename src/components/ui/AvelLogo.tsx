import React from "react";
import Image from "next/image";

interface AvelLogoProps {
  className?: string;
  size?: number;
  light?: boolean;
}

export default function AvelLogo({ 
  className = "", 
  size = 40,
  light = false
}: AvelLogoProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size * 4, height: size }}>
      <Image
        src="/avel_africa_logo_transparent.png"
        alt="AVEL Africa"
        fill
        className={`object-contain ${light ? "invert brightness-0" : ""}`}
        priority
      />
    </div>
  );
}
