import React from "react";
import { Grid } from "@mui/material";
import translator from "../../helper/translator";

function SmallTypeBox(props: { name: string }) {
  const { name } = props;
  return (
    <Grid item sm={6} md={6}>
      <div>
        <img src={`img/poke-types/${name}.png`} alt={name} />
      </div>
      <span style={{ marginLeft: "12px" }}>{translator.get(name)}</span>
    </Grid>
  );
}

export default SmallTypeBox;
