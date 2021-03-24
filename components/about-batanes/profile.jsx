import Link from 'next/link'

export default function Profile(props){

    function setDangerousHTML(str){
        return {__html: str}
    }

    return (
        <div id="profile">
            <div className="p-3">
                <div className="hero">
                    <div className="hero-body has-text-centered">
                        <h2 className="is-size-3 has-text-success">Provincial Profile</h2>
                        <hr/>
                    </div>
                </div>
                <div className="table-container">
                    <table className="table is-narrow is-fullwidth is-small">
                        <tbody>
                            <tr>
                                <td className="has-text-weight-semibold has-text-success">Capital</td>
                                <td className="is-capitalized">{props.capital}</td>
                            </tr>
                            <tr>
                                <td className="has-text-weight-semibold has-text-success">Population</td>
                                <td>{props.population}</td>
                            </tr>
                            <tr>
                                <td className="has-text-weight-semibold has-text-success">Population Density</td>
                                <td dangerouslySetInnerHTML={setDangerousHTML(props.populationDensity)}></td>
                            </tr>
                            <tr>
                                <td className="has-text-weight-semibold has-text-success">Population Density</td>
                                <td>{props.growthRate}</td>
                            </tr>
                            <tr>
                                <td className="has-text-weight-semibold has-text-success">Physical Features</td>
                                <td dangerouslySetInnerHTML={setDangerousHTML(props.physicalFeature)}></td>
                            </tr>
                            <tr>
                                <td className="has-text-weight-semibold has-text-success">Land Area</td>
                                <td>{props.landArea.hectares}hec / {props.landArea.kilometersSquare}km<sup>2</sup></td>
                            </tr>
                            <tr>
                                <td className="has-text-weight-semibold has-text-success">Sea Area</td>
                                <td>{props.seaArea}hec</td>
                            </tr>
                            <tr>
                                <td className="has-text-weight-semibold has-text-success">Administrative</td>
                                <td>
                                    <p className="content"><span>{props.administrative.desc}</span>
                                        {
                                            props.administrative.districts.map((dist, idx) => {
                                            return (
                                                <span key={idx * Math.random()}>
                                                    <Link href={`/about-batanes/municipal/${dist.toLowerCase()}`}>
                                                        <a href={`/about-batanes/municipal/${dist.toLowerCase()}`} className="px-2 has-text-link is-capitalized">{dist}</a>
                                                    </Link>
                                                </span>
                                            )
                                        })
                                        }
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className="has-text-weight-semibold has-text-success">People &amp; Culture</td>
                                <td dangerouslySetInnerHTML={setDangerousHTML(props.peopleCulture)}></td>
                            </tr>
                            <tr>
                                <td className="has-text-weight-semibold has-text-success">Climate</td>
                                <td dangerouslySetInnerHTML={setDangerousHTML(props.climate)}></td>
                            </tr>
                            <tr>
                                <td className="has-text-weight-semibold has-text-success">Language</td>
                                <td>{props.language}</td>
                            </tr>
                            <tr>
                                <td className="has-text-weight-semibold has-text-success">Literacy Rate</td>
                                <td>{props.literacyRate}</td>
                            </tr>
                            <tr>
                                <td className="has-text-weight-semibold has-text-success">Religion</td>
                                <td>{props.religion}</td>
                            </tr>
                            <tr>
                                <td className="has-text-weight-semibold has-text-success">Employment Rate</td>
                                <td>{props.employmentRate}</td>
                            </tr>
                            <tr>
                                <td className="has-text-weight-semibold has-text-success">Banking</td>
                                <td>{props.banking}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}