import RenderList from '../../components/investments/render-list'

export default function InvestmentArea(props){
    return (
        <div id="investment-areas" className="container m-3">
            <div className="hero">
                <div className="hero-body has-text-centered">
                    <h2 className="is-size-3 has-text-success">{props.data.title}</h2>
                    <hr />
                </div>
            </div>
            <div className="content">
                {
                    props.data.description.map((item, idx) => <p key={idx * Math.random()} className="content">{item}</p>)
                }
                <br/>
                <ol>
                    {
                        props.data.items.map((item, idx) => {
                            return (
                                <li key={idx * Math.random()}>
                                    <span className="has-text-success is-size-6">{item.title}</span>
                                    <RenderList data={item.description}/>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    )
}
