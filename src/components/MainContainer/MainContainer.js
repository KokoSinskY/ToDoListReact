import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TasksContainer from "../TasksContainer/TasksContainer";

import TasksContainerTest from "./TasksContainerTest";

const PaperContainer = () => {
  return (
    <Container maxWidth="xl" component="main">
      <Grid container spacing={20}>
        <Grid item xs={12} md={6}>
          <TasksContainer />
        </Grid>
        <Grid item xs={12} md={6}>
          <TasksContainer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PaperContainer;
