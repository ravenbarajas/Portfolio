import { useEffect } from 'react';

/**
 * A simple hook to add animation classes to elements when they appear in the viewport
 *
 * @param {string} rootSelector - The selector for the container element (optional)
 * @param {string} targetSelector - The selector for the elements to animate
 * @param {string} animatedClass - The class to add when elements are visible
 * @param {number} threshold - Intersection threshold (0-1)
 * @param {string} rootMargin - Root margin for IntersectionObserver
 */
const useScrollAnimation = (
  targetSelector: string,
  animatedClass: string = 'animated',
  threshold: number = 0.1,
  rootMargin: string = '0px 0px -100px 0px',
  rootSelector?: string
): void => {
  useEffect(() => {
    // Find the root element if a selector is provided
    const rootElement = rootSelector ? document.querySelector(rootSelector) : null;
    
    // Create the observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animatedClass);
            // Once animated, we don't need to observe this element anymore
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: rootElement,
        threshold,
        rootMargin
      }
    );

    // Find and observe all target elements
    const elements = document.querySelectorAll(targetSelector);
    elements.forEach((element) => {
      observer.observe(element);
    });

    // Clean up the observer when component unmounts
    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [targetSelector, animatedClass, threshold, rootMargin, rootSelector]);
};

export default useScrollAnimation; 