// Declare React module to avoid errors in TypeScript
import React from 'react';

declare module 'framer-motion' {
  export const motion: {
    div: React.ForwardRefExoticComponent<any>;
    h1: React.ForwardRefExoticComponent<any>;
    h2: React.ForwardRefExoticComponent<any>;
    p: React.ForwardRefExoticComponent<any>;
    span: React.ForwardRefExoticComponent<any>;
  };
  export function useInView(
    ref: React.RefObject<Element>,
    options?: {
      once?: boolean;
      threshold?: number;
    }
  ): boolean;
} 