import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const TasksContainerTest = () => {
  return (
    <Grid container xs={12} md={12}>
      <Paper>
        <div>
          <Grid>
            <Typography variant="h4">Today</Typography>
            <Grid>
              <Typography variant="h5">Ugotowac obiad</Typography>
            </Grid>
          </Grid>
          <Grid>
            <Typography variant="h4">Tomorrow</Typography>
            <Grid>
              <Typography variant="h5">Zrobic zakupy na impreze urodzinową</Typography>
            </Grid>
          </Grid>
          <Grid>
            <Typography variant="h4">Upcoming</Typography>
            <Grid>
              <Typography variant="h5">Grill u gawrona</Typography>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </Grid>
  );
};

export default TasksContainerTest;
