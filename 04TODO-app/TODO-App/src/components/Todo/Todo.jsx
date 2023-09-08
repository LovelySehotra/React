import { useState } from "react";


function Todo({TodoData,isFinished,changeFinished,onDelete,onEdit})
{

const [finished,setFinished]=useState(isFinished);
const [isEditting,setIsEditting] = useState(false);
const [editText,setEdittext] =useState(TodoData);

    return(
        <div>
            <input type="checkbox" checked={finished} onChange={(e)=>{
                setFinished(e.target.checked);
                changeFinished(e.target.checked);
            }}/>
            
                { (isEditting)? <input type="text" value={editText} onChange={e=>setEdittext(e.target.value)}/>: <span>{TodoData}</span>}
           
            <button onClick={ ()=>{
                setIsEditting(!isEditting);
                onEdit(editText);
            }}>{(!isEditting)?'Edit':'Save'}</button>
            <button onClick={onDelete}>Delete</button>

        </div>
    )
}
export default Todo;