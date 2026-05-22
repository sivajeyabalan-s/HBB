import { useEffect } from 'react'
import Nav from '../../components/Nav/Nav'
import DotIndex from '../../components/DotIndex/DotIndex'
import Hero from '../../components/Hero/Hero'
import Heritage from '../../components/Heritage/Heritage'
import Cuisine from '../../components/Cuisine/Cuisine'
import Services from '../../components/Services/Services'
import Gallery from '../../components/Gallery/Gallery'
import Invitation from '../../components/Invitation/Invitation'
import Voices from '../../components/Voices/Voices'
import ReservationForm from '../../components/ReservationForm/ReservationForm'
import Footer from '../../components/Footer/Footer'
import { useReveal } from '../../hooks/useReveal'

export default function Home() {
  useReveal()

  useEffect(() => {
    document.title = 'Hyderabad Biryani & Banquet — Where Every Meal is a Royal Feast'
  }, [])

  return (
    <>
      <Nav />
      <DotIndex />
      <main>
        <Hero />
        <Heritage />
        <Cuisine />
        <Services />
        <Gallery />
        <Invitation />
        <Voices />
        <ReservationForm />
      </main>
      <Footer showTop />
    </>
  )
}
