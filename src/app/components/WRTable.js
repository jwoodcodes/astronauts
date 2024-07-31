"use client";
import React from "react";
import WRPlayerStatsArray from "../data work/buildingAllWRsDataset";
import styles from "../page.module.css";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { Content } from "next/font/google";

export default function WRTable() {
  const [rowData, setRowData] = React.useState([]);

  React.useEffect(() => {
    setRowData(WRPlayerStatsArray);
  }, []);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = React.useState([
    {
      headerName: "Num",
      valueGetter: "node.rowIndex + 1",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      pinned: "left",
      maxWidth: 50,
    },

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
      maxWidth: 90,
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
      maxWidth: 120,
    },
    {
      field: "N1 PPR/G",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 100,
    },
    {
      field: "PPR/G Diff",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 140,
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
      field: "REC Yards/G",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 130,
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
    {
      field: "TM RecYards",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 140,
    },

    {
      field: "N1 GP",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 100,
    },
    {
      field: "N1 PPR",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 100,
    },
    {
      field: "N1 PPR/G",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 120,
    },

    {
      field: "PPR/G Diff",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 160,
    },
    {
      field: "N1 Snaps",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 120,
    },
    {
      field: "N1 Snaps/G",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 130,
    },

    {
      field: "N1 Snap %",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 130,
    },
    {
      field: "N1 Routes",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 130,
    },
    {
      field: "N1 Routes/G",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 130,
    },
    {
      field: "N1 Targets",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 120,
    },

    {
      field: "N1 Targets/G",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 130,
    },
    {
      field: "tar/G Diff",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 130,
    },

    {
      field: "N1 Target %",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 130,
    },
    {
      field: "Tar % Diff",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 130,
    },
    {
      field: "N1 TPRR",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 130,
    },
    {
      field: "TPRR Diff",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 130,
    },

    {
      field: "N1 REC",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 100,
    },
    {
      field: "REC Diff",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 100,
    },
    {
      field: "N1 REC/G",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 120,
    },
    {
      field: "REC/G Diff",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 140,
    },

    {
      field: "N1 REC Yards",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 140,
    },
    {
      field: "N1 REC Yards/G",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 150,
    },

    {
      field: "REC Yards/G Diff",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 160,
    },

    {
      field: "N1 Yards/REC",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 140,
    },
    {
      field: "Yards/REC Diff",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 140,
    },

    {
      field: "N1 YPRR",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 120,
    },
    {
      field: "YPRR Diff",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 120,
    },

    {
      field: "N1 REC TDs",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 130,
    },
    {
      field: "RecTD Diff",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 130,
    },

    {
      field: "N1 REC 1Ds",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 120,
    },
    {
      field: "N1 1D/Target",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 140,
    },
    {
      field: "1D/Target Diff",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 140,
    },
    {
      field: "N1 1D/RR",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 120,
    },
    {
      field: "1D/RR Diff",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 140,
    },
    {
      field: "N1 Air Yards",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 140,
    },

    {
      field: "N1 1D/AirYard",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 140,
    },
    {
      field: "1D/AirYard Diff",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 140,
    },

    {
      field: "N1 aDOT",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 120,
    },
    {
      field: "aDOT Diff",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 120,
    },

    {
      field: "N1 slot Rate",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 140,
    },
    {
      field: "slot Rate Diff",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 140,
    },


    
    {
      field: "N1 REC EPA/G",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 160,
    },
    {
      field: "N1 RACR",
      filter: true,
      floatingFilter: true,
      // flex: 1,
      maxWidth: 120,
    },
    // {
    //   field: "N1 WOPR",
    //   filter: true,
    //   floatingFilter: true,
    //   // flex: 1,
    //   maxWidth: 120,
    // },
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
    <div>
      <h1 className={styles.positionTitle}> WR </h1>
      <div
        className="ag-theme-quartz-dark" // applying the grid theme
        style={{ height: 1500 }}
      >
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
    </div>
  );
}
