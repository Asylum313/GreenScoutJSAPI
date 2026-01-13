import "./CollectCheck.css"

function Neutralcheck () {
    return (
        <div className="child" id="doesneutral">
            <p id="autotext" className="text">Collect From Neutral Zone?</p>
            <label className="checkcontainer">
                <input id="check" type="checkbox"/>
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default Neutralcheck;