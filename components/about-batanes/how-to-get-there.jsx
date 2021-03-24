export default function HowToGet(props){
    function dangerousHTML(str){
        return {__html: str}
    }
    return (
        <div id="how-to-get">
            <div className="container m-3">
                <div className="hero">
                    <div className="hero-body has-text-centered">
                        <h2 className="is-size-3 has-text-success">How To Get There</h2>
                        <hr />
                    </div>
                </div>
                <p className="content">
                    {props.data[0]}
                </p>
                <div className="table-container">
                    <table className="table is-fullwidth is-striped is-bordered">
                        <thead>
                            <tr className="has-background-light">
                                <th>Service</th>
                                <th>Schedule</th>
                                <th>Destination</th>
                                <th>Flight Time (hrs)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.data[1].map((item, idx) => {
                                    return (
                                        <tr key={idx * Math.random()}>
                                            <td dangerouslySetInnerHTML={dangerousHTML(item.service)}></td>
                                            <td dangerouslySetInnerHTML={dangerousHTML(item.schedule)}></td>
                                            <td dangerouslySetInnerHTML={dangerousHTML(item.destination)}></td>
                                            <td dangerouslySetInnerHTML={dangerousHTML(item.duration)}></td>
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