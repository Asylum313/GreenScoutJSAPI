import "./username.css";

function Username({ onUserChange }) {
  const handleChange = (e) => {
    onUserChange(e.target.value);
  }

  return (
    <form>
      <input placeholder="Username" type="text" id="user" onChange={handleChange}/>
    </form>
  );
}

export default Username;
