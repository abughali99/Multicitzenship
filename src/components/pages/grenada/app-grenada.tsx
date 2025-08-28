import {  AboutGrenada } from "./component/about-grenada"
import {  HeroGrenada } from "./component/hero-grenada"
import { PortGrenada } from "./component/portfolio"



export const AppGrenada = () => {
  return (
    <div>
      <HeroGrenada />
      <PortGrenada/>
      <AboutGrenada/>
    </div>
  )
}