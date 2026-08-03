import { useScrollProgress } from '@/hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-accent via-fuchsia-500 to-sky-500"
        style={{
          width: `${progress * 100}%`,
          willChange: 'width',
        }}
      />
    </div>
  );
}
