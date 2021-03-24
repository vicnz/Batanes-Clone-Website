export default function Main(props){
    return (
        <div>
            <div className="card">
                <img src="/bg.jpeg" alt="Mt. Iraya" className="card-image"/>
                <div className="card-content">
                    <div className="is-flex is-align-items-start is-justify-content-start">
                        <div className="icon icon-text mr-2"><i className="ri-hotel-line ri-2x"></i></div>
                        <p className="title is-size-4 is-capitalized">{props.data.name}</p>
                    </div>
                    <hr/>
                    <div className="content">
                        {
                            (props.data.accreditationNo) ?
                                <p className="content is-size-6">
                                    {props.data.accreditationNo}
                                </p>
                            :
                            ''
                        }
                        <p className="content is-small">
                            {(props.data.address.street) ? <span>{props.data.address.street}, </span> : ''}
                            {(props.data.address.brgy) ? <span>{props.data.address.brgy}, </span> : ''}
                            {(props.data.address.municipality) ? <span>{props.data.address.municipality}</span> : ''}
                        </p>
                        
                        <table className="table is-narrow has-text-left">
                            <tbody>
                                {
                                    (props.data.owner) ?
                                    <tr>
                                        <td><span className="icon icon-text"><i className="ri-user-line"></i></span></td>
                                        <td>{props.data.owner}</td>
                                    </tr>:
                                    ''
                                }
                                {
                                    (props.data.contactNo) ?
                                    <tr>
                                        <td><span className="icon icon-text"><i className="ri-phone-line"></i></span></td>
                                        <td className="wrap-content">{props.data.contactNo}</td>
                                    </tr>:
                                    ''
                                }
                                {
                                    (props.data.email) ?
                                    <tr>
                                        <td><span className="icon icon-text"><i className="ri-mail-line"></i></span></td>
                                        <td className="wrap-content">{props.data.email}</td>
                                    </tr>:
                                    ''
                                }
                                {
                                    (props.data.website) ?
                                    <tr>
                                        <td><span className="icon icon-text"><i className="ri-global-line"></i></span></td>
                                        <td className="wrap-content"><a className="has-text-link" href={`https://${props.data.website}`}>{props.data.website}</a></td>
                                    </tr>:
                                    ''
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer">
                    <a href="#" className="card-footer-item"><span className="icon icon-text"><i className="ri-star-line"></i></span></a>
                    <a href="#" className="card-footer-item"><span className="icon icon-text"><i className="ri-chat-2-line"></i></span></a>
                    <a href="#" className="card-footer-item"><span className="icon icon-text"><i className="ri-share-circle-line"></i></span></a>
                </div>
            </div>
            <style jsx>{`
                .wrap-content{
                    overflow-wrap: anywhere;
                }
            `}</style>
        </div>
    )
}