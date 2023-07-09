import { useAuth } from "../hooks/useAuth";
import { Grid, Button } from "@mui/material";
import CardProduct from "../components/CardProduct";
import { useNavigate } from "react-router-dom";

const TaskPage = () => {
  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <Grid container>
      <Grid item xs={12} xl={3}>
        <Button variant="contained" onClick={handleLogout}>
          logout
        </Button>
        <CardProduct />
      </Grid>
    </Grid>
  );
};

export default TaskPage;
