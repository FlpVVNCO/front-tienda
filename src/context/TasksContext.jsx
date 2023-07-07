import { createContext, useState } from "react";
import { createTasksRequest, getTasksRequest } from "../api/task";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const getTask = async () => {
    try {
      const res = await getTasksRequest();
      console.log(res.data);
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (task) => {
    const res = await createTasksRequest(task);
    console.log(res);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        getTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
