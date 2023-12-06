import { Fragment } from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer";


const UpravljanjeZgradama = () => {
    return(
        <Fragment>
            <Navigation />
            <div className="div-upravljanje" style={{marginLeft: "360px"}}>
                <h1 style={{ marginLeft: "300px", fontSize:"24px", textDecoration:"underline", paddingBottom:"20px"}}>Profesionalno upravljanje stambenim zajednicama</h1>
                <span style={{fontSize: "14px", color: "gray"}}>Pod upravljanjem zgradama, podrazumevaju se svi organizacioni poslovi i aktivnosti koje obavlja izabrano ili postavljeno lice u svrhu rukovodjenja zgradom.</span>
                <p style={{fontSize:"14px", fontWeight:"bold", color:"gray"}}>Poslovi upravnika zgrade:</p>
                <ul className="ul-upravljanje"><span style={{fontWeight:"bolder", color:"rgb(20, 30, 50)"}}>Upravljanje finansijama</span>
                    <li>Upravljanje budzetom za odrzavanje zgrade, popravke i druge troskove</li>
                </ul>
                <ul className="ul-upravljanje"><span style={{fontWeight:"bolder", color:"rgb(20, 30, 50)"}}>Odrzavanje zgrade</span>
                    <li>Organizacija redovnog odrzavanja zgrade</li>
                    <li>Koordinacija popravki i radova odrzavanja</li>
                    <li>Pracenje stanja infrastrukture, kao sto su liftovi, vodovod i elektricni sistemi</li>
                </ul>
                <ul className="ul-upravljanje"><span style={{fontWeight:"bolder", color:"rgb(20, 30, 50)"}}>Komunikacija sa stanarima</span>
                    <li>Resavanje prituzbi i problema stanara.</li>
                    <li>Organizacija sastanaka s vlasnicima stanova.</li>
                </ul>
                <ul className="ul-upravljanje"><span style={{fontWeight:"bolder", color:"rgb(20, 30, 50)"}}>Angazovanje izvodjaca radova</span>
                    <li>Pronalazenje i angazovanje pouzdanih izvodjaca radova.</li>
                    <li>Pracenje izvodjenja radova i osiguranje da su obavljeni u skladu s normama</li>
                </ul>
                <ul className="ul-upravljanje"><span style={{fontWeight:"bolder", color:"rgb(20, 30, 50)"}}>Pravne obaveze</span>
                    <li>Poznavanje pravnih propisa i zakona koji se odnose na upravljanje zgradom</li>
                </ul>
                <ul className="ul-upravljanje"><span style={{fontWeight:"bolder", color:"rgb(20, 30, 50)"}}>Sigurnost</span>
                    <li>Pracenje sigurnosnih aspekata zgrade, ukljucujuci sisteme zastite od pozara.</li>
                </ul>
                <ul className="ul-upravljanje"><span style={{fontWeight:"bolder", color:"rgb(20, 30, 50)"}}>Administrativni poslovi</span>
                    <li>Vodjenje evidencije o svim transakcijama i dokumentima vezanim za upravljanje zgradom</li>
                    <li>Priprema izvestaja za vlasnike stanova.</li>
                </ul>
                <ul className="ul-upravljanje"><span style={{fontWeight:"bolder", color:"rgb(20, 30, 50)"}}>Rad sa skupstinom stanara</span>
                    <li>Saradnja sa skupstinom stanara i pomoc u donosenju odluka koje uticu na zgradu</li>
                </ul>

                

            </div>
            <Footer />
        </Fragment>
    )
}

export default UpravljanjeZgradama;