export default function OTOP(props){
    return (
        <div id="otop" className="container m-3">
            <div className="hero">
                <div className="hero-body has-text-centered">
                    <h2 className="is-size-3 has-text-success">{props.data.title}</h2>
                    <hr />
                </div>
            </div>
            <div className="block content">
                <blockquote>
                    {props.data.descriptions}
                </blockquote>
                <ul>
                    {
                        props.data.items.map((item, idx) => {
                            return (
                                <li key={idx * Math.random() + item.id} className="block">
                                    <p className="is-size-5 has-text-weight-semibold">{item.title}</p>
                                    {
                                        item.description.map((desc, idx) => <p key={idx * Math.random()}>{desc}</p>)
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
                <br/>
                <h3>Products</h3>
                <blockquote>
                    Provincial Product : <span className="tag is-medium is-rounded is-success">{props.data.product_Provincial}</span>
                </blockquote>
                <hr/>
                <div className="table-container">
                    <table className="table">
                        <tbody>
                            {
                                props.data.product_Municipality.map((mun, idx) => {
                                    return (
                                        <tr key={idx * Math.random()}>
                                            <td>{mun.municipality}</td>
                                            <td>{mun.product}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}