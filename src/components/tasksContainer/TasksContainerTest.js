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

const TasksContainerTest = () => {
  const classes = useStyles();
  return (
    <Grid container xs={12} md={4}>
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

export default TasksContainerTest;
