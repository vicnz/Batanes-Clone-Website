export default function MissionVission(props){
    return (
        <div id="mission-vision">
            <div className="container m-3">
                <div className="hero">
                    <div className="hero-body has-text-centered">
                        <h2 className="is-size-3 has-text-success">Vision &amp; Mission</h2>
                        <hr/>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <p className="content is-small has-text-grey has-text-centered is-uppercase">Vision</p>
                                <p className="content is-medium has-text-dark"><span className="icon icon-text has-text-success"><i className="ri-double-quotes-l ri-medium"></i></span>{props.vission}<span className="icon icon-text has-text-success"><i className="ri-double-quotes-r ri-medium"></i></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <p className="content is-small has-text-grey has-text-centered is-uppercase">Mission</p>
                                <p className="content is-medium has-text-dark"><span className="icon icon-text has-text-success"><i className="ri-double-quotes-l ri-medium"></i></span>{props.mission}<span className="icon icon-text has-text-success"><i className="ri-double-quotes-r ri-medium"></i></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}