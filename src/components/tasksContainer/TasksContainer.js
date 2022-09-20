import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

// const useStyles = makeStyles({
//   tasksContainer: {
//     backgroundColor: "#F9F9F9",
//     border: "2px solid black",
//     borderRadius: 20,
//     height: "80vh",
//     justifyContent: "space-around",
//   },
//   paper: {
//     textAlign: "left",
//   },
// });

const TasksContainer = () => {
  return (
    <Grid container xs={12} md={12} lg={12}>
      <Paper>
        <div>
          <Grid>
            <Typography variant="h2" sx={{ color: "red" }}>
              Today
            </Typography>
            <h1>Today</h1>
            <Grid>
              <Typography variant="h3">Ugotowac obiad</Typography>
            </Grid>
          </Grid>
          <Grid>
            <Typography variant="h2">Tomorrow</Typography>
            <Grid>
              <Typography variant="h3">Zrobic zakupy na impreze urodzinową</Typography>
            </Grid>
          </Grid>
          <Grid>
            <Typography variant="h2">Upcoming</Typography>
            <Grid>
              <Typography variant="h3">Grill u gawrona</Typography>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </Grid>
  );
};

export default TasksContainer;
