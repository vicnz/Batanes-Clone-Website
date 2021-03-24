import Layout from '../../components/layout'
import Head from 'next/head'
//components

export default function Main(props){
    return (
        <Layout>
            <Head>
                <title>Ivatan Culture and Practices</title>
                <meta name="description" content="Common Ivatan culture and practices; Going around the island"/>
            </Head>
            <div className="hero is-medium is-success is-bold">
                <div className="hero-body">
                    <h1 className="title is-size-1 has-text-centered invert">Ivatan Culture And Practices</h1>
                    <h2 className="subtitle has-text-centered invert">Common Ivatan culture and practices; Going around the island</h2>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="content" id="culture-practices">
                        <ul>
                            {
                                props.data.map((item, idx) => {
                                    return <li className="block " key={idx * Math.random()}>
                                        <p className="subtitle is-size-4 has-text-success">{item.name}</p>
                                        <p className="content">{item.description}</p>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <hr/>
                </div>
                <div className="container" id="going-around">
                    <div className="hero is-small">
                        <div className="hero-body">
                            <h6 className="subtitle is-size-3 has-text-success has-text-centered">Going Around The Island</h6>
                            <hr/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <div className="subtitle">Batan Island</div>
                            <div className="content">
                                <p>
                                    Jeepneys from Basco to the other municipalities are available from 5:00AM to 9:00PM.  Private vehicles, motorcycles and bicycles are also available for rent to tour the islands of Batan, Sabtang and Itbayat.  Tricycle services are also available for tour.  Just call or text their hotline number and specify where they will pick you up.  It is best to ask for a driver who has completed the tour guiding seminar sponsored by the Provincial Government and the DOT or duly licensed by the Local Government Units.
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="subtitle">Sabtang</div>
                            <div className="content">
                                <p>
                                    To get to Sabtang from Basco, you travel first by jeepney to San Vicente or Radiwan port in Ivana (Php28 for a 30 minute ride).  Motorized ferries (falowa) bring you to Sabtang (Php 75 for 30-40 minute ride).  If you arrive at San Vicente or Radiwan Port at 6:30AM, you are in for the first boat trip to Sabtang.  Sabtang is best enjoyed at least with an overnight stay and leave early the next day.  It is the closest you can get to experience the old Batanes.
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="subtitle">Itbayat</div>
                            <div className="content">
                                <p>
                                    To go to Itbayat, you may either take a 12-minute plane ride or enjoy a 2-3 hour motorized banca ride crossing the West Philippine Sea.  A boat with maximum passenger capacity of 50 that costs Php450 one-way is available everyday (when weather is good), while by plane, you may take a 4 to 8-seater plane that costs around Php1,800.  The road leading to the center of the town is quite rugged.  Expect to do lots of walking since there are no public transportation within the island.  Either you rent a motorcycle or hitch in one of the privately-owned vehicles or government-owned vehicles passing by.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps(ctx){
    const data = require('../../json/practices.json')

    return {
        props: {
            data
        }
    }
}