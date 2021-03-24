import Head from 'next/head'
import Layout from '../../components/layout'

//components
import ReasonTo from '../../components/investments/reason-to-invest'
import Areas from '../../components/investments/investment-areas'
import Projects from '../../components/investments/investment-projects'
import Otop from '../../components/investments/otop'
import Business from '../../components/investments/steps-in-business'

export default function Investments(props){
    return (
        <Layout>
            <Head>
                <title>Investments</title>
                <meta name="description" content="Investments, Products and Services that developed this commmunity"/>
            </Head>
            <section>
                <div className="columns is-fullheight">
                    <aside className="column is-one-fifth">
                        {/*Sidebar*/}
                        <div className="container">
                            <div className="menu p-3">
                                <div className="menu-label has-text-success">Investments</div>
                                <ul className="menu-list">
                                    <li><a href="#reason-to-invest">Reason To Invest</a></li>
                                    <li><a href="#investment-areas">Priority Investment Areas</a></li>
                                    <li><a href="#investment-projects">Potential Investment Projects</a></li>
                                    <li><a href="#otop">One Town One Product</a></li>
                                    <li><a href="#step-in-business">Steps In Doing Business</a></li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                    <div className="column">
                        {/*Main content*/}
                        <article id="overflow-content">
                            <div className="hero is-medium is-success is-bold">
                                <div className="hero-body">
                                    <h1 className="title is-size-1 has-text-centered invert">Investments</h1>
                                    <h2 className="subtitle has-text-centered invert">Investments, Products and Services that developed this commmunity.</h2>
                                </div>
                            </div>
                            <div className="container">
                               <ReasonTo data={props.data[0]}/>
                               <Areas data={props.data[1]}/>
                               <Projects data={props.data[2]}/>
                               <Otop data={props.data[3]}/>
                               <Business data={props.data[4]}/>
                               <br/><br/>
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
                        overflow: none;
                    }
                }
            `}</style>
        </Layout>
    )
}

export async function getStaticProps(ctx){
    const data = require('../../json/investments.json')

    return {
        props: {data}
    }
}