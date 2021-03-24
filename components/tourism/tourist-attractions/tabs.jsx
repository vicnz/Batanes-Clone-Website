export default function Tabs({tabActive, onchange}){
    return (
        <nav className="tabs is-boxed is-fullwidth is-medium">
            <div className="container">
                <ul>
                    <li className={`${(tabActive === 0) ? "is-active has-text-success" : ""}`} ><a onClick={() => onchange(0)}>Cultural</a></li>
                    <li className={`${(tabActive === 1) ? "is-active has-text-success" : ""}`} ><a onClick={() => onchange(1)}>Historical</a></li>
                    <li className={`${(tabActive === 2) ? "is-active has-text-success" : ""}`} ><a onClick={() => onchange(2)}>Natural</a></li>
                    <li className={`${(tabActive === 3) ? "is-active has-text-success" : ""}`}><a onClick={() => onchange(3)}>Recreational</a></li>
                </ul>
            </div>
        </nav>
    )
}