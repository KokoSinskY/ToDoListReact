import { Grid, Paper, Container } from "@mui/material";
import React from "react";
import QuickAddTaskForm from "../Form/QuickAddTaskForm";
import DailyTasks from "./DailyTasks";

const TasksContainer = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: "80vh",
        borderRadius: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container direction="column" alignItems="flex-start">
        <DailyTasks day={"Today"} />
        <DailyTasks day={"Tommorow"} />
        <DailyTasks day={"Upcoming"} />
      </Grid>
      <Grid container alignItems="flex-end" sx={{ height: "100%" }}>
        <Container disableGutters>
          <QuickAddTaskForm />
        </Container>
      </Grid>
    </Paper>
  );
};

export default TasksContainer;
