import { Citizenship } from "../home/components/citzenships";
import { RBIResidency } from "./components/rbi-residency";
import { HeroResidency } from "./components/hero-residency";
import { Residency } from "../home/components/residency";

export const AppResidency  = () => {
    return (
        <>
        <HeroResidency />
        <RBIResidency/>
        <Residency/>
        </>
    );
    }