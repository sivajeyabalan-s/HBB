import { useEffect } from 'react'
import Nav from '../../components/Nav/Nav'
import PageHead from '../../components/PageHead/PageHead'
import BanquetHero from '../../components/BanquetHero/BanquetHero'
import Halls from '../../components/Halls/Halls'
import Inclusions from '../../components/Inclusions/Inclusions'
import Packages from '../../components/Packages/Packages'
import BanquetForm from '../../components/BanquetForm/BanquetForm'
import FAQ from '../../components/FAQ/FAQ'
import Footer from '../../components/Footer/Footer'
import { useReveal } from '../../hooks/useReveal'

export default function Banquet() {
  useReveal()

  useEffect(() => {
    document.title = 'The Banquet — Hyderabad Biryani & Banquet'
  }, [])

  return (
    <>
      <Nav solid />
      <PageHead
        crumbLabel="The Banquet"
        crumbTo="/"
        title="The <em>Banquet</em>"
        lede="Two ornate halls, an in-house décor atelier, and a brigade of fifty in the kitchen — ready to host your day in the colours of the Nizami court."
        ctas={[
          { label: 'View the Halls', href: '#halls', variant: 'ghost' },
          { label: 'Enquire Now', href: '#enquire', variant: 'gold' },
        ]}
      />
      <BanquetHero />
      <Halls />
      <Inclusions />
      <Packages />
      <BanquetForm />
      <FAQ />
      <Footer contactLabel="Banquet Enquiries" contactInfo="+91 98765 43210&#10;banquet@hyderabadbiryani.in" />
    </>
  )
}
