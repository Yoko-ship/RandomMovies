import "./header.css"

function Linking(props){
    return(
        <div className="iframe-div">
            <iframe src={props.src}  width={920} height={605} frameBorder={0} webkitAllowFullScreen mozallowfullscreen allowFullScreen title="movies"></iframe>
            
        </div>
    )
}

export default Linking