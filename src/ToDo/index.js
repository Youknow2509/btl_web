import { TiDeleteOutline } from "react-icons/ti";
import { useReducer } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addJob, deleteJob } from "./actions";
function Todo() {

    const [state, dispatch] = useReducer(reducer, initState);

    return (    
        <div>
            <h1>To do: </h1>
            <input 
                type="text" 
                placeholder="Add a new task"
                value={state.job}
                onChange={(e) => {
                    dispatch(setJob(e.target.value));
                }}
            />
            <button
                onClick={() => {
                    dispatch(addJob(state.job));
                }}    
            >Add</button>
            <ul>
                {state.jobs.map((job, index) => {
                    return (
                        <li key={index}>
                        {job}
                        <span
                            onClick={
                                () => {
                                    dispatch(deleteJob(index));
                                }
                            }>
                            <TiDeleteOutline />
                        </span>
                    </li>
                    )
                })}
            </ul>
        </div>   
    );
}

export default Todo;