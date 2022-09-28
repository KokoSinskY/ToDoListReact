import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { useForm, Controller } from "react-hook-form";

const QuickAddTaskForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      task: "",
    },
  });
  const onSubmit = async (data) => {
    try {
      await fetch("http://localhost:3000/api/task/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ task: "" });
    }
  }, [formState, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container sx={{ boxShadow: "0px 0px 15px rgba(50, 50, 50, 0.75)", pt: 1 }}>
        <Grid item md={10} sm={10} xs={8}>
          <Controller
            name="task"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                id="filled-search"
                label="Quickly add a task"
                type="text"
                variant="standard"
                fullWidth
                sx={{ mx: 1, my: 1 }}
              />
            )}
          />
        </Grid>
        <Grid item md={2} sm={2} xs={4}>
          <Fab type="submit" aria-label="add" color="primary">
            <ArrowUpwardIcon />
          </Fab>
        </Grid>
      </Grid>
    </form>
  );
};

export default QuickAddTaskForm;
