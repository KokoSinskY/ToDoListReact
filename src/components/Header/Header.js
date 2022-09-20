import React from "react";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#F9F9F9",
    borderRadius: 50,
    marginTop: "1%",
  },
});

const Header = () => {
  const hour = new Date().getHours();
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.header}>
      <Typography variant="h5">
        {hour <= 12
          ? "Good morning, "
          : hour > 12 && hour < 18
          ? "Good afternoon, "
          : "Good evening, "}
      </Typography>
    </Container>
  );
};

export default Header;
