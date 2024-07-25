"use client";

import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import WRPlayerStatsArray from "./data work/buildingAllWRsDataset";
import WRTable from "./components/WRTable";

import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { Content } from "next/font/google";

export default function Home() {
  const [positionToShow, setPositionToShow] = React.useState("WR");

  return (
    <main className={styles.main}>
      <div className={styles.pageTitle}>Filterable Databases</div>
      <div className={styles.positionSelectBTNsWrapper}>
        <buttton
          onClick={() => setPositionToShow("WR")}
          className={styles.positionSelectBTNs}
        >
          WR
        </buttton>
      </div>
      {positionToShow === "WR" ? <WRTable /> : null}
    </main>
  );
}

// npm --max-old-space-size=8192 run dev
