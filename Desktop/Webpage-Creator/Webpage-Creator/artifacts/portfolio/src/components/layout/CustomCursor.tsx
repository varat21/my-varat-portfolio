import { useMousePosition } from '@/hooks/useMousePosition';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export function CustomCursor() {
  const isDesktop = useMediaQuery('(min-width: 900px) and (pointer: fine)');
  const { x, y } = useMousePosition(isDesktop);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) {
        setIsHovering(false);
        return;
      }
      const interactive =
        target.closest('a, button, [role="button"], input, textarea, select, label, summary, [tabindex]:not([tabindex="-1"])');
      setIsHovering(!!interactive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference"
        style={{
          transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${isClicking ? 0.6 : isHovering ? 0 : 1})`,
          transition: 'transform 120ms cubic-bezier(0.4, 0, 0.2, 1)',
          width: '8px',
          height: '8px',
          borderRadius: '9999px',
          backgroundColor: '#ffffff',
          willChange: 'transform',
        }}
      />
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference"
        style={{
          transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${isClicking ? 0.85 : isHovering ? 1.8 : 1})`,
          transition: 'transform 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 280ms ease',
          width: '36px',
          height: '36px',
          borderRadius: '9999px',
          border: '1px solid rgba(255,255,255,0.9)',
          opacity: isHovering ? 1 : 0.5,
          willChange: 'transform',
        }}
      />
    </>
  );
}
