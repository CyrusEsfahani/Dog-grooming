import { SVGProps } from 'react';

export const BathIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M7 9V6c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v3" />
    <path d="M3 13h18v2c0 3.3-2.7 6-6 6h-6c-3.3 0-6-2.7-6-6v-2z" />
    <path d="M5 13V9c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v4" />
  </svg>
);

export const GroomingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
    <line x1="12" y1="7" x2="12" y2="17" />
  </svg>
);

export const NailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 3h12l4 8-4 8H6l-4-8 4-8z" />
    <path d="M12 7v10" />
    <path d="M9 10v4" />
    <path d="M15 10v4" />
  </svg>
);