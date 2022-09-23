import { Paper } from "@mui/material";
import React from "react";
import TasksContainerContent from "../TasksContainerContent/TasksContainerContent";

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
      <TasksContainerContent />
    </Paper>
  );
};

export default TasksContainer;
