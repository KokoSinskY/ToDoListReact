import { Paper } from "@mui/material";
import React from "react";
import QuickAddTaskForm from "../Form/QuickAddTaskForm";

const TasksContainer = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: "80vh",
        borderRadius: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <QuickAddTaskForm />
    </Paper>
  );
};

export default TasksContainer;
