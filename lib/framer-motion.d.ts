declare module 'framer-motion' {
  export function useInView(
    ref: React.RefObject<Element>,
    options?: {
      root?: React.RefObject<Element>;
      margin?: string;
      amount?: 'some' | 'all' | number;
      once?: boolean;
    }
  ): boolean;
}