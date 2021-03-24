import {useState} from 'react'
import Link from 'next/link'
import Alert from '../components/alert'

export default function Navbar(props){
    const [showedNav, showNav] = useState(false);
    const [showAlert, toggleAlert] = useState(false)

    const toggleNav = () => {
        showNav(!showedNav);
    }
    const showHideAlert = () => {
        toggleAlert(true)
    }

    return (
        <>

        {
            (showAlert) ? 
            <Alert type="danger" title="Unavailable" message="Page is still under development" close={() => toggleAlert(false)}/>
            : ''
        }

        <nav className="navbar is-fixed-top">
            {/*has-navbar-fixed*/}
            <div className="navbar-brand">
                <a href="/" className="navbar-item is-link-reset"><div className="title has-text-success">Batanes</div></a>
                <a role="button" className={`navbar-burger ${showedNav ? 'is-active' : ''}`} data-target="#navbar-menu" onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
            <div className={`navbar-menu ${showedNav ? 'is-active' : ''}`} id="navbar-menu">
                <div className="navbar-start">
                    <Link href="/"><a href="#" className="navbar-item">HOME</a></Link>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a href="#" className="navbar-link is-arrowless">ABOUT BATANES</a>
                        <div className="navbar-dropdown">
                            <Link href="/about-batanes"><a href="/about-batanes" className="navbar-item">ABOUT BATANES</a></Link>
                            <hr className="navbar-divider"/>
                            <Link href="/about-batanes/municipal/basco"><a href="/about-batanes/municipal/basco" className="navbar-item">BASCO</a></Link>
                            <Link href="/about-batanes/municipal/itbayat"><a href="/about-batanes/municipal/itbayat" className="navbar-item">ITBAYAT</a></Link>
                            <Link href="/about-batanes/municipal/ivana"><a href="/about-batanes/municipal/ivana" className="navbar-item">IVANA</a></Link>
                            <Link href="/about-batanes/municipal/mahatao"><a href="/about-batanes/municipal/mahatao" className="navbar-item">MAHATAO</a></Link>
                            <Link href="/about-batanes/municipal/sabtang"><a href="/about-batanes/municipal/sabtang" className="navbar-item">SABTANG</a></Link>
                            <Link href="/about-batanes/municipal/uyugan"><a href="/about-batanes/municipal/uyugan" className="navbar-item">UYUGAN</a></Link>
                        </div>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a href="#" className="navbar-link is-arrowless">INVESTMENTS</a>
                        <div className="navbar-dropdown">
                            <Link href="/investments#reason-to-invest"><a href="/investments#reason-to-invest" className="navbar-item">REASON TO INVEST</a></Link>
                            <Link href="/investments#investment-areas"><a href="/investments#investment-areas" className="navbar-item">PRIORITY INVESTMENT AREAS</a></Link>
                            <Link href="/investments#investment-projects"><a href="/investments#investment-projects" className="navbar-item">INVESTMENT PROJECTS</a></Link>
                            <Link href="/investments#otop"><a href="/investments#otop" className="navbar-item">ONE TOWN ONE PRODUCT</a></Link>
                            <hr className="navbar-divider"/>
                            <Link href="/investments#step-in-business"><a href="/investments#step-in-business" className="navbar-item">STEPS IN DOING BUSINESS</a></Link>
                        </div>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a href="#" className="navbar-link is-arrowless">TOURISM</a>
                        <div className="navbar-dropdown">
                            <Link href="/tourism/tourist-attractions"><a href="/tourism/tourist-attractions" className="navbar-item">TOURIST ATTRACTIONS</a></Link>
                            <Link href="/tourism/accomodation-facilities"><a href="/tourism/accomodation-facilities" className="navbar-item">ACCOMODATION FACILITIES</a></Link>
                            <Link href="/tourism/travel-and-tour"><a href="/tourism/travel-and-tour" className="navbar-item">TOUR &amp; TRAVEL AGENCIES</a></Link>
                            <Link href="/tourism/ivatan-culture-and-practices"><a href="/tourism/ivatan-culture-and-practices#culture-practices" className="navbar-item">IVATAN CULTURE AND PRACTICES</a></Link>
                            <Link href="/tourism/ivatan-culture-and-practices#going-around"><a href="/tourism/ivatan-culture-and-practices#going-around" className="navbar-item">GOING AROUND THE ISLAND</a></Link>
                            <hr className="navbar-divider"/>
                            <a className="navbar-item" onClick={() => showHideAlert()}>GALLERY</a>
                        </div>
                    </div>
                    <Link href="/about"><a href="/about" className="navbar-item">ABOUT</a></Link>
                </div>
            </div>
        </nav>

        </>
    )
}