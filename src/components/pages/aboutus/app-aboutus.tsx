import { HeroAboutus } from "./components/hero-about"
import { MissionAndVision } from "./components/missionAndvision"
import { OurTeam } from "./components/our-team"
import { WhatWeDo } from "./components/whatWeDo"

export const AboutUsApp=()=>{
    return(
        <>
        <HeroAboutus/>
        <MissionAndVision/>
        <WhatWeDo/>
        <OurTeam/>
        </>
    )
}