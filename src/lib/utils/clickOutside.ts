import { useEffect, useRef, type RefObject } from 'react';

/**
 * React hook for handling clicks outside an element
 * Used for closing dropdown menus when clicking outside
 */
export function useClickOutside<T extends HTMLElement>(
  callback: () => void,
  enabled = true
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!enabled) return;

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (ref.current && !ref.current.contains(target)) {
        callback();
      }
    };

    document.addEventListener('click', handleOutsideClick, true);

    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, [callback, enabled]);

  return ref;
}
