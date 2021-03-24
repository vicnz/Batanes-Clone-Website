import Image from 'next/image'

export default function Category(props){
    return (
        <>
            {
                props.data.sites.map((item, idx) => {

                    return (
                        <div key={idx*Math.random()}>
                            <div className="card">
                                <img className="card-image" src="/bg.jpeg" alt="mt. iraya" />
                                <div className="card-content">
                                    <div className="title is-size-4">{item.name}</div>
                                    <hr />
                                    <p className="content has-text-grey">{item.desc}</p>
                                </div>
                                <div className="card-footer">
                                    <a className="card-footer-item" href="#"><span className="icon icon-text"><i className="ri-star-line"></i></span></a>
                                    <a className="card-footer-item" href="#"><span className="icon icon-text"><i className="ri-chat-2-line"></i></span></a>
                                    <a className="card-footer-item" href="#"><span className="icon icon-text"><i className="ri-share-box-line"></i></span></a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}