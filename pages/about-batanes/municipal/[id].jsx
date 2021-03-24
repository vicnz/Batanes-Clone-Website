import Layout from '../../../components/layout'
import Head from 'next/head'

function Municipality(props){

    function parsedHTML(html){
        return {__html: html}
    }

    return (
        <Layout>
            <Head>
                <title>Municipality Of {props.data.title.toUpperCase()}</title>
                <meta name="description" content={props.data.content[0]}/>
            </Head>
            <div className="hero is-medium is-bold is-success">
                <div className="hero-body">
                    <h1 className="title is-size-1 has-text-centered invert">Municipality Of <span className="is-capitalized">{props.data.title}</span></h1>
                    <br/>
                    <h2 className="subtitle is-size-4 has-text-centered is-uppercase invert">{props.data.subtitle}</h2>
                </div>
            </div>
            <hr/>
            <div className="section">
                <div className="container m-5">
                    <div className="table-wrapper">
                        <table className="table is-fullwidth">
                            <tbody>
                                <tr>
                                    <td className="has-text-weight-semibold has-text-success">Mayor</td>
                                    <td className="is-capitalized" dangerouslySetInnerHTML={parsedHTML(props.data.profile.mayor)}></td>
                                </tr>
                                <tr>
                                    <td className="has-text-weight-semibold has-text-success">Land Area</td>
                                    <td className="is-capitalized" dangerouslySetInnerHTML={parsedHTML(props.data.profile.landArea)}></td>
                                </tr>
                                <tr>
                                    <td className="has-text-weight-semibold has-text-success">Baranggays</td>
                                    <td className="is-capitalized">
                                        <span className="tags">
                                            {
                                                props.data.profile.baranggays.brgys.map((item, idx) => <span key={idx * Math.random()}><span className="tag is-medium is-success">{item}</span>&nbsp;</span>)
                                            }
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="has-text-weight-semibold has-text-success">Population</td>
                                    <td className="is-capitalized">{props.data.profile.population}</td>
                                </tr>
                                <tr>
                                    <td className="has-text-weight-semibold has-text-success">Population Density</td>
                                    <td className="is-capitalized" dangerouslySetInnerHTML={parsedHTML(props.data.profile.populationDensity)}></td>
                                </tr>
                                <tr>
                                    <td className="has-text-weight-semibold has-text-success">Classification</td>
                                    <td className="is-capitalized" dangerouslySetInnerHTML={parsedHTML(props.data.profile.classification)}></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr/>
                    <div className="block">
                        <div className="content">
                            {
                                props.data.content.map((item, idx) => <p key={idx * Math.random()} dangerouslySetInnerHTML={parsedHTML(item)}></p>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export async function getStaticProps(context){
        const id = context.params.id
    const data = require('../../../json/municipality.json')
    const document = data.find(item => item.title === id)

    if(document){
        return {
                props: {
                data: document
            }
        }
    }
    else{
        return {
            notFound: true
        }
    }

}

export async function getStaticPaths(){
    const data = require('../../../json/municipality.json')
    const parsed = data.map(content => content.title)
    let paths = []
    parsed.forEach(item => {
        paths.push({params: {id: item}})
    })

    return {
            paths,
            fallback: false
    }
}

export default Municipality