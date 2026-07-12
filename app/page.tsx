import { RevealInit } from '@/components/RevealInit'
import { CookieBanner } from '@/components/sections/CookieBanner'
import { NavbarV2 } from '@/components/v2/Navbar'
import { HeroV2 } from '@/components/v2/Hero'
import { VillainV2 } from '@/components/v2/Villain'
import { ValueV2 } from '@/components/v2/Value'
import { ImpactV2 } from '@/components/v2/Impact'
import { JourneyV2 } from '@/components/v2/Journey'
import { FeaturesV2 } from '@/components/v2/Features'
import { WellingtonV2 } from '@/components/v2/Wellington'
import { PlansV2 } from '@/components/v2/Plans'
import { FAQV2 } from '@/components/v2/FAQ'
import { CTAFinalV2, FooterV2, RecStrip } from '@/components/v2/Close'
import { RevealBlurInit } from '@/components/v2/parts'

export default function Home() {
  return (
    <>
      <RevealInit />
      <RevealBlurInit />
      <NavbarV2 />
      <main>
        <HeroV2 />
        <VillainV2 />
        <ValueV2 />
        <ImpactV2 />
        <JourneyV2 />
        <FeaturesV2 />
        <WellingtonV2 />
        <PlansV2 />
        <FAQV2 />
        <RecStrip />
        <CTAFinalV2 />
      </main>
      <FooterV2 />
      <CookieBanner />
    </>
  )
}
