import { AboutAntiguaBarbuda } from "./component/about-antigua-barbuda"
import { HeroAntiguaBarbuda } from "./component/hero-antigua-barbuda"
import { PortfolioAntiguaBarbuda } from "./component/portfolio"


export const AppAntiguaBarbuda = () => {
  return (
    <div>
      <HeroAntiguaBarbuda />
      <PortfolioAntiguaBarbuda/>
      <AboutAntiguaBarbuda/>
    </div>
  )
}