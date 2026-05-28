import { RevealInit } from '@/components/RevealInit'
import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { CVDemo } from '@/components/sections/CVDemo'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Features } from '@/components/sections/Features'
import { Plans } from '@/components/sections/Plans'
import { Courses } from '@/components/sections/Courses'
import { RecruiterForm } from '@/components/sections/RecruiterForm'
import { FAQ } from '@/components/sections/FAQ'
import { CTAFinal } from '@/components/sections/CTAFinal'
import { Footer } from '@/components/sections/Footer'
import { CookieBanner } from '@/components/sections/CookieBanner'

export default function Home() {
  return (
    <>
      <RevealInit />
      <Navbar />
      <main>
        <Hero />
        <CVDemo />
        <HowItWorks />
        <Features />
        <Plans />
        <Courses />
        <RecruiterForm />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
