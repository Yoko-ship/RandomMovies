function Grids(props){
    return(
        <div className="grid">
            <img src={props.image}/>
            <a href={props.href}><p>{props.name}</p></a>
            <span>{props.year}</span>
        </div>
    )
}

export default Grids