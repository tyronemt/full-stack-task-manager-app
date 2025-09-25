import { useEffect } from "react";
import { useTasksContext } from "../hooks/useTasksContext";
// components
import TaskDetails from "../components/TaskDetails";
import TaskForm from "../components/TaskForm";

const Home = () => {
    const {tasks, dispatch} =  useTasksContext();
    useEffect(() => {
        const fetchTasks = async () => {
            const res = await fetch('/api/tasks');
            const data = await res.json();

            if (res.ok) {
                dispatch({type: 'SET_TASKS', payload: data})
            }
        }
        fetchTasks();
    }, [dispatch]);

return (
    <div className="home">
        <div className="tasks">
            {tasks && tasks.map((task) => (
                <TaskDetails key={task._id} task={task} />
            ))}
        </div>
        <TaskForm />
    </div>
  )
}

export default Home;