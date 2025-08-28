import { AboutSaintKitts } from "./component/about-saintKitts"
import { HeroSantKitts } from "./component/hero-santKitts"
import { PortfolioKitts } from "./component/portfolio"


export const AppSaintKitts = () => {
  return (
    <div>
      <HeroSantKitts />
      <PortfolioKitts/>
      <AboutSaintKitts/>
    </div>
  )
}