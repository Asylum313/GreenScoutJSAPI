import "./Autocheck.css"

function Autocheck () {
    return (
        <div className="child" id="doesauto">
            <p id="autotext" className="text">Can Do It?</p>
            <label className="checkcontainer">
                <input id="check" type="checkbox"/>
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default Autocheck;