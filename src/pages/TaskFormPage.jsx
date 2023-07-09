import { Grid } from "@mui/material";
import FormTask from "../components/FormTask";
import BoxCenter from "../components/utilities/BoxCenter";

const TaskFormPage = () => {
  return (
    <Grid container>
      <Grid item xs={12} p={2}>
        <Grid container>
          <Grid item xs={12}>
            <BoxCenter>
              <FormTask />
            </BoxCenter>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskFormPage;
