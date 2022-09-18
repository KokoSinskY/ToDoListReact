import React from "react";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#F9F9F9",
    borderRadius: 50,
  },
});

const Header = () => {
  const hour = new Date().getHours();
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.header}>
      <h2>
        {hour <= 12
          ? "Good morning, "
          : hour > 12 && hour < 18
          ? "Good afternoon, "
          : "Good evening, "}
      </h2>
    </Container>
  );
};

export default Header;
