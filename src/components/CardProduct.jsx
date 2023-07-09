import { useEffect } from "react";
import { Box, Card, Typography, Button } from "@mui/material";
import { useTasks } from "../hooks/useTasks";
import { Link } from "react-router-dom";

const CardProduct = () => {
  const { getTasks, tasks, deleteTask } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1>No task</h1>;

  return (
    <Box>
      {tasks.map((task) => (
        <Box key={task._id}>
          <br></br>
          <Card elevation={3} sx={{ textAlign: "center" }}>
            <Box
              component="header"
              sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography fontWeight="bold"> {task.title}</Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  component={Link}
                  to={`/task/${task._id}`}
                  size="small"
                  variant="contained">
                  Update
                </Button>
                <Button
                  onClick={() => {
                    deleteTask(task._id);
                  }}
                  size="small"
                  variant="contained">
                  Delete
                </Button>
              </Box>
            </Box>

            <Typography variant="h3" fontSize={16}>
              {task.description}
            </Typography>
            <Typography variant="h3" fontSize={16}>
              {new Date(task.date).toLocaleDateString()}
            </Typography>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default CardProduct;
