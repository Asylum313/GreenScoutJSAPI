import "./Autocheck.css"

function AutoHangCheck () {
    return (
        <div className="child" id="doesautohang">
            <p id="autohangtext" className="text">Does Auto Hang?</p>
            <label className="checkcontainer">
                <input id="check" type="checkbox"/>
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default AutoHangCheck;