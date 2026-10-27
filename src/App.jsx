import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="relative min-h-screen bg-white text-stone-900 selection:bg-black selection:text-white">
      {/* Floating Pill Navbar (Font: Inter) */}
      <Navbar />

      {/* Main Hero Showcase */}
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
