import teAstroid2024 from "../../../dataAndR_files/TEAstroid24.js";
import PFR2023WRData from "../../../dataAndR_files/PFRWRData/23WRDataPFR.js";

const allIndividualPlayersObjectsArray = [];

teAstroid2024.map((pForpArrays) => {
  // console.log(pForpArrays.Player);
  const test = allIndividualPlayersObjectsArray.find(
    (p) => p.name === pForpArrays.Player
  );
  if (test) {
    // console.log("Player is in the array!");
  } else {
    // console.log("Player is not in the array.");
    let tempPlayerObject = {
      name: pForpArrays.Player,
    };
    allIndividualPlayersObjectsArray.push(tempPlayerObject);
  }
});

teAstroid2024.map((pForpArrays) => {
  // console.log(pForpArrays.Player);
  const test = allIndividualPlayersObjectsArray.find(
    (p) => p.Season === pForpArrays.Season
  );
  if (test) {
    // console.log("Player is in the array!");
  } else {
    // console.log("Player is not in the array.");

    allIndividualPlayersObjectsArray.map((a) => {
      if (a.name === pForpArrays.Player) {
        if (pForpArrays.Season === "2000") {
          // a["2000"] = pForpArrays;

          //
          //

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/G"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap%"];
          if (!+pForpArrays["Snap%"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          //   let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }

          let tempYPRR = +(
            +pForpArrays["REC Yds"] / pForpArrays.routes
          ).toFixed(2);
          if (!+pForpArrays.routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.routes
          ).toFixed(3);

          if (!+pForpArrays.routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yds"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yds"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yds"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yds"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contest Tgts"];
          if (!+pForpArrays["Contest Tgts"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contest Tgts"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Tgt QB Rating"];
          if (!+pForpArrays["Tgt QB Rating"]) {
            tempQBRating = 0;
          }
          if (!+pForpArrays["YAC"]) {
            pForpArrays["YAC"] = 0;
          }
          //   console.log(pForpArrays["Career Year"]);
          a["2000"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays["Career Year"],
            GP: +pForpArrays.G,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target%"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            // ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yds"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yds/REC"],
            ["YAC"]: +pForpArrays["YAC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot%"].slice(0, -1),

            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.G).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
          };
        }
        //
        //
        if (pForpArrays.Season === "2001") {
          //
          //

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/G"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap%"];
          if (!+pForpArrays["Snap%"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          //   let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yds"] / pForpArrays.routes
          ).toFixed(2);
          if (!+pForpArrays.routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.routes
          ).toFixed(3);

          if (!+pForpArrays.routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yds"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yds"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yds"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yds"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contest Tgts"];
          if (!+pForpArrays["Contest Tgts"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contest Tgts"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Tgt QB Rating"];
          if (!+pForpArrays["Tgt QB Rating"]) {
            tempQBRating = 0;
          }
          if (!+pForpArrays["YAC"]) {
            pForpArrays["YAC"] = 0;
          }
          //   console.log(pForpArrays);
          a["2001"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays["Career Year"],
            GP: +pForpArrays.G,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target%"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            // ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yds"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yds/REC"],
            ["YAC"]: +pForpArrays["YAC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot%"].slice(0, -1),

            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.G).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
          };
        }

        //
        //
        if (pForpArrays.Season === "2002") {
          //
          //

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/G"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap%"];
          if (!+pForpArrays["Snap%"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          //   let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yds"] / pForpArrays.routes
          ).toFixed(2);
          if (!+pForpArrays.routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.routes
          ).toFixed(3);

          if (!+pForpArrays.routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yds"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yds"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yds"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yds"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contest Tgts"];
          if (!+pForpArrays["Contest Tgts"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contest Tgts"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Tgt QB Rating"];
          if (!+pForpArrays["Tgt QB Rating"]) {
            tempQBRating = 0;
          }
          if (!+pForpArrays["YAC"]) {
            pForpArrays["YAC"] = 0;
          }
          //   console.log(pForpArrays);
          a["2002"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays["Career Year"],
            GP: +pForpArrays.G,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target%"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            // ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yds"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yds/REC"],
            ["YAC"]: +pForpArrays["YAC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot%"].slice(0, -1),

            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.G).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
          };
        }

        //
        //
        if (pForpArrays.Season === "2021") {
          //
          //

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/G"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap%"];
          if (!+pForpArrays["Snap%"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          //   let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yds"] / pForpArrays.routes
          ).toFixed(2);
          if (!+pForpArrays.routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.routes
          ).toFixed(3);

          if (!+pForpArrays.routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yds"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yds"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yds"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yds"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contest Tgts"];
          if (!+pForpArrays["Contest Tgts"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contest Tgts"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Tgt QB Rating"];
          if (!+pForpArrays["Tgt QB Rating"]) {
            tempQBRating = 0;
          }
          if (!+pForpArrays["YAC"]) {
            pForpArrays["YAC"] = 0;
          }
          // console.log(pForpArrays);
          a["2021"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays["Career Year"],
            GP: +pForpArrays.G,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target%"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            // ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yds"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yds/REC"],
            ["YAC"]: +pForpArrays["YAC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot%"].slice(0, -1),

            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.G).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
          };
        }

        //
        //
        if (pForpArrays.Season === "2022") {
          //
          //

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/G"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap%"];
          if (!+pForpArrays["Snap%"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          //   let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yds"] / pForpArrays.routes
          ).toFixed(2);
          if (!+pForpArrays.routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.routes
          ).toFixed(3);

          if (!+pForpArrays.routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yds"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yds"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yds"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yds"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contest Tgts"];
          if (!+pForpArrays["Contest Tgts"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contest Tgts"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Tgt QB Rating"];
          if (!+pForpArrays["Tgt QB Rating"]) {
            tempQBRating = 0;
          }
          if (!+pForpArrays["YAC"]) {
            pForpArrays["YAC"] = 0;
          }
          //   console.log(pForpArrays["REC 1st Downs"]);
          a["2022"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays["Career Year"],
            GP: +pForpArrays.G,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target%"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            // ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yds"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yds/REC"],
            ["YAC"]: +pForpArrays["YAC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot%"].slice(0, -1),

            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.G).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
          };
        }
        //
        //
        if (pForpArrays.Season === "2023") {
          //
          //

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/G"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap%"];
          if (!+pForpArrays["Snap%"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          //   let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yds"] / pForpArrays.routes
          ).toFixed(2);
          if (!+pForpArrays.routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.routes
          ).toFixed(3);

          if (!+pForpArrays.routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yds"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yds"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yds"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yds"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contest Tgts"];
          if (!+pForpArrays["Contest Tgts"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contest Tgts"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Tgt QB Rating"];
          if (!+pForpArrays["Tgt QB Rating"]) {
            tempQBRating = 0;
          }
          if (!+pForpArrays["YAC"]) {
            pForpArrays["YAC"] = 0;
          }
          //   console.log(pForpArrays);
          a["2023"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays["Career Year"],
            GP: +pForpArrays.G,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target%"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            // ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yds"],
            ["REC Yards/G"]: pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yds/REC"],
            ["YAC"]: +pForpArrays["YAC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot%"].slice(0, -1),

            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.G).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
          };
        }

        //
        //
        //
        //
        //
        //
      }
    });
  }
});

teAstroid2024.map((p) => {
  allIndividualPlayersObjectsArray.map((a) => {
    // console.log(a.name, p.Player);
    if (a.name === p.Player) {
      // console.log(p.Season);
      //   console.log(a);

      if (p.Season === "2000") {
        // console.log(p.Season);

        if (a["2001"]) {
          //   console.log(a["2001"]);
          p.nextSeason = a["2001"];
        }
      }

      if (p.Season === "2001") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2002"]) {
          p.nextSeason = a["2002"];
        }
      }

      if (p.Season === "2002") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2003"]) {
          p.nextSeason = a["2003"];
        }
      }

      if (p.Season === "2003") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2004"]) {
          p.nextSeason = a["2004"];
        }
      }

      if (p.Season === "2004") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2005"]) {
          p.nextSeason = a["2005"];
        }
      }

      if (p.Season === "2005") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2006"]) {
          p.nextSeason = a["2006"];
        }
      }

      if (p.Season === "2006") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2007"]) {
          p.nextSeason = a["2007"];
        }
      }

      if (p.Season === "2007") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2008"]) {
          p.nextSeason = a["2008"];
        }
      }

      if (p.Season === "2008") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2009"]) {
          p.nextSeason = a["2009"];
        }
      }
      if (p.Season === "2009") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2010"]) {
          p.nextSeason = a["2010"];
        }
      }
      if (p.Season === "2010") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2011"]) {
          p.nextSeason = a["2011"];
        }
      }
      if (p.Season === "2011") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2012"]) {
          p.nextSeason = a["2012"];
        }
      }
      if (p.Season === "2012") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2013"]) {
          p.nextSeason = a["2013"];
        }
      }
      if (p.Season === "2013") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2014"]) {
          p.nextSeason = a["2014"];
        }
      }
      if (p.Season === "2014") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2015"]) {
          p.nextSeason = a["2015"];
        }
      }
      if (p.Season === "2015") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2016"]) {
          p.nextSeason = a["2016"];
        }
      }
      if (p.Season === "2016") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2017"]) {
          p.nextSeason = a["2017"];
        }
      }
      if (p.Season === "2017") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2018"]) {
          p.nextSeason = a["2018"];
        }
      }
      if (p.Season === "2018") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2019"]) {
          p.nextSeason = a["2019"];
        }
      }
      if (p.Season === "2019") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2020"]) {
          p.nextSeason = a["2020"];
        }
      }
      if (p.Season === "2020") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2021"]) {
          p.nextSeason = a["2021"];
        }
      }
      if (p.Season === "2021") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2022"]) {
          p.nextSeason = a["2022"];
        }
      }
      if (p.Season === "2022") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2023"]) {
          p.nextSeason = a["2023"];
        }
      }
      if (p.Season === "2023") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2024"]) {
          p.nextSeason = a["2024"];
        }
      }
      if (p.Season === "2024") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2025"]) {
          p.nextSeason = a["2025"];
        }
      }
    }
  });
});

teAstroid2024.map((p) => {
  //   console.log(p);
  //   console.log(+p["Career Year"]);
  p.Season = +p.Season;
  p.Age = +p.Age;
  p.NFLYr = +p.CareerYr;
  p.NFLYr = +p["Career Year"];
  p.GP = +p.G;
  p.PPR = +p["PPR Total"];
  p["PPR/G"] = +p["PPG"];
  p.Snaps = +p.Snaps;
  p["Snaps/G"] = +p["Snaps/G"];
  if (!+p.Snaps) {
    p.Snaps = 0;
    p["Snaps/G"] = 0;
  }
  //   p["Snap %"] = +p["Snap%"];
  //   if (!+p["Snap%"]) {
  //     p["Snap %"] = 0;
  //   }
  p.Routes = +p.routes;
  if (!+p.routes) {
    p.Routes = 0;
    p["Targets/Route"] = 0;
  }
  p["Routes/G"] = +p["Routes/G"];
  if (!+p["Routes/G"]) {
    p["Routes/G"] = 0;
  }
  p.Targets = +p.Targets;
  p["Targets/G"] = +p["Targets/G"];
  p["Target %"] = +p["Target%"].slice(0, -1);
  p["TPRR"] = +p["Targets/Route"];
  p.REC = +p.REC;
  p["REC/G"] = +p["REC/G"];
  p["REC Yards"] = +p["REC Yds"];
  p["REC Yards/G"] = +(p["REC Yards"] / +p.G).toFixed(1);
  if (!p["REC Yards"] || !+p.G) {
    p["REC Yards/G"] = 0;
  }
  p["Yards/REC"] = +p["Yds/REC"];
  p["YAC"] = +p["YAC"];
  if (!+p["YAC"]) {
    p["YAC"] = 0;
  }
  p["YPRR"] = +(+p["REC Yards"] / p.routes).toFixed(2);
  if (!+p.routes || !p["Yards/REC"]) {
    p["YPRR"] = 0;
  }
  p["REC TDs"] = +p["REC TDs"];
  if (p.Season === 2023) {
    PFR2023WRData.map((pfr) => {
      //   console.log(pfr);
      //   console.log(pfr.Player, p.Player);
      if (pfr.Player === p.Player && p.Season === 2023 && pfr.Pos === "TE") {
        // console.log(pfr);
        // console.log(+pfr["1D"]);
        p["REC 1st Downs"] = +pfr["1D"];
        // console.log(p.Player, p.Season, +p["REC 1st Downs"]);
      }
    });
  }
  //   if (p.Season === 2023) {
  //     console.log(+p["REC 1st Downs"]);
  //   }
  p["REC 1Ds"] = +p["REC 1st Downs"];
  let temp1DPerTarget = +(+p["REC 1Ds"] / +p.Targets).toFixed(3);
  p["1D/Target"] = +temp1DPerTarget;
  let temp1DPerRoute = +(+p["REC 1Ds"] / +p.Routes).toFixed(3);
  p["1D/RR"] = +temp1DPerRoute;
  if (!+p.Routes) {
    p["1D/RR"] = 0;
  }
  p["Air Yards"] = +p["Air Yds"];
  if (!+p["Air Yds"]) {
    p["Air Yards"] = 0;
    p["1D/AirYard"] = 0;
  }
  if (p["1D/AirYard"] !== 0) {
    let temp1DPerAirYard = +(+p["REC 1Ds"] / +p["Air Yards"]).toFixed(3);
    p["1D/AirYard"] = +temp1DPerAirYard;
  }
  p.aDOT = +p.aDOT;
  if (!+p.aDOT) {
    p.aDOT = 0;
  }
  p["CT %"] = +p["Contest Tgts"];
  if (!+p["Contest Tgts"]) {
    p["CT %"] = 0;
  }
  p["slot Rate"] = +p["Slot%"].slice(0, -1);
  p["REC EPA/G"] = +(p["REC EPA"] / +p.GP).toFixed(2);
  p.RACR = +p.RACR;
  if (!+p.RACR) {
    p.RACR = 0;
  }
  p.WOPR = +(+p.WOPR.slice(0, -1) / 100).toFixed(3);
  if (!+p.WOPR) {
    p.WOPR = 0;
  }
  p["QB Rating"] = +p["Tgt QB Rating"];
  if (!+p["Tgt QB Rating"]) {
    p["QB Rating"] = 0;
  }
  p["Avg Seperation"] = +p["Separation"];
  if (!+p["Separation"]) {
    p["Avg Seperation"] = 0;
  }
  p["TM RecYards"] = +p["TM RecYds"];
//   console.log(p);
  p["Draft Year"] = +p["Draft Year"];
  p["Draft Round"] = +p["Draft Round"];
  if (!+p["Draft Round"]) {
    p["Draft Round"] = 0;
  }
  p["Draft Pick"] = +p["Draft Pick"];
  if (!+p["Draft Pick"]) {
    p["Draft Pick"] = 0;
  }

  // year N + 1 stuff below
  if (p.nextSeason) {
    p["N1 PPR/G"] = p.nextSeason["PPR/G"];
    p["PPR/G Diff"] = +(p["N1 PPR/G"] - p["PPR/G"]).toFixed(1);
    p["N1 GP"] = p.nextSeason["GP"];
    p["N1 PPR"] = p.nextSeason["PPR"];
    p["N1 Snaps"] = p.nextSeason["Snaps"];
    p["N1 Snaps/G"] = p.nextSeason["Snaps/GP"];
    p["N1 Snap %"] = p.nextSeason["Snap %"];
    p["N1 Routes"] = p.nextSeason["Routes"];
    p["N1 Routes/G"] = p.nextSeason["Routes/G"];
    p["N1 Targets"] = p.nextSeason["Targets"];
    p["N1 Targets/G"] = p.nextSeason["Targets/G"];
    p["tar/G Diff"] = +(p["N1 Targets/G"] - p["Targets/G"]).toFixed(1);
    p["N1 Target %"] = p.nextSeason["Target %"];
    p["Tar % Diff"] = +(p["N1 Target %"] - p["Target %"]).toFixed(1);
    p["N1 TPRR"] = p.nextSeason["TPRR"];
    p["TPRR Diff"] = +(p["N1 TPRR"] - p["TPRR"]).toFixed(1);
    p["N1 REC"] = p.nextSeason["REC"];

    p["REC Diff"] = +(p["N1 REC"] - p["REC"]).toFixed(1);
    p["N1 REC/G"] = +p.nextSeason["REC/G"];
    p["REC/G Diff"] = +(p["N1 REC/G"] - p["REC/G"]).toFixed(1);
    p["N1 REC Yards"] = +p.nextSeason["REC Yards"];
    p["N1 REC Yards/G"] = +(p.nextSeason["REC Yards"] / +p.GP).toFixed(1);

    if (p["REC Yards/G"] && p["N1 REC Yards/G"]) {
      p["REC Yards/G Diff"] = +(p["N1 REC Yards/G"] - p["REC Yards/G"]).toFixed(
        1
      );
    } else {
      p["REC Yards/G Diff"] = 0;
    }
    p["N1 Yards/REC"] = p.nextSeason["Yards/REC"];
    p["N1 Yards/REC"] = p.nextSeason["Yards/REC"];
    if (p["Yards/REC"] && p["N1 Yards/REC"]) {
      p["Yards/REC Diff"] = +(p["N1 Yards/REC"] - p["Yards/REC"]).toFixed(1);
    } else {
      p["Yards/REC Diff"] = 0;
    }
    p["N1 YPRR"] = p.nextSeason["YPRR"];
    p["YPRR Diff"] = +(p["N1 YPRR"] - p["YPRR"]).toFixed(1);
    p["N1 REC TDs"] = p.nextSeason["REC TDs"];
    p["RecTD Diff"] = +(p["N1 REC TDs"] - p["REC TDs"]).toFixed(1);
    p["N1 REC 1Ds"] = +p.nextSeason["REC 1Ds"];
    p["N1 1D/Target"] = p.nextSeason["1D/Target"];
    p["1D/Target Diff"] = +(p["N1 1D/Target"] - p["1D/Target"]).toFixed(4);
    p["N1 1D/RR"] = p.nextSeason["1D/RR"];
    p["1D/RR Diff"] = +(p["N1 1D/RR"] - p["1D/RR"]).toFixed(4);
    p["N1 Air Yards"] = p.nextSeason["Air Yards"];
    p["N1 1D/AirYard"] = p.nextSeason["1D/AirYard"];
    p["1D/AirYard Diff"] = +(p["N1 1D/AirYard"] - p["1D/AirYard"]).toFixed(4);
    p["N1 aDOT"] = p.nextSeason["aDOT"];
    p["aDOT Diff"] = +(p["N1 aDOT"] - p["aDOT"]).toFixed(1);
    p["N1 slot Rate"] = p.nextSeason["slot Rate"];
    p["slot Rate Diff"] = +(p["N1 slot Rate"] - p["slot Rate"]).toFixed(1);
    p["N1 REC EPA/G"] = +p.nextSeason["REC EPA/G"];
    p["REC EPA/G Diff"] = +(p["N1 REC EPA/G"] - p["REC EPA/G"]).toFixed(1);
    p["N1 RACR"] = +p.nextSeason["RACR"];
    p["RACR Diff"] = +(p["N1 RACR"] - p["REC RACR"]).toFixed(1);
    p["N1 WOPR"] = p.nextSeason["WOPR"];
  }
  if (!p.nextSeason) {
    p["N1 PPR/G"] = 0;
    p["N1 GP"] = 0;
    p["N1 PPR"] = 0;
    p["N1 Snaps"] = 0;
    p["N1 Snaps/G"] = 0;
    p["N1 Snap %"] = 0;
    p["N1 Routes"] = 0;
    p["N1 Routes/G"] = 0;
    p["N1 Targets"] = 0;
    p["N1 Targets/G"] = 0;
    p["N1 Target %"] = 0;
    p["N1 TPRR"] = 0;
    p["N1 REC"] = 0;
    p["N1 REC Yards"] = 0;
    p["N1 Yards/REC"] = 0;
    p["N1 YPRR"] = 0;
    p["N1 REC TDs"] = 0;
    p["N1 REC 1Ds"] = 0;
    p["N1 1D/Target"] = 0;
    p["N1 1D/RR"] = 0;
    p["N1 Air Yards"] = 0;
    p["N1 1D/AirYard"] = 0;
    p["N1 aDOT"] = 0;
    p["N1 slot Rate"] = 0;
    p["N1 REC EPA/G"] = 0;
    p["N1 RACR"] = 0;
    // p["N1 WOPR"] = 0
  }
});

// things I want in database

// player name
// season
// team
// age
// NFL Year
// games played
// PPR points
// PPR/G
// points/touch
// Snaps: '-',
// 'Snaps/G': '-',
// 'Snap%': '-',
// routes: '194',
// 'Routes/G': '19.4',
// 'Slot%': '27.3%',
// Targets: '20',
// 'Targets/G': '2.0',
// 'Deep Targets': '2',
// 'Contest Tgts': '-',
// REC: '19',
// 'REC/G': '1.9',
// 'Contest RECs': '-',
// 'REC Yds': '181',
// 'REC Yds/G': '18.1',
// 'Air Yds': '161',
// 'Air Yds/G': '16.1',
// YAC: '45',
// 'YAC/G': '4.5',
// 'Air YAC': '206',
// 'REC TDs': '0',
// 'REC TDs/G': '0.00',
// 'REC 1st Downs': '10',
// 'REC FD/G': '1.0',
// 1D/RR
// 'Air YAC/G': '20.6',
// 'Missed Tkl/G': '-',
// 'Targets/Route': '0.10',
// 'Yds/Route': '0.93',
// 'Air Yds/ Route': '0.83',
// 'Target%': '8.5%',
// 'Catch%': '95.0%',
// 'Deep Ball%': '7.7%',
// 'Contested Catch%': '-',
// 'Yds/REC': '9.5',
// 'Yds/ REC TD': '-',
// 'REC Yds/ATT': '0.53',
// 'Air Yds%': '11.9%',
// aDOT: '8.1',
// 'AVG YAC Over EXP': '-',
// 'TD%': '-',
// 'REC DOM': '4.1%',
// WOPR: '21.10%',
// RACR: '1.12',
// 'REC EPA': '15.1',
// 'Tgt QB Rating': '92.0',
// 'PFF REC Grade': '52.0',
// 'Drop%': '5.0%',
// Cushion: '-',
// Separation: '-',
// 'TM Snaps': '-',
// 'TM PA': '342',
// 'TM RA': '249',
// 'TM RuYds': '1191',
// 'TM RuTDs': '11',
// 'TM OPPs': '289',
// 'TM Targets': '235',
// 'TM RecYds': '2202',
// 'TM Air Yds': '1351',
// 'TM RecTDs': '15',
// Touches: '19',
// 'Scrim Yds': '181',
// 'Scrim TDs': '0',
// 'Return TDs': '0',
// 'Yds/ TM ATT': '0.31',
// EPA: '15.1',
// 'EPA/ Touch': '0.80',
// '2 PT': '0',
// 'Touch/G': '1.9',
// 'Yds/G': '18.1',
// 'TDs/G': '0.00',
// 'Juke Rate': '-',
// 'EPA/G': '1.50',
// 'DLF May ADP': '-',
// 'Weekly Top 5': '0',
// 'Weekly Top 5%': '0.0%',
// 'Weekly Top 12': '0',
// 'Weekly Top 12%': '0.0%',
// 'Weekly Top 24': '3',
// 'Weekly Top 24%': '30.0%',
// 'TOP 5 Szns': '0',
// 'TOP 12 Szns': '0',
// 'TOP 24 Szns': '2',
// '% TOP 5 Szns': '0.0%',
// '% TOP 12 Szns': '0.0%',
// '% TOP 24 Szns': '22.2%',
// 'Draft Year': '2002',
// 'Draft Round': '3',
// 'Draft Pick': '88'

let TEPlayerStatsArray = teAstroid2024;

export default TEPlayerStatsArray;
