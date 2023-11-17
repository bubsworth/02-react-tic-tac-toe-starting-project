import { useState } from "react"

export default function Player({initialName, symbol}) {
  const [ playerName, setplayerName ] = useState(initialName);
  const [ isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setplayerName(event.target.value);
  }

  let editiablePlayerName = <span className="player-name">{playerName}</span>;
  
  if (isEditing) {
    editiablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
  }

  return (
    <li>
      <span className="player">
        {editiablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}