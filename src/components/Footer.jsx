import { useEffect } from "react";
import { Link } from "react-router-dom"


const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };

    const scrollToTeam = () => {
        window.scrollTo({ top: 700, left: 0, behavior: 'smooth'});
    };
    

    return (
        <footer className="footer">
            <div className="div-footer-glavni">
            <div className="divfooter">
                <Link to = "/" className="link-logo"><img src="/public/images/rubiko-logo-removed2.png" alt="" className="footer-img" onClick={scrollToTop}/></Link>
                <span className="span-footer">© 2023. Sva prava zadrzana. </span>
                <p className="p-footer" style={{color: "blue"}}>Sadržaj sajta je u vlasništvu kompanije Rubiko house. Zabranjeno je njegovo preuzimanje bez dozvole.</p>
            </div>

            <div className="divfooter-2">
                <ul className="footer-ul-1">
                    <li className="footer-elements"><Link to = "/" onClick={scrollToTeam}>RUBIKO TEAM ›</Link></li>
                    <li className="footer-elements"><Link to = "/galerija/aluminijumske-kapije-i-ograde/" onClick={scrollToTop}>GALERIJA ›</Link></li>
                    <li className="footer-elements"><Link to = "/upravljanje-zgradama/" onClick={scrollToTop}>PROFESIONALNO UPRAVLJANJE STAMBENIM ZAJEDNICAMA ›</Link></li>
                    <li className="footer-elements">PRIDRUZITE NAM SE ›</li>
                </ul>
            </div>

            <div className="divfooter-3">
                <ul className="footer-ul-2">
                    <li className="footer-elements-2"><Link to = "/kontakt" onClick={scrollToTop}>KONTAKT ›</Link></li>
                    <li className="footer-elements-2"><Link to = "https://www.facebook.com/profile.php?id=61553742071830"><img src="/images/facebook.png" alt="" className="fb-footer"/></Link><Link to = "https://www.instagram.com/rubiko_house/">
                        <img src="/images/instagrampng.png" alt="" className="ig-footer"/></Link>
                        <Link to ="mailto:rubikohouse@gmail.com"><img src="/public/images/footerMAIL.png" alt="mailfoot" className="mail-footer"/></Link></li>
                        
                        <li className="footer-elements-2"><Link to = "tel:+3810646391231" style={{color: "blue"}}>064/63 91 231 </Link></li>
                        <li className="footer-elements-2"><Link to = "tel:+3810646390746" style={{color: "blue"}}>064/63 90 746 </Link></li>

                    <li className="footer-elements-3">Radno vreme: </li>
                    <li className="footer-elements-4">PON-PET od 09h-17h </li>
                    <li className="footer-elements-4">SUB 09h-14h</li>
                </ul>
                <span className="mihailo"><Link to = "https://www.instagram.com/ziilee__" style={{color: "aquamarine"}}>made by mihailo™</Link></span>
            </div>
            </div>

            <div className="madeBY">
                <p className="MADEBY-P">made by <Link to = "https://www.instagram.com/ziilee__" style={{color: "aquamarine"}}>mihailo™</Link></p>
            </div>
            
        </footer>
    )


}

export default Footer;