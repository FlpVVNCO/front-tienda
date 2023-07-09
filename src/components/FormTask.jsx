import { useForm } from "react-hook-form";
import { Box, TextField, Button } from "@mui/material";
import { useTasks } from "../hooks/useTasks";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const FormTask = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { tasks, createTask, getTask, updateTask } = useTasks();
  const params = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
      }
    };
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data);
    }
    navigation("/task");
  });

  return (
    <Box component="form" onSubmit={onSubmit}>
      <Box
        sx={{
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
        }}>
        <TextField
          sx={{ mt: 2 }}
          type="text"
          placeholder="title"
          autoFocus
          size="small"
          {...register("title")}
          fullWidth
        />
        <TextField
          sx={{ mt: 2 }}
          size="small"
          multiline
          rows={10}
          fullWidth
          placeholder="description"
          {...register("description")}
        />
        <Button sx={{ mt: 2 }} variant="contained" fullWidth type="submit">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default FormTask;
