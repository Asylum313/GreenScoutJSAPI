import "./password.css"

function Password ({ onPasswordChange }) {
    const handleChange = (e) => {
        onPasswordChange(e.target.value);
    }

    return (
        <form>
            <input placeholder="Password" type="password" onChange={handleChange} id="pass" />
        </form>
    )
}

export default Password;