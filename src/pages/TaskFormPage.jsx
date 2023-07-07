import { useForm } from "react-hook-form";
import { Box, TextField, TextareaAutosize, Button } from "@mui/material";
import { useTasks } from "../hooks/useTasks";

const TaskFormPage = () => {
  const { register, handleSubmit } = useForm();
  const { tasks, createTask } = useTasks();

  const onSubmit = handleSubmit((data) => {
    createTask(data);
  });

  return (
    <Box>
      <Box component="form" onSubmit={onSubmit}>
        <Box
          sx={{
            display: "flex",
            flexFlow: "column wrap",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ mt: 2 }}
            type="text"
            placeholder="title"
            autoFocus
            size="small"
            {...register("title")}
          />
          <TextField
            sx={{ mt: 2 }}
            size="small"
            type="area"
            placeholder="description"
            {...register("description")}
          />
          <Button sx={{ mt: 2 }} variant="contained" type="submit">
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TaskFormPage;
