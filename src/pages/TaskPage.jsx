import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useTasks } from "../hooks/useTasks";
import { Box, Grid, Typography } from "@mui/material";

const TaskPage = () => {
  const { user } = useAuth();
  const { getTask, tasks } = useTasks();

  useEffect(() => {
    getTask();
  }, []);

  if (tasks.length === 0) return <h1>No task</h1>;

  return (
    <Grid container>
      <Grid item xs={6}>
        <Box>
          {tasks.map((task) => (
            <Box key={task._id}>
              <br></br>
              <Typography variant="h1" fontSize={22}>
                titulo: {task.title}
              </Typography>
              <Typography variant="h1" fontWeight="bold" fontSize={18}>
                descripcion: {task.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default TaskPage;
