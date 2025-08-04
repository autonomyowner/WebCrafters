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