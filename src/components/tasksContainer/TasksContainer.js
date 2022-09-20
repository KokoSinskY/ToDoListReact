import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles({
  tasksContainer: {
    backgroundColor: "#F9F9F9",
    border: "2px solid black",
    borderRadius: 20,
    height: "80vh",
    justifyContent: "space-around",
  },
  paper: {
    textAlign: "left",
  },
});

const TasksContainer = () => {
  const classes = useStyles();
  return (
    // <Grid2 container xs={5} spacing={1} direction="column" className={classes.tasksContainer}>
    //   <Grid2>
    //     <h3>Today</h3>
    //     <Grid2 display="flex" justifyContent="flex-start" direction="column"></Grid2>
    //   </Grid2>
    //   <Grid2>
    //     <h3>Tomorrow</h3>
    //     <Grid2 container direction="column"></Grid2>
    //   </Grid2>
    //   <Grid2>
    //     <h3>Upcoming</h3>
    //     <Grid2 container direction="column"></Grid2>
    //   </Grid2>
    // </Grid2>
    <Grid container xs={12} md={6} lg={10}>
      <Paper className={classes.paper}>
        <div>
          <Grid>
            <Typography variant="h2">Today</Typography>
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
