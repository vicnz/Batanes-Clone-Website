export default function RenderList({data}){
    if(typeof(data[0]) === 'object'){
        return (
            <ul>
                
                {
                    data.map((item, idx) => {
                        return (<li key={idx * Math.random()}>
                            <span>{item.name}</span>
                            <ul>
                                {
                                    item.subItems.map((sub, idx) => <li key={idx * Math.random()}>{sub}</li>)
                                }
                            </ul>
                        </li>)
                    })
                }
            </ul>
        )
    }else if(data[0] === 'undefined'){
        return <></>
    }else{
        return (
            <ul>
                    {
                        data.map((desc, idx) => {
                        return (<li key={idx * Math.random()}>{desc}</li>
                            )})
                    }
            </ul>
        )
    }
}