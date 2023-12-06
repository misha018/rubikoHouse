import { Fragment } from "react";
import Navigation from "./Navigation";
import ImageSlider from "./ImageSlider";
import Footer from "./Footer";
import { Link } from "react-router-dom"


const Main = () => {

    const slides = [
        {url: '/public/images/aluminijum1.png', title:'alu-ograda'},
        {url: '/public/images/aluminijum6.jpg', title:'aluminijumska-ograda'},
        {url: '/public/images/aluminijum4.jpg', title:'aluminijumska-kapija'},
        {url: '/public/images/aluminijum5.jpg', title:'aluminijumske-kapije'},
        {url: '/public/images/aluminijum7.jpg', title:'aluminijumske-ograde'},
    ]

    const containerStyles = {
        width: "800px",
        height: "380px",
        left: "0",
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <Fragment>
        <Navigation />
        <main>
            <div style={containerStyles} className="">
                <div style={containerStyles} className="slider-resp">
                    <ImageSlider slides = {slides} />
                </div>
                
            </div>

            <div className="div-container">
                <h1 className="h1-rubiko">RUBIKO TEAM</h1>
                <p className="p1">Rubiko house postoji od 2005. godine i na osnovu iskustva postali smo prepoznatljivi u oblastima u kojima poslujemo. </p>
                <p className="p2">Predstavnistvo nam se nalazi u Nisu i usluge pruzamo kako u gradu, tako u regionu i udaljenim destinacijama. 
                </p>
                <p className="p2">Ukoliko se odlucite da nam ukazete poverenje uveravamo Vas da cete napraviti najbolji izbor za vasu investiciju.</p>
                <p className="p2">Za sve dodatne informacije stojimo vam na raspolaganju!</p>
                <Link to = "/kontakt" onClick={scrollToTop}><button className="home-kontakt">Kontaktirajte nas ›</button></Link>
                <div className="div-containter-2">
                    <Link to = "/" onClick={scrollToTop}><img src="/public/images/rubikoNONbg.png" alt="" className="rbklogo-main" onClick={scrollToTop}/></Link>
                </div>
            </div>


            <div className="div-container-3">
                <h1>ZAVRSNI RADOVI U GRADJEVINARSTVU</h1>
            </div>

            <div className="div-cont-4">
                <p className="p6">Ograde i kapije
                <Link to ="/galerija/aluminijumske-kapije-i-ograde/" onClick={scrollToTop}><button className="div-cont-4-dugme">Pogledaj galeriju </button></Link></p>
                <p className="alu-text">Aluminijumske ograde i kapije postaju sve popularniji izbor zbog svoje estetike, izdrzljivosti i prakticnosti. 
                    Lakoca instalacije i otpornost na koroziju cine ih idealnim za spoljne prostore, dok raznovrsni dizajni omogucavaju prilagodljivost 
                    razlicitim stilovima i arhitektonskim okruzenjima. 
                </p>
                <img src="/images/aluminijum1.png" alt="aluminijumska kapija" className="slika-main"/><img src="/images/aluminijum1.png" alt="aluminijumska kapija" className="slika-main"/>
                <button className="vidi-galeriju"><Link to = "/galerija/aluminijumske-kapije-i-ograde">Vidi galeriju ›</Link></button>
                <p className="alu-text">Aluminijumske kapije nude dodatnu sigurnost i privatnost, dok ekološka održivost materijala odražava moderni pristup odgovornom građenju. 
                    Ukratko, aluminijumske ograde i kapije spajaju funkcionalnost i estetiku, čineći ih optimalnim izborom za širok spektar prostora.
                </p>
            </div>

            <div className="div-containter-5">
                <p className="p6">Knauferski i molerski radovi <Link to = "/galerija/knauf-i-molerski-radovi/"><button className="div-cont-4-dugme">Pogledaj galeriju</button></Link></p>

                <p className="alu-text">Knauferski i molerski radovi predstavljaju ključne faze u procesu uređenja i renoviranja prostora, donoseći eleganciju, funkcionalnost i estetiku u domove i poslovne objekte. </p>
                <span className="span-knauf">Knauferski radovi</span>
                <ul>
                    <li className="lista-knauf">Gipskartonski materijali</li>
                    <p className="p7">Knauferski radovi često uključuju upotrebu gipskartonskih ploča koje se koriste za oblaganje zidova i plafona. 
                    Ovi materijali su laki, fleksibilni i omogućavaju brzu i preciznu izradu različitih oblika.</p>
                    <li className="lista-knauf">Izolacija i zvucna barijera </li>
                    <p className="p7">Gipskartonski zidovi često se koriste i za poboljšanje zvučne izolacije i stvaranje barijere između prostora. 
                    Ovo je posebno značajno u stambenim objektima ili kancelarijama gde je važno smanjiti buku.</p>
                    <li className="lista-knauf">Brza instalacija</li>
                    <p className="p7">Knauferski radovi obično pružaju brzu instalaciju, smanjujući vreme izgradnje u poređenju s tradicionalnim metodama. 
                    To je posebno korisno u komercijalnim projektima gde je brzina ključna.</p>
                </ul>
                <span className="span-knauf">Molerski radovi</span>
                <ul>
                    <li className="lista-knauf">Priprema podloge</li>
                    <p className="p7">Moleri počinju s pripremom podloge, uključujući popravke pukotina, gletovanje i brušenje zidova kako bi stvorili ravnu i glatku površinu za nanošenje boje.</p>
                    <li className="lista-knauf">Izbor boje i tehnika</li>
                    <p className="p7">Moleri pomažu u izboru pravilnih boja i završnih premaza prema zahtevima klijenta. 
                    Takođe su vešti u različitim tehnikama bojenja, poput prskanja, valjanja ili četkanja, kako bi postigli željeni efekat.</p>
                    <li className="lista-knauf">Zavrsna obrada</li>
                    <p className="p7">Molerski radovi obuhvataju završnu obradu, uključujući postavljanje tapeta, dekora, ili drugih zidnih obloga. 
                    Ova faza doprinosi estetici prostora i stvaranju željenog ambijenta.</p>
                    <li className="lista-knauf">Odrzavanje i popravka</li>
                    <p className="p7">Moleri često pružaju usluge održavanja, popravki i renoviranja kako bi očuvali svežinu boje i izgleda prostora tokom vremena.</p>
                </ul>
                <img src="/images/aluminijum1.png" alt="aluminijumska kapija" className="slika-main"/><img src="/images/aluminijum1.png" alt="aluminijumska kapija" className="slika-main"/>

            </div>

            <div className="div-container-6">
                <h1><Link to ="/upravljanje-zgradama/" onClick={scrollToTop}>Upravljanje zgradama ›</Link></h1>
            </div>
        </main>


        <Footer />
        </Fragment>
    )
}

export default Main;