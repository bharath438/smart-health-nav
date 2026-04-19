import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import QuickActions from './components/QuickActions'
import WellnessTips from './components/WellnessTips'
import HumanMode from './components/HumanMode'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <QuickActions />
      <WellnessTips />
      <HumanMode />
      <Footer />
    </div>
  )
}

export default App
