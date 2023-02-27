import {Grid} from "@mui/material";
import ProductionList from "components/ProductionList";


export default function Home() {
  return (
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div>xs=8</div>
        </Grid>
        <Grid item xs={9}>
            <ProductionList/>
        </Grid>
      </Grid>
  )
}
