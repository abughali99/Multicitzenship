import { AboutUAE } from "./component/about-uae"
import { HeroUAE } from "./component/hero-uae"
import { PortfolioUAE } from "./component/portfolio"



export const AppUAE = () => {
  return (
    <div>
      <HeroUAE />
      <PortfolioUAE/>
      <AboutUAE/>
    </div>
  )
}