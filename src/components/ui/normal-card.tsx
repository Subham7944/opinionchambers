"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

export const NormalCardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-white/90 border-black/[0.1] w-full h-[360px] p-6 border shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col",
        className
      )}
    >
      {children}
    </div>
  );
};

export const NormalCardTitle = ({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}) => {
  return (
    <div
      className={cn("text-lg font-bold font-league-spartan text-black", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export const NormalCardSubtitle = ({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}) => {
  return (
    <p
      className={cn("text-sm uppercase tracking-wider font-league-spartan font-medium mt-2 text-gray-600", className)}
      {...rest}
    >
      {children}
    </p>
  );
};

export const NormalCardImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  return (
    <div className={cn("w-full mt-6 flex-grow", className)}>
      <div className="relative h-48 w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export const NormalCardLogo = ({
  src,
  alt,
  width = 35,
  height = 35,
  className,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <div className={cn("mt-auto pt-4", className)}>
      <Image 
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};
