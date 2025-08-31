import {  AboutGreece } from "./component/about-greece"
import {  HeroGreece } from "./component/hero-greece"
import { PortfolioGreece } from "./component/portfolio"


export const AppGreece = () => {
  return (
    <div>
      <HeroGreece />
      <PortfolioGreece/>
      <AboutGreece/>
    </div>
  )
}