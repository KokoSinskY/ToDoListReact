import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const TasksContainerContent = () => {
  return (
    <Grid container sx={{ boxShadow: "0px 0px 15px rgba(50, 50, 50, 0.75)", pt: 1 }}>
      <Grid md={10} sm={10} xs={8}>
        <TextField
          id="filled-search"
          label="Quickly add a task"
          type="text"
          variant="standard"
          fullWidth
          sx={{ mx: 1, my: 1 }}
        />
      </Grid>
      <Grid md={2} sm={2} xs={4}>
        <Fab aria-label="add" color="primary">
          <ArrowUpwardIcon />
        </Fab>
      </Grid>
    </Grid>
  );
};

export default TasksContainerContent;
