import { AboutDominica } from "./component/about-dominica"
import { HeroDominica } from "./component/hero-dominica"
import { PortfolioKitts } from "./component/portfolio"


export const AppDominica = () => {
  return (
    <div>
      <HeroDominica />
      <PortfolioKitts/>
      <AboutDominica/>
    </div>
  )
}