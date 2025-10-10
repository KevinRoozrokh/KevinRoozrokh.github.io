import { useState, useEffect, useRef } from 'react';

interface ObserverOptions {
  threshold?: number;
  rootMargin?: string;
  repeat?: boolean;
}

// Type guard to check if the ref is a valid HTML element
function isHTMLElement(target: EventTarget | null): target is HTMLElement {
  return target instanceof HTMLElement;
}

export const useAnimationObserver = <T extends HTMLElement>(options: ObserverOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', repeat = false } = options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!repeat) {
            observer.unobserve(entry.target);
          }
        } else {
          if (repeat) {
            setIsVisible(false);
          }
        }
      },
      { threshold, rootMargin }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, repeat]);

  return [elementRef, isVisible] as const;
};