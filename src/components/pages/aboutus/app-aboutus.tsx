import { HeroAboutus } from "./components/hero-about"
import { MissionAndVision } from "./components/missionAndvision"
import { OurTeam } from "./components/our-team"
import { TestimonialCarousel } from "./components/testamonial"
import { CompanyTimeline } from "./components/time-line"
import { WhatWeDo } from "./components/whatWeDo"

export const AboutUsApp=()=>{
    return(
        <>
        <HeroAboutus/>
        <MissionAndVision/>
        {/* <WhatWeDo/> */}
        <OurTeam/>
        <CompanyTimeline/>
        <TestimonialCarousel/>
        </>
    )
}