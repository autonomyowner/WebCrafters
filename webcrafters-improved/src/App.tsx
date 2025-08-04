import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Colors from './pages/Colors'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/colors" element={<Colors />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App 