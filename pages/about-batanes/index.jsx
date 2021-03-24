import Head from 'next/head'
import Layout from '../../components/layout'

//components
import Profile from '../../components/about-batanes/profile'
import VM from '../../components/about-batanes/vision-mission'
import History from '../../components/about-batanes/historical_background'
import Know from '../../components/about-batanes/things-to-know'
import HowToGet from '../../components/about-batanes/how-to-get-there'

export default function AboutBatanes(props){
    return (
        <Layout>
            <Head>
                <title>About Batanes</title>
                <meta name="description" content="Learn more about Batanes, by land, culture, and its people."/>
            </Head>
            <section>
                <div className="columns is-fullheight">
                    <aside className="column is-one-fifth">
                        {/*Sidebar*/}
                        <div className="container">
                            <div className="menu p-3">
                                <div className="menu-label has-text-success">About Batanes</div>
                                <ul className="menu-list">
                                    <li><a href="#profile">Provincial Profile</a></li>
                                    <li><a href="#mission-vision">Vision &amp; Mission</a></li>
                                    <li><a href="#history">Historical Background</a></li>
                                    <li><a href="#things-to-know">Things To Know?</a></li>
                                    <li><a href="#how-to-get">How To Get There?</a></li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                    <div className="column">
                        {/*Main content*/}
                        <article id="overflow-content">
                            <div className="hero is-medium is-success is-bold">
                                <div className="hero-body">
                                    <h1 className="title is-size-1 has-text-centered invert">About Batanes</h1>
                                    <h2 className="subtitle has-text-centered invert">Learn more about Batanes, by land, culture, and its people.</h2>
                                </div>
                            </div>
                            <div className="container">
                                <Profile {...props.data[0].content}/>
                                <VM {...props.data[1].content}/>
                                <History data={props.data[2].content}/>
                                <Know data={props.data[3].content}/>
                                <HowToGet data={props.data[4].content}/>
                                <br/>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .columns{
                    height: calc(100vh - 30px);
                }
                #overflow-content{
                    overflow: auto;
                    overflow-x: auto;
                    height: 100%;
                }
                @media screen and (max-width: 1024px){
                    .columns{
                        height: auto;
                    }
                    #oveflow-content{
                        height: auto;
                        overflow: none;
                    }
                }
            `}</style>
        </Layout>
    )
}

export async function getStaticProps(ctx){
    const resource = require('../../json/aboutbatanes.json')
    return {
        props: {
            data: resource
        }
    }
}