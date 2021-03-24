import {useState} from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'

//components
import Tabs from '../../components/tourism/tourist-attractions/tabs'
import CategoryRender from '../../components/tourism/tourist-attractions/category'

export default function Main(props){

    const [activeTab, setActiveTab] = useState(0);
    return (
        <Layout>
            <Head>
                <title>Tourist Attractions</title>
                <meta name="description" content="Visit toursites that makes this place a top notch tourist destination."/>
            </Head>
            <div className="hero is-medium is-success is-bold">
                <div className="hero-body">
                    <h1 className="title is-size-1 has-text-centered invert">Tourist Attractions</h1>
                    <h2 className="subtitle has-text-centered invert">Visit toursites that makes this place a top notch tourist destination.</h2>
                </div>
                <div className="hero-foot">
                    <Tabs tabActive={activeTab} onchange={setActiveTab}/>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <h2 className="subtitle is-size-3 has-text-success">{props.data[activeTab].title}</h2>
                    <hr/>
                    <div className="grid">
                        <CategoryRender data={props.data[activeTab]}/>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .grid{
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
                    grid-gap: .8em;
                }
            `}</style>
        </Layout>
    )
}

export async function getStaticProps(ctx){
    const data = require('../../json/touristsites.json')

    return {
        props: {
            data
        }
    }
}