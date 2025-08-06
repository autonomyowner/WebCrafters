import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import Layout from './components/Layout/Layout'
import OfferCard from './components/OfferCard'
import PerformanceMonitor from './components/PerformanceMonitor'
import { preloadCriticalResources } from './lib/utils'
import './App.css'

// Lazy load all page components
const Home = lazy(() => import('./pages/Home'))
const Work = lazy(() => import('./pages/Work'))
const Contact = lazy(() => import('./pages/Contact'))
const Offers = lazy(() => import('./pages/Offers'))
const Templates = lazy(() => import('./pages/Templates'))
const SpecialOffer = lazy(() => import('./pages/SpecialOffer'))

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
      <div className="mt-4 text-white text-center">Loading...</div>
    </div>
  </div>
)

function App() {
  useEffect(() => {
    // Preload critical resources for better performance
    preloadCriticalResources()
  }, [])

  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/special-offer" element={<SpecialOffer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/offer" element={<OfferCard />} />
          </Routes>
        </Suspense>
      </Layout>
      <PerformanceMonitor />
    </Router>
  )
}

export default App 