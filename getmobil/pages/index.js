import {Grid} from "@mui/material";
import ProductionList from "components/ProductionList";
import FilterList from "components/FilterList";
import HeaderList from "components/HeaderList";
import Navbar from "components/Navbar";
import styles from "../styles/index.module.scss";
import * as React from "react";


export default function Home() {
  return (
      <>
          <div className={styles.home}>
              <Navbar/>
              <HeaderList/>
              <Grid container spacing={2} className={styles.comp}>
                  <Grid item xs={3} className={styles.filter}>
                      <FilterList/>
                  </Grid>
                  <Grid item xs={9} className={styles.production_list}>
                      <ProductionList/>
                  </Grid>
              </Grid>
          </div>

      </>

  )
}