import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Button, Card, CardContent } from "@mui/material";
import { CardsData } from "./CardsData";
import { Datajson } from "./Datajson";

export const Nav = () => {
  const [route, setRoute] = useState("datajson");

  return (
    <React.Fragment>
      <Card sx={{ bgcolor: "cadetblue" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" color="success" onClick={() => setRoute(route === "datajson" ? "cardsdata" : "datajson")}>
                {route === "datajson" ? "Cards" : "Table Data"}
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {route === "cardsdata" && <CardsData />}
      {route === "datajson" && <Datajson />}
    </React.Fragment>
  );
};
