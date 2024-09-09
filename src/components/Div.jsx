import "./vibeMenu.css"


function Div(props){
    return(
        <>
        <div className={`card ${props.isActive ? 'active': ''}`}>
            <div className="card-content">
                <img src={props.picture} alt={props.name}/><br/>
                <span>{props.name}</span>  
                <a href={props.link} target="_blank" rel="noopener noreferrer"><p>Ссылка</p></a>
                <div className="btn-set">
                    <button onClick={props.closed} className="button-settings"><img src={"/close_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"} alt="Close Icon"/></button>
                    <button onClick={props.handler} className="button-settings"><img src={"/arrow_back_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"} alt="Arrow Icon"/></button>
                    <button className="button-settings" onClick={props.handler}><img src={`/arrow_forward_ios_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg`} alt="Arrow Icon"/></button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Div