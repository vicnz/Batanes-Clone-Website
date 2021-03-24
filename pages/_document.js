import Document, {Html, Head, Main, NextScript} from 'next/document'

class CustomDoc extends Document{
    render(){
        return (
            <Html className="has-navbar-fixed-top">
                <Head>
                    <link rel="stylesheet" href="/css/bulma.min.css"/>
                    <link rel="stylesheet" href="/css/fonts/remixicon.css"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default CustomDoc