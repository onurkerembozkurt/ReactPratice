import {useState} from "react";


export default function Player({initialName,symbol,isActive}){

        const[isEditing,setIsEditing]=useState(false);
        const[playerName,setPlayerName]=useState(initialName);
       
        function isEditingHandler(){
            setIsEditing((ed)=>!ed);
        }
        function handleChange(event){
            setPlayerName(event.target.value);
        }
        
        let editablePlayerName=<span className="player-name">{playerName}</span>
        
        if (isEditing) {
            editablePlayerName=<input type="text" required value={playerName} onChange={handleChange}></input>
        }
        

        
    return (

        <li className={isActive ?"active":undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
        <button onClick={isEditingHandler}>{!isEditing ? "Edit" : "Save"}</button>
        </li>


    );
}