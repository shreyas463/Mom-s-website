import Nav from './components/Nav'
import Hero from './components/Hero'
import Trust from './components/Trust'
import About from './components/About'
import Expertise from './components/Expertise'
import Credentials from './components/Credentials'
import Reviews from './components/Reviews'
import Videos from './components/Videos'
import Locations from './components/Locations'
import Booking from './components/Booking'
import Footer from './components/Footer'
import StructuredData from './components/StructuredData'

export default function App() {
  return (
    <>
      <StructuredData />
      <Nav />
      <main id="main">
        <Hero />
        <Trust />
        <About />
        <Expertise />
        <Credentials />
        <Reviews />
        <Videos />
        <Locations />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
