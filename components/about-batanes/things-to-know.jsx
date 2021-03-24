export default function ThingsToKnow(props){
    function dangerousHTML(str){
        return {__html: str}
    }
    return (
        <div id="things-to-know">
            <div className="container m-3">
                <div className="hero">
                    <div className="hero-body has-text-centered">
                        <h2 className="is-size-3 has-text-success">Things To Know</h2>
                        <hr />
                    </div>
                </div>
                <div className="content">
                    <ol>
                       {
                           props.data.map((desc, idx) => {
                               return <li key={idx * Math.random()} dangerouslySetInnerHTML={dangerousHTML(desc)}></li>
                           })
                       } 
                    </ol>
                </div>
            </div>
        </div>
    )
}