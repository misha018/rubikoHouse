
import { Fragment } from "react"
import Navigation from '../components/Navigation.jsx';
import Footer from "../components/Footer.jsx";
import { useState } from "react"


const Kontakt = () => {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        poruka: "",
    })

    const handleFirstName = (e) => {
        setValues({...values, firstName: e.target.value})
    }

    const handleLastName = (e) => {
        setValues({...values, lastName: e.target.value})
    }

    const handleEmail = (e) => {
        setValues({...values, email: e.target.value})
    }

    const handleSubject = (e) => {
        setValues({...values, subject: e.target.value})
    }

    const handleMessage = (e) => {
        setValues({...values, poruka: e.target.value})
    }

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(values.firstName && values.lastName && values.email && values.subject && values.poruka) {
            setValid(true);
        }
        setSubmitted(true);
    }

    const [valid, setValid] = useState(false);

    return (
        <Fragment>
            <Navigation />
            <div className="div-kontakt">
                <h2 className="kontakt">Kontaktirajte nas</h2>
                <div className="kontakt-form-div">
                <form className="kontakt-form" onSubmit={handleSubmit}>
                    {submitted && valid ? <div className="uspesno-poslato">Uspesno poslato!</div> : null}
                    <input type="text" placeholder="Ime" name="firstName" className="form-field" value={values.firstName} onChange={handleFirstName}/>
                    {submitted && !values.firstName ? <span className="span-error">Molimo Vas unesite ime!</span> : null}
                    <input type="text" name="lastName" placeholder="Prezime" className="form-field" value={values.lastName} onChange={handleLastName}/>
                    {submitted && !values.lastName ? <span className="span-error">Molimo Vas unesite ime!</span> : null}
                    <input type="text" name="email" placeholder="Email" value={values.email} onChange={handleEmail}/>
                    {submitted && !values.email ? <span className="span-error">Molimo Vas unesite ime!</span> : null}
                    <input type="text" name="subject" placeholder="Naslov" value={values.subject} onChange={handleSubject}/>
                    {submitted && !values.subject ? <span className="span-error">Molimo Vas unesite ime!</span> : null}
                    <span className="poruka-span">Poruka:</span>
                    <input type="text" name="poruka" placeholder="" className="poruka" value={values.poruka} onChange={handleMessage}/>
                    <button type="submit" className="dugme-posalji">Posalji</button>

                </form>

                <div className="kontakt-form-div-2">
                    <span className="span-telefon">Telefon:</span>
                    <p>Za aluminijumske ograde i kapije: </p>
                    <span> » 064/63 90 746 « </span>
                    <p>Zavrsni radovi u gradjevinarstvu</p>
                    <span> 064/ 63 91 231</span>
                    <p>Upravljanje stambenim zajednicama: </p>                    
                    <span> » 064/63 91 231 « </span>
                    <p>064/ 63 90 713</p>
                    <p className="p-email">EMAIL</p>
                    <span style={{ fontSize: "18px", paddingTop: "10px"}}>rubikohouse@gmail.com</span>
                    <p className="p-email">Radno vreme:</p>
                    <span>Radnim danom 09h-17h</span>
                    <p>Subotom od 10h-14h</p>
                </div>
                </div>
                
            </div>
            <Footer />
        </Fragment>
    )
}

export default Kontakt;