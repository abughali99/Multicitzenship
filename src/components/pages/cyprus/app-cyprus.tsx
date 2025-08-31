import {  AboutCyprus } from "./component/about-cyprus"
import {  HeroCyprus } from "./component/hero-cyprus"
import { PortfolioCyprus } from "./component/portfolio"


export const AppCyprus = () => {
  return (
    <div>
      <HeroCyprus />
      <PortfolioCyprus/>
      <AboutCyprus/>
    </div>
  )
}