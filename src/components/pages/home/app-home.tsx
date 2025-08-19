import  { Loading } from "@/components/layout/welcome"
import { AboutUs } from "./components/about"
import { Heroection } from "./components/her"
import { Services } from "./components/services"
import { Citizenship } from "./components/citzenships"
import { Residency } from "./components/residency"
import { ChooseUs } from "./components/chooseus"
import CallbackForm from "./components/request-form"

export const HomePage =()=>{
    return(
        <>
        {/* <Loading/> */}
        <Heroection/>
        <Services/>
        <AboutUs/>
        <CallbackForm/>
        <Citizenship/>
        <Residency/>
        <ChooseUs/>
        </>
    )
}