import {useState} from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'

//components
import Card from '../../components/tourism/travel-and-tour/card'

export default function Main(props){
    const intialState = [...props.data]
    const [data, setData] = useState(intialState)

    const sort = (type = 'default') => {
        let tempData;
        switch(type){
            case 'by-name':
                tempData = [...data]
                const byName = tempData.sort((a, b) => {
                    let aName = a.name.toUpperCase(), bName = b.name.toUpperCase()
                    if(aName < bName){
                        return -1
                    }
                    if(aName > bName){
                        return 1
                    }
                    return 0
                })

                setData([...byName])
                break;
            case 'by-rating':
                //apparently we dont have rating records on the JSON data well just parse it using the ID
                tempData = [...data]
                const byRating = tempData.sort((a, b) => {
                    let aID = a._id.toUpperCase(), bID = b._id.toUpperCase()
                    if(aID < bID){
                        return -1
                    }
                    if(aID > bID){
                        return 1
                    }
                    return 0
                })
                setData([...byRating])
                break;
            default:
                setData([...props.data])
                break;
        }
    }

    const SortChange = (e) => {
        const value = e.target.value.toLowerCase()
        if(value === 'byname'){
            sort('by-name')
        }else if(value === 'byrating'){
            sort('by-rating')
        }else if(value === 'default'){
            sort('default')
        }else{
            sort('default')
        }
    }

    return (
        <Layout>
            <Head>
                <title>Travel &amp; Tour Agencies</title>
                <meta name="description" content="Travel and Tour agencies in Batanes"/>
            </Head>
            <div className="hero is-medium is-success is-bold">
                <div className="hero-body">
                    <h1 className="title is-size-1 has-text-centered invert">Travel &amp; Tour Agencies</h1>
                    <h2 className="subtitle has-text-centered invert">Travel and Tour agencies in Batanes</h2>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="is-flex is-justify-content-start is-align-items-center pb-5">
                        <div className="field is-horizontal is-flex is-align-items-center">
                            <label className="field-label is-size-5 mr-2">Sort&nbsp;By:</label>
                            <div className="field-body">
                                <div className="control has-icons-left">
                                    <div className="select">
                                        <select onChange={SortChange}>
                                            <option value="default" selected>Default</option>
                                            <option value="byName">By Name</option>
                                            <option value="byRating">By Rating</option>
                                        </select>
                                    </div>
                                    <div className="icon is-small is-left">
                                        <i className="ri-filter-line ri-medium has-text-info"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="grid">
                        {
                            data.map((item, idx) => {
                                return <Card data={item} key={idx * Math.random()}/>
                            })
                        }
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
    const data = require('../../json/agencies.json')

    return {
        props: {
            data
        }
    }
}