import { AboutSaintLucia } from "./components/about-saintLucia"
import { HeroSantLucia } from "./components/hero-santLucia"
import { Portfolio } from "./components/portfolio"

export const AppSaintLucia = () => {
  return (
    <div>
      <HeroSantLucia />
      <Portfolio/>
      <AboutSaintLucia/>
    </div>
  )
}