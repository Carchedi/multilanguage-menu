function Section(props){
    return(
        <div id={props.name} style={{height:'400px' }}>
            <h1>{props.name}</h1>
        </div>
    )
}

export default Section;