import React from "react";
import Container from "@mui/material/Container";

const Header = () => {
  const hour = new Date().getHours();

  return (
    <Container maxWidth="sm" sx={{ backgroundColor: "#F9F9F9", borderRadius: 50 }}>
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
