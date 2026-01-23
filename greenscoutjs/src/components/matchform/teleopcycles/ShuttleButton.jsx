import "./ShuttleButton.css";

function ShuttleButton({ onTrigger }) {
  return (
    <button id="shuttleButton" onClick={onTrigger}>
      <div id="shuttleButtonImg"></div>
      Shuttle
    </button>
  );
}

export default ShuttleButton;
