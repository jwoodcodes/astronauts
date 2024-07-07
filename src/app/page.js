"use client";

import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import WRPlayerStatsArray from "./data work/buildingAllWRsDataset";

import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { Content } from "next/font/google";

// import { ModuleRegistry } from "@ag-grid-community/core";
// import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
// ModuleRegistry.registerModules([ClientSideRowModelModule]);

export default function Home() {
  const [rowData, setRowData] = React.useState([]);

  React.useEffect(() => {
    setRowData(WRPlayerStatsArray);
  }, []);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = React.useState([
    {
      field: "Player",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      pinned: "left",
      maxWidth: 145,
    },
    {
      field: "Season",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      pinned: "left",
      maxWidth: 100,
    },

    {
      field: "Team",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 90,
    },
    {
      field: "Age",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 90,
    },
    {
      field: "NFLYr",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 90,
    },
    {
      field: "GP",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 90,
    },
    {
      field: "PPR",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 90,
    },
    {
      field: "PPR/G",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 90,
    },
    {
      field: "N+1 PPR/G",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 100,
    },

    {
      field: "Snaps",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 90,
    },
    {
      field: "Snaps/GP",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 120,
    },
    {
      field: "Snap %",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 100,
    },
    {
      field: "Routes",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 100,
    },
    {
      field: "Routes/G",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 120,
    },
    {
      field: "Targets",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 100,
    },
    {
      field: "Targets/G",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 120,
    },
    {
      field: "Target %",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 120,
    },
    {
      field: "TPRR",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 100,
    },
    {
      field: "Catch %",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 100,
    },
    {
      field: "REC",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 90,
    },
    {
      field: "REC/G",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 90,
    },
    {
      field: "REC Yards",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 120,
    },
    {
      field: "Yards/REC",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 120,
    },
    {
      field: "YPRR",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 100,
    },

    {
      field: "REC TDs",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 110,
    },
    {
      field: "REC 1Ds",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 120,
    },
    {
      field: "1D/Target",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 130,
    },
    {
      field: "1D/RR",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 100,
    },
    {
      field: "Air Yards",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 110,
    },
    {
      field: "1D/AirYard",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 140,
    },
    {
      field: "aDOT",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 90,
    },
    {
      field: "CT %",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 100,
    },

    {
      field: "slot Rate",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 100,
    },

    {
      field: "REC EPA/G",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 100,
    },
    {
      field: "RACR",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 100,
    },
    {
      field: "WOPR",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 100,
    },
    {
      field: "QB Rating",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 100,
    },
    {
      field: "Avg Seperation",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 100,
    },
  ]);

  const gridOptions = {
    pagination: true,
    paginationPageSize: 500,
    paginationPageSizeSelector: [200, 500, 1000],

    // other grid options ...
  };

  const defaultColDef = {
    flex: 1,
  };

  return (
    <main className={styles.main}>
      <div className={styles.pageTitle}> Filterable WR Database</div>
      <div
        className="ag-theme-quartz-dark" // applying the grid theme
        style={{ height: 1000 }}
      >
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
    </main>
  );
}

// npm --max-old-space-size=8192 run dev
