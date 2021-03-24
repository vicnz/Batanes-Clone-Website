import Layout from '../components/layout'
import Head from 'next/head'

export default function Index(props){
    return (
        <Layout>
            <Head>
                <title>Page About</title>
                <meta name="description" content="This page is one of my side projects where i re-build/re-design old websites as an experience building habit. I did not find time to collect all the images from the original website nor have aquired the logo. This has no real copyright and all the content you see does not belong to me."/>
            </Head>
            <div className="hero is-success is-medium is-bold">
                <div className="hero-body has-text-centered">
                    <h1 className="title is-size-1 invert">About</h1>
                    <h2 className="subtitle has-text-centered invert">Me</h2>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="wrapper">
                        <div className="profile-content has-background-light">
                            <div className="profile-icon">
                                <span className="icon">
                                    <i className="ri-aliens-fill ri-4x"></i>
                                </span>
                            </div>
                            <div className="spacer"></div>
                            <div className="profile-text">
                                <h1 className="title has-text-success">Ne0nZ0ne</h1>
                                <p className="content has-text-grey">This page is one of my side projects where I re-build/re-design old websites as an experience building habit. I did not find time to collect all the images from the original website nor have aquired the logo. This has no real copyright and all the content you see does not belong to me.</p>
                            </div>
                        </div>
                        <br/>
                        <div className="profile-content">
                            <div className="message is-warning">
                                <div className="message-body">
                                    <p className="content">
                                        Pleases don't consider this as a legitimate website this is only a <strong>CLONE</strong> site based from the original webpage if you want to visit that original website visit <a href="http://www.rdc2.gov.ph/invest/batanes/index.php">this link</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{
                    `
                        .wrapper{
                            height: auto;
                            width: 95%;
                            margin-top: 1em;
                            margin: 1em auto;
                        }
                        .profile-icon{
                            position: absolute;
                            height: 100px;
                            width: 100px;
                            border-radius: 50%;
                            background-color: rgb(42, 180, 68);
                            display: grid;
                            place-items: center;
                            color: white;
                            top: -50px;
                            left: 15px;
                            
                        }
                        .profile-content{
                            border-radius: 15px;
                            position: relative;
                        }
                        .spacer{
                            height: 75px;
                        }
                        .profile-text{
                            padding: 0 15px;
                            padding-bottom: 25px;
                        }
                        @media screen (min-width: 1024px){
                            .wrapper{
                                width: 85%;
                            }
                        }
                    `
                }</style>
            </section>
        </Layout>
    )
}