// frontend\src\components\AnimatedBorderButton.tsx

export const AnimatedBorderButton = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
  return (
    <button
      className={`relative bg-transparent border border-border 
        text-foreground hover:border-primary/50 transition-all 
        duration-1000 focus:outline-none focus-visible:ring-2 
        focus-visible:ring-primary focus-visible:ring-offset-2 
        disabled:opacity-50 disabled:cursor-not-allowed group 
        px-2.5 py-1 text-lg font-medium rounded-full overflow-visible 
        animated-border ${className}`}
    >
      {/* Animated SVG Border */}
      <svg
        className="absolute inset-0 pointer-events-none download-cv-border"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible", left: '-4px', top: '-4px', width: 'calc(100% + 8px)', height: 'calc(100% + 8px)' }}
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};