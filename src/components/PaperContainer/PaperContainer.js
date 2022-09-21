import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const PaperContainer = () => {
  return (
    // <Grid container xs={12} md={12} lg={12} sx={{ width: "100vw", height: "90vh" }}></Grid>
    // <Container maxWidth="md" component="main" sx={{ height: "90vh" }}>
    <Grid container spacing={5} alignItems="flex-end"></Grid>
    // </Container>
  );
};

export default PaperContainer;
