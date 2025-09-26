import { useTasksContext } from "../hooks/useTasksContext"

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TaskDetails = ({ task }) => {
    const { dispatch } = useTasksContext()

    const handleClick = async () => {
        const response = await fetch(process.env.REACT_APP_API_URL + '/api/tasks/' + task._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_TASK', payload: json})
        }
    }

    return (
        <div className="task-details">
            <h4>{task.title}</h4>
            <p><strong>Description: </strong>{task.description}</p>
            <p><strong>Completed: </strong>{task.completed ? 'Yes' : 'No'}</p>
            <p>{formatDistanceToNow(new Date(task.createdAt), {addSuffix : true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default TaskDetails