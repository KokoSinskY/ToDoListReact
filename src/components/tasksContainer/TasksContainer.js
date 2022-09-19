import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tasksContainer: {
    backgroundColor: "#F9F9F9",
    border: "2px solid black",
    borderRadius: 20,
    height: "80vh",
    justifyContent: "space-around",
  },
});

const TasksContainer = () => {
  const classes = useStyles();
  return (
    <Grid2 container xs={5} spacing={1} direction="column" className={classes.tasksContainer}>
      <Grid2>
        <h3>Today</h3>
        <Grid2 display="flex" justifyContent="flex-start" direction="column"></Grid2>
      </Grid2>
      <Grid2>
        <h3>Tomorrow</h3>
        <Grid2 container direction="column"></Grid2>
      </Grid2>
      <Grid2>
        <h3>Upcoming</h3>
        <Grid2 container direction="column"></Grid2>
      </Grid2>
    </Grid2>
  );
};

export default TasksContainer;
