import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleTask from "./SingleTask";

const DailyTasks = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3002/task/list");
      const data = await res.json();
      setTasks(data);
    })();
  }, []);

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
          <ul>
            {tasks.map((task) => (
              <SingleTask task={task} />
            ))}
          </ul>
        </Typography>
      </Grid>
    </>
  );
};

export default DailyTasks;
