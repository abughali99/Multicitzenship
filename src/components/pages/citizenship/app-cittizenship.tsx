import { Citizenship } from "../home/components/citzenships";
import { CBICitizenship } from "./components/cbi-citizenship";
import { HeroCitizenship } from "./components/hero-citizenshp";

export const AppCitizenship = () => {
    return (
        <>
        <HeroCitizenship/>
        <CBICitizenship/>
        <Citizenship/>
        </>
    );
    }