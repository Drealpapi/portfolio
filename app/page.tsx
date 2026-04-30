import Preloader from '@/components/preloader'
import CustomCursor from '@/components/custom-cursor'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
