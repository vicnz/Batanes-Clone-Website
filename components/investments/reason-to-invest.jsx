export default function ReasonToInvest(props){
    return (
        <div id="reason-to-invest" className="container m-3">
            <div className="hero">
                <div className="hero-body has-text-centered">
                    <h2 className="is-size-3 has-text-success">{props.data.title}</h2>
                    <hr />
                </div>
            </div>
            <div className="block">
                <ul className="content">
                    {
                        props.data.items.map((item, idx) => {
                            return <li className="list-item block" key={idx * Math.random()}>
                                <p className="is-size-5 has-text-weight-semibold">{item.title}</p>
                                    {
                                        item.descriptions.map((desc, idx) => <p className="content" key={idx * Math.random()}>{desc}</p>)
                                    }
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}