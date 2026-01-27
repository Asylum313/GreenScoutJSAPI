import "./TriggerButton.css";

function TriggerButton({ onTrigger, active }) {
  return (
    <button
      id="sideButtonTrigger"
      className={active ? "active" : "inactive"}
      onClick={onTrigger}
    >
      <div id="stopbuttonimg"></div>
      Climb
    </button>
  );
}

export default TriggerButton;
