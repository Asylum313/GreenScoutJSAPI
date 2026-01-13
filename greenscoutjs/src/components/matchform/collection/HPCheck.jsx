import "./CollectCheck.css"

function HPCheck () {
    return (
        <div className="child" id="doeshp">
            <p id="autotext" className="text">Collect From Human Player?</p>
            <label className="checkcontainer">
                <input id="check" type="checkbox"/>
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default HPCheck;