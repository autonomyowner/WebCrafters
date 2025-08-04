import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Offers from './pages/Offers'
import SpecialOffer from './pages/SpecialOffer'
import OfferCard from './components/OfferCard'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/special-offer" element={<SpecialOffer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offer" element={<OfferCard />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App 