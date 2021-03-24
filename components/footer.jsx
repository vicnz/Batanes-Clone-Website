import {useState} from 'react'
import Alert from '../components/alert'

export default function Footer(props){
    const[alertState, toggleAlert] = useState(false)
    const[link, setLink] = useState(false)

    const showHideAlert = () => {
        toggleAlert(true)
    }

    return (
        <>
        {
            (alertState) ?
                <Alert type="danger" title="Unavailable" message="Page is still under development" close={() => toggleAlert(false)}/>:
            ''
        }
        {
            (link) ?
                <Alert type="warning" title="Not Implemented" message="Link is not yet implemented" close={() => setLink(false)}/>:
            ''
        }
        <footer className="footer">
            <div className="container">
                <div className="content">
                    <h3 className="is-size-5">Copyright (&copy;) Content</h3>
                </div>
                <hr/>
                <div className="content">
                    <p className="is-size-6">Links:</p>
                    <div className="level is-mobile">
                        <div className="level-left">
                            <div className="level-item"><a onClick={() => setLink(true)}><span className="icon icon-text"><i className="ri-facebook-circle-line ri-2x"></i></span></a></div>
                            <div className="level-item"><a onClick={() => setLink(true)}><span className="icon icon-text"><i className="ri-twitter-line ri-2x"></i></span></a></div>
                            <div className="level-item"><a onClick={() => setLink(true)}><span className="icon icon-text"><i className="ri-instagram-line ri-2x"></i></span></a></div>
                            <div className="level-item"><a onClick={() => setLink(true)}><span className="icon icon-text"><i className="ri-linkedin-box-line ri-2x"></i></span></a></div>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="content">
                            <div className="menu">
                                <div className="menu-list">
                                    <a onClick={() => showHideAlert()} className="level-item">The Governor's Ulat sa Bayan</a>
                                    <a onClick={() => showHideAlert()} className="level-item">Bid Opportunities</a>
                                    <a onClick={() => showHideAlert()} className="level-item">Full Disclosure Policy Report</a>
                                    <a onClick={() => showHideAlert()} className="level-item">Annual Report 2014</a>
                                    <a onClick={() => showHideAlert()} className="level-item">Citizen's Character</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="menu">
                            <div className="menu-list">
                                <div className="menu-list">
                                   <a onClick={() => showHideAlert()} className="level-item">PGO</a>
                                   <a onClick={() => showHideAlert()} className="level-item">PAgriO</a>
                                   <a onClick={() => showHideAlert()} className="level-item">PVO</a>
                                   <a onClick={() => showHideAlert()} className="level-item">PHO &amp; IDH</a>
                                   <a onClick={() => showHideAlert()} className="level-item">PENRO</a>
                                   <a onClick={() => showHideAlert()} className="level-item">PAssO</a>
                                   <a onClick={() => showHideAlert()} className="level-item">PSWDO</a>
                                   <a onClick={() => showHideAlert()} className="level-item">PEO</a>
                                   <a onClick={() => showHideAlert()} className="level-item">PTO</a>
                                   <a onClick={() => showHideAlert()} className="level-item">SPO</a>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="content block">
                    <p className="is-small has-text-centered">Designed By <span className="icon icon-text"><i className="ri-user-smile-line"></i></span> ne0nz0ne</p>
                </div>
            </div>
        </footer>
        </>
    )
}