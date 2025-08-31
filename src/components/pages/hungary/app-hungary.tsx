import {  AboutHungary } from "./component/about-hungary"
import {  HeroHungary } from "./component/hero-hungary"
import { PortfolioHungary } from "./component/portfolio"


export const AppHungary = () => {
  return (
    <div>
      <HeroHungary />
      <PortfolioHungary/>
      <AboutHungary/>
    </div>
  )
}