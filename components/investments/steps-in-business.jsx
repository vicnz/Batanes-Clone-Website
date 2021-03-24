export default function Business(props){
    return (
        <div id="step-in-business" className="container m-3">
            <div className="hero">
                <div className="hero-body has-text-centered">
                    <h2 className="is-size-3 has-text-success">{props.data.title}</h2>
                    <hr />
                </div>
            </div>
            <div className="block content">
                <ol>
                    {
                        props.data.descriptions.map((desc, idx) => <li key={idx * Math.random()}>{desc}</li>)
                    }
                </ol>
            </div>
        </div>
    )
}