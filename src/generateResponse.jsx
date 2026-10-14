export default function GenerateResponse(props) {

    const unavailableStyle = {
        backgroundColor : "grey",
        color : "black",
        borderColor : "#38a5aa",
        borderRadius : "10px",
        width: "142px",
        height : "60px",
        marginLeft : "10px"
    }

    const availableStyle = {
        ...unavailableStyle,
        color : "#38a5aa",
        backgroundColor : "white"
    }


    function handleClick() {
        if(props.ingredientsLength > 2){
            props.getResponse()
        }
        else props.setWarning(true)
    }

    return (
        <>
            <div className="center-gen-form">
                <section className="generation-form">
                    <div>
                        <p>You need to have atleast 3 ingredients to generate</p>
                        {props.warning && <p className="warning"> *** You only have {props.ingredientsLength} ingredient/s</p>}
                    </div>
                    <div className="verticle-line"></div>
                    <button
                        style={props.ingredientsLength > 2 ? availableStyle : unavailableStyle}
                        onClick={handleClick}
                    >
                        {props.tryAgain ? "Try Again" : "Generate a response"}
                    </button>
                </section>
            </div>
            <span className="ai-name">Powered by Gemeni AI 3.8 flash</span>
        </>
    )
}