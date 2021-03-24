export default function History(props){

    function dangerousHtml(str){
        return {__html: str}
    }

    return (
        <div id="history">
            <div className="container m-3">
                <div className="hero">
                    <div className="hero-body has-text-centered">
                        <h2 className="is-size-3 has-text-success">Historical Background</h2>
                        <hr/>
                    </div>
                </div>
                <div className="content">
                    {
                        props.data.map((desc, idx) => {
                            return <p className="block" key={idx * Math.random()} dangerouslySetInnerHTML={dangerousHtml(desc)}></p>
                        })
                    }
                </div>
            </div>
        </div>
    )
}