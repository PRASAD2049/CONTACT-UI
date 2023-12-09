function SharedPage(props) {

    return (
        <div style={{'padding': '15px'}}>
            { props.children }
        </div>
    )

}

export default SharedPage;