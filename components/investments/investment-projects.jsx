export default function ReasonToInvest(props){
    return (
        <div id="investment-projects" className="container m-3">
            <div className="hero">
                <div className="hero-body has-text-centered">
                    <h2 className="is-size-3 has-text-success">{props.data.title}</h2>
                    <hr />
                </div>
            </div>
            <div className="block content">
                <blockquote>
                    {
                        props.data.descriptions[0]
                    }
                </blockquote>
                
                <br/>

                <ul>
                    {
                        props.data.items.map((item, idx) => {
                            return <li key={idx * Math.random()} className="block">{item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}