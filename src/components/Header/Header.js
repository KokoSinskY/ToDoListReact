import React from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const Header = () => {
  const hour = new Date().getHours();

  return (
    <Container
      maxWidth="xs"
      sx={{ backgroundColor: "#F9F9F9", borderRadius: 50, mt: 5, mb: 7 }}
    >
      <Typography variant="h2" py={1}>
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
