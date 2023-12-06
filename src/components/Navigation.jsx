import { Outlet, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Navigation = () => {

    const [isShown, setIsShown] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
      let handler = (e) => {
        if(!menuRef.current.contains(e.target)) {
          setIsShown(false);
        }
      };

      document.addEventListener("mousedown", handler);

      return () => {
        document.removeEventListener("mousedown", handler);
      }
    })

    useEffect(() => {
      let handle = (e) => {
        if(!menuRef.current.contains(e.target)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handle);

      return () => {
        document.removeEventListener("mousedown", handle);
      }
    })


    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const mouseOver = () => {
      setIsShown(true);
    }
    const mouseOut = () => {
      setIsShown(false)
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [isDivVisible, setDivVisible] = useState(false);

  const handleToggleDiv = () => {
    setDivVisible(!isDivVisible);
  };

    return (
        <>
    <nav>

    
        <div className="logo">
          <Link to = "/"><img src="/public/images/rubiko-logo-removed2.png" alt="logo" className="logo-nav" onClick={scrollToTop} /></Link>
          
        </div>
        
        <button class="menu-toggle-btn" onClick={handleToggleNav}>Toggle Menu</button>
        <ul style={{marginRight:"290px"}} className={isNavOpen ? 'active' : ''}>
          
          <li className="galerija-li" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleToggleDiv}>Galerija <img src="/images/drp.png" alt="" className="dropdown-arrow"/></li>
          {isDivVisible && (
            <ul className="galerija-dropdown">
            <li className="galerija-dropdown-galerija1"><Link to = "/galerija/aluminijumske-kapije-i-ograde/" onClick={scrollToTop}>Aluminijumske kapije i ograde</Link></li>
            <li className="galerija-dropdown-galerija2"><Link to = "/galerija/knauf-i-molerski-radovi/">Knauferski i molerski radovi</Link></li>
            <li className="galerija-dropdown-galerija2"><Link to = "/galerija/ugradnja-stolarije/">Ugradnja stolarije</Link></li>
            <li className="galerija-dropdown-galerija2"><Link to = "/galerija/elektricarski-radovi/">Elektricarski radovi</Link></li>
            <li className="galerija-dropdown-galerija2"><Link to = "/galerija/vodoinstalaterski-radovi/">Vodoinstalaterski radovi</Link></li>
            <li className="galerija-dropdown-galerija2"><Link to = "/galerija/keramicarski-radovi/">Keramicarski radovi</Link></li>
          </ul>
          )}
          {isHovering && (
            <div id="galerija-div"onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <ul className="galerija-dropdown">
                <li className="galerija-dropdown-galerija1"><Link to = "/galerija/aluminijumske-kapije-i-ograde/" onClick={scrollToTop}>Aluminijumske kapije i ograde</Link></li>
                <li className="galerija-dropdown-galerija2"><Link to = "/galerija/knauf-i-molerski-radovi/">Knauferski i molerski radovi</Link></li>
                <li className="galerija-dropdown-galerija2"><Link to = "/galerija/ugradnja-stolarije/">Ugradnja stolarije</Link></li>
                <li className="galerija-dropdown-galerija2"><Link to = "/galerija/elektricarski-radovi/">Elektricarski radovi</Link></li>
                <li className="galerija-dropdown-galerija2"><Link to = "/galerija/vodoinstalaterski-radovi/">Vodoinstalaterski radovi</Link></li>
                <li className="galerija-dropdown-galerija2"><Link to = "/galerija/keramicarski-radovi/">Keramicarski radovi</Link></li>
              </ul>
            </div>
          )
          }
          <li className="upravnik-li" onMouseOver={mouseOver} onMouseOut={mouseOut}><Link to = "/upravljanje-zgradama/">Profesionalni upravnik <img src="/images/drp.png" alt="" className="dropdown-arrow"/></Link></li>
          {
            isShown && (
              <div className="upravnik-div" onMouseOver={mouseOver} onMouseOut={mouseOut}>
                <ul className="upravnik-dropdown">
                  <li className="upravnik-dropdown-upravnik1"><Link to = "/upravljanje-zgradama/" onClick={scrollToTop}>Upravljanje zgradama</Link></li>
                  <li className="upravnik-dropdown-upravnik2"><Link to = "/odrzavanje-zgrade/" onClick={scrollToTop}>Odrzavanje zgrade</Link></li>  
                  <li className="upravnik-dropdown-upravnik2"><Link to = "/ciscenje-zgrade/">Ciscenje zgrade</Link></li>
                </ul>
              </div>
            )
          }
          <li className="zaposljavanje-li"><Link to ="/zaposljavanje">Zaposljavanje</Link></li>
          <li className="kontakt-li"><Link to = "/kontakt" onClick={scrollToTop}>Kontakt</Link></li>
          
        </ul>

      </nav>

      

      <Outlet />
      </>
    )
}

export default Navigation;