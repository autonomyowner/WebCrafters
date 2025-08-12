import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  pageLoadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
}

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)

  useEffect(() => {
    // Only run in development mode
    if (import.meta.env.MODE !== 'development') return

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paint = performance.getEntriesByType('paint')
      
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint')
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0]
      const cls = performance.getEntriesByType('layout-shift')[0] as PerformanceEntry | undefined

      const pageLoadTime = navigation.loadEventEnd - navigation.loadEventStart
      const firstContentfulPaint = fcp ? fcp.startTime : 0
      const largestContentfulPaint = lcp ? lcp.startTime : 0
      const cumulativeLayoutShift = (cls && 'value' in cls) ? (cls as unknown as { value: number }).value : 0

      setMetrics({
        pageLoadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        cumulativeLayoutShift
      })

      // Log performance metrics
      console.log('🚀 Performance Metrics:', {
        'Page Load Time': `${pageLoadTime.toFixed(2)}ms`,
        'First Contentful Paint': `${firstContentfulPaint.toFixed(2)}ms`,
        'Largest Contentful Paint': `${largestContentfulPaint.toFixed(2)}ms`,
        'Cumulative Layout Shift': `${cumulativeLayoutShift.toFixed(3)}`
      })
    }

    // Wait for page to fully load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
      return () => window.removeEventListener('load', measurePerformance)
    }
  }, [])

  // Only show in development
  if (import.meta.env.MODE !== 'development' || !metrics) return null

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50 backdrop-blur-sm border border-white/20">
      <div className="mb-2 font-bold">Performance Metrics</div>
      <div>Load: {metrics.pageLoadTime.toFixed(0)}ms</div>
      <div>FCP: {metrics.firstContentfulPaint.toFixed(0)}ms</div>
      <div>LCP: {metrics.largestContentfulPaint.toFixed(0)}ms</div>
      <div>CLS: {metrics.cumulativeLayoutShift.toFixed(3)}</div>
    </div>
  )
}

export default PerformanceMonitor 