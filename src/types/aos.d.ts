declare module 'aos' {
  interface AOSOptions {
    duration?: number;
    offset?: number;
    delay?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
  }

  const AOS: {
    init(options?: AOSOptions): void;
    refresh(): void;
    refreshHard(): void;
  };

  export default AOS;
}