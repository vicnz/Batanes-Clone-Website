export default function Alert({type, title, message, close}){
    return (
        <div className="wrapper">
            <div className={`notification is-${type || 'info'}`}>
                <button className="delete" onClick={close}></button>
                <div className="is-size-5 is-text-weight-semibold">
                    <span className="icon icon-text">
                        <i className='ri-alert-line is-medium'></i>
                    </span>
                    {title}
                </div>
                <p className="content">
                    {message}
                </p>
            </div>
            <style jsx>{`
                .wrapper{
                    position: fixed;
                    z-index: 2;
                    bottom: 15px;
                    left: 15px;
                }
                @media screen and (max-width: 1024px){
                    .wrapper{
                        bottom: 0;
                        left: 0;
                        padding: 5px;
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    )
}