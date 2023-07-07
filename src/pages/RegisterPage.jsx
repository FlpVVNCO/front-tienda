import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/task");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexFlow: "column wrap",
      }}
      onSubmit={onSubmit}
    >
      <Typography>REGISTRO</Typography>
      {registerErrors.map((error, i) => (
        <Alert variant="filled" key={i} severity="error">
          {error}
        </Alert>
      ))}
      <Box>
        <Typography fontWeight={400} color="#FFF" mb={2}>
          Username
        </Typography>
        <TextField
          fullWidth
          label="username"
          type="text"
          name="username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <Alert severity="error">Username is required</Alert>
        )}
        <Typography fontWeight={400} color="#FFF" mb={2}>
          Email
        </Typography>
        <TextField
          fullWidth
          label="email"
          type="email"
          name="email"
          {...register("email", { required: true })}
        />
        {errors.email && <Alert severity="error">Email is required</Alert>}
        <Typography fontWeight={400} color="#FFF" mb={2}>
          Password
        </Typography>
        <TextField
          fullWidth
          label="password"
          type="password"
          name="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <Alert severity="error">Password is required</Alert>
        )}
      </Box>
      <Box mt={1}>
        <Button fullWidth variant="contained" type="submit">
          Register
        </Button>
      </Box>
      <Typography variant="p">
        Already hava an account? <Link to="/login">Sign in</Link>
      </Typography>
    </Box>
  );
};

export default RegisterPage;
