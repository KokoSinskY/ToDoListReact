import { Grid, Typography } from "@mui/material";
import React from "react";
import SingleTask from "./SingleTask";
import data from "./SingleTask";

const DailyTasks = (props) => {
  return (
    <>
      <Grid
        container
        justifyContent="flex-start"
        sx={{
          "&:hover": {
            color: "#41C8AE",
          },
          transition: "0.3s",
        }}
      >
        <Typography variant="h3" sx={{ px: 1.5, py: 1 }}>
          {props.day}
        </Typography>
      </Grid>
      <Grid
        container
        sx={{
          py: 0.5,
          mx: 1,
          width: "97%",
          "&:hover": {
            borderRadius: 3,
            backgroundColor: "gray",
          },
          transition: "0.3s",
        }}
      >
        <Typography variant="subtitle2" sx={{ px: 1.5 }}>
          <ul></ul>
        </Typography>
      </Grid>
    </>
  );
};

export default DailyTasks;
