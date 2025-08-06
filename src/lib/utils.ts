import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Modern scroll animation utility
export const createScrollAnimation = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in')
        ;(entry.target as HTMLElement).style.opacity = '1'
        ;(entry.target as HTMLElement).style.transform = 'translateY(0)'
      }
    })
  }, observerOptions)

  return observer
}

// Utility to add scroll animations to elements
export const addScrollAnimations = () => {
  const observer = createScrollAnimation()
  
  const elements = document.querySelectorAll('[data-scroll-animate]')
  elements.forEach((el) => {
    ;(el as HTMLElement).style.opacity = '0'
    ;(el as HTMLElement).style.transform = 'translateY(30px)'
    ;(el as HTMLElement).style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
    observer.observe(el)
  })

  return observer
} 

// Lazy loading utilities
export const lazyLoadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

export const lazyLoadVideo = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.onloadeddata = () => resolve();
    video.onerror = () => reject(new Error(`Failed to load video: ${src}`));
    video.src = src;
  });
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  return new IntersectionObserver(callback, {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  });
};

// Performance optimization utilities
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Image optimization
export const optimizeImageUrl = (url: string, width: number, height: number): string => {
  if (url.includes('unsplash.com')) {
    return `${url}?w=${width}&h=${height}&fit=crop&auto=format&q=80`;
  }
  return url;
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalImages = ['/background.avif', '/55.png'];
  const criticalVideos = ['/bg gif.mp4'];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
  
  criticalVideos.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = src;
    document.head.appendChild(link);
  });
}; 