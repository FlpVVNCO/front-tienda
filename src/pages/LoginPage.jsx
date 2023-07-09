import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import {
  Alert,
  Box,
  Button,
  Card,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: loginErrors, isAuthenticated, isAdmin } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAdmin) navigate("/product");
  }, [isAdmin]);
  

  const onSubmit = handleSubmit((data) => {
    signin(data);
    // navigate("/task");
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
              }}
            >
              <Card
                elevation={3}
                sx={{
                  padding: 5,
                  // background: "#292929",
                  background: "white",
                  borderRadius: 2,
                }}
              >
                <Typography variant="h4">Login</Typography>
                <Box component="form" onSubmit={onSubmit}>
                  {loginErrors.map((error, i) => (
                    <Alert
                      sx={{ mb: 1 }}
                      variant="filled"
                      key={i}
                      severity="error"
                    >
                      {error}
                    </Alert>
                  ))}
                  <Box>
                    <Typography fontWeight={400}>Email</Typography>
                    <TextField
                      fullWidth
                      size="small"
                      label="email"
                      type="email"
                      name="email"
                      sx={{ mb: 2 }}
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <Alert severity="error">Email is required</Alert>
                    )}
                    <Typography fontWeight={400}>Password</Typography>
                    <TextField
                      color="grey"
                      fullWidth
                      size="small"
                      label="password"
                      type="password"
                      name="password"
                      sx={{ mb: 2 }}
                      {...register("password", { required: true })}
                    />
                    {errors.password && (
                      <Alert severity="error">Password is required</Alert>
                    )}
                  </Box>
                  <Box mt={1} mb={1}>
                    <Button fullWidth variant="contained" type="submit">
                      Sign in
                    </Button>
                  </Box>
                </Box>
                <Typography variant="p">
                  Don't have an account? <Link to="/register">Sign up</Link>
                </Typography>
              </Card>
            </Box>
          </Grid>
          {/* <Grid item xs={6}>
            <Box sx={{ background: "red", height: "100vh" }}>l</Box>
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
