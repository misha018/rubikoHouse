import { Fragment } from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer";

const OdrzavanjeZgrade = () => {
    return(
        <Fragment>
            <Navigation />
                <div className="div-odrzavanje" style={{marginLeft: "360px", marginTop: "140px", width:"55%", marginBottom:"40px"}}>
                <h1 style={{ marginLeft: "300px", fontSize:"24px", textDecoration:"underline", paddingBottom:"20px"}}>Odrzavanje zgrade</h1>
                <span style={{fontSize: "14px", fontWeight:"bold"}}>Aktivnosti na odrzavanju zgrade vrse se kroz:</span>
                <ul style={{listStyle:"inside", fontSize:"14px", color:"rgb(0, 0, 0)"}}>
                    <li>hitne intervencije</li>
                    <li>tekuce odrzavanje i </li>
                    <li>investiciono odrzavanje</li>
                </ul>
                <span style={{fontSize:"14px", fontWeight:"bolder"}}>Hitne intervencije obuhvataju iznenadne situacije i probleme koji zahtevaju brzu reakciju kako bi se sprecila ozbiljnija ostecenja ili opasnosti.</span>
                <p style={{fontSize:"14px"}}>Npr. curenje vode, kvarovi na elektricnim instalacijama, sigurnosni incidenti i sl.</p>
                <span style={{fontSize: "14px", color: "black", fontWeight:"bold"}}>Tekuce odrzavanje obuhvata:</span>
                <ul style={{fontSize:"14px", color:"gray"}}>
                    <li>Knaufersko-molerski radovi</li>
                    <li>Zamena stolarije</li>
                    <li>Zamena, popravka i izrada stepenisnog gelendera</li>
                    <li>Keramicarski radovi</li>
                    <li>Odrzavanje i popravka elektricnih instalacija</li>
                    <li>Ponovno stavljanje lifta u pogon</li>
                    <li>Popravku ili zamenu vodovodne ili kanalizacione cevi</li>
                    
                </ul>
                <span style={{fontSize:"14px", fontWeight:"bolder"}}>Investiciono odrzavanje se odnosi na dugorocne planirane aktivnosti koje se sprovode kako bi se poboljsala ili obnovila struktura zgrade, povecala
                    energestka efikasnost ili poboljsala njena ukupna vrednost.
                </span>
                
                </div>
            <Footer />
        </Fragment>
    )
}

export default OdrzavanjeZgrade;