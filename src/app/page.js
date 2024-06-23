"use client";

import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import WRPlayerStatsArray from "./data work/buildingAllWRsDataset";

import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

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
    },
    {
      field: "Season",
      filter: true,
      floatingFilter: true,
    },

    {
      field: "Team",
      filter: true,
      floatingFilter: true,
    },
    {
      field: "Age",
      filter: true,
      floatingFilter: true,
    },
    {
      field: "CareerYr",
      filter: true,
      floatingFilter: true,
    },
    {
      field: "GP",
      filter: true,
      floatingFilter: true,
    },
    {
      field: "Snaps",
      filter: true,
      floatingFilter: true,
    },
    {
      field: "Snaps/GP",
      filter: true,
      floatingFilter: true,
    },
    {
      field: "Snap %",
      filter: true,
      floatingFilter: true,
    },
    {
      field: "Routes",
      filter: true,
      floatingFilter: true,
    },
    {
      field: "Routes/G",
      filter: true,
      floatingFilter: true,
    },
    {
      field: "Targets",
      filter: true,
      floatingFilter: true,
    },
    {
      field: "Targets/G",
      filter: true,
      floatingFilter: true,
    },
    {
      field: "Target %",
      filter: true,
      floatingFilter: true,
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
        style={{ height: 1000 }} // the grid will fill the size of the parent container
      >
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
    </main>
  );
}
