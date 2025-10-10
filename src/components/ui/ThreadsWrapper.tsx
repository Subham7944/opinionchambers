import dynamic from 'next/dynamic';

// Dynamic import of Threads component with SSR disabled
const Threads = dynamic(() => import('./Threads'), {
  ssr: false,
});

// Export the same props interface
export interface ThreadsProps {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
}

// Re-export the component
export default Threads;
