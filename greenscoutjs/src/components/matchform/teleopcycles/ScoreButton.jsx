import "./ScoreButton.css";

function ScoreButton({ onTrigger }) {
  return (
    <button id="scoreButton" onClick={onTrigger}>
      <div id="scoreButtonImg"></div>
      Score
    </button>
  );
}

export default ScoreButton;
