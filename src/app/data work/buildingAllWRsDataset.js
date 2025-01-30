import WRPlayerDataArray from "../../../dataAndR_files/WRPlayerData1.js";
import wrDataAndIDsArray from "../../../dataAndR_files/justWRNamesAndIDs.js";
import PFR2000WRData from "../../../dataAndR_files/PFRWRData/00WRDataPFR.js";
import PFR2001WRData from "../../../dataAndR_files/PFRWRData/01WRDataPFR.js";
import PFR2002WRData from "../../../dataAndR_files/PFRWRData/02WRDataPFR.js";
import PFR2003WRData from "../../../dataAndR_files/PFRWRData/03WRDataPFR.js";
import PFR2004WRData from "../../../dataAndR_files/PFRWRData/04WRDataPFR.js";
import PFR2005WRData from "../../../dataAndR_files/PFRWRData/05WRDataPFR.js";
import PFR2006WRData from "../../../dataAndR_files/PFRWRData/06WRDataPFR.js";
import PFR2007WRData from "../../../dataAndR_files/PFRWRData/07WRDataPFR.js";
import PFR2008WRData from "../../../dataAndR_files/PFRWRData/08WRData.js";
import PFR2009WRData from "../../../dataAndR_files/PFRWRData/09WRDataPFR.js";
import PFR2010WRData from "../../../dataAndR_files/PFRWRData/10WRDataPFR.js";
import PFR2011WRData from "../../../dataAndR_files/PFRWRData/11WRDataPFR.js";
import PFR2012WRData from "../../../dataAndR_files/PFRWRData/12WRDataPFR.js";
import PFR2013WRData from "../../../dataAndR_files/PFRWRData/13WRDataPFR.js";
import PFR2014WRData from "../../../dataAndR_files/PFRWRData/14WRDataPFR.js";
import PFR2015WRData from "../../../dataAndR_files/PFRWRData/15WRDataPFR.js";
import PFR2016WRData from "../../../dataAndR_files/PFRWRData/16WRDataPFR.js";
import PFR2017WRData from "../../../dataAndR_files/PFRWRData/17WRDataPFR.js";
import PFR2018WRData from "../../../dataAndR_files/PFRWRData/18WRDataPFR.js";
import PFR2019WRData from "../../../dataAndR_files/PFRWRData/19WRDataPFR.js";
import PFR2020WRData from "../../../dataAndR_files/PFRWRData/20WRDataPFR.js";
import PFR2021WRData from "../../../dataAndR_files/PFRWRData/21WRDataPFR.js";
import PFR2022WRData from "../../../dataAndR_files/PFRWRData/22WRDataPFR.js";
import PFR2023WRData from "../../../dataAndR_files/PFRWRData/23WRDataPFR.js";

import allWRSnapsData2012to2023 from "../../../dataAndR_files/allWRSnapsData2012to2023.js";

import fromPreviousAstronautsWRData from "../../../dataAndR_files/fromPreviousAstronautsWRData.js";

import PFF2023WRData from "../../../dataAndR_files/PFFWRData/PFF2023WRData.js";
import PFF2023WRRunBlockingData from "../../../dataAndR_files/PFFWRData/PFF2023WRRunBlockingData.js";
import { RSC_PREFETCH_SUFFIX } from "next/dist/lib/constants.js";

import RVTeamOffensiveSnaps2023 from "../../../dataAndR_files/RVTeamOffensiveSnaps2023.js";
import allTargetShareDataFor2023 from "../../../dataAndR_files/allWRTargetShareDataFor2023.js";

import wr23Week1PPRLeaders from "../../../dataAndR_files/wr23WeeklyPPRPointsLeaders/wr23Week1PPRLeaders.js";

const curYear = new Date().getFullYear();

PFR2000WRData.map((pfr00Player) => {
  pfr00Player.season = 2000;
  // console.log(pfr00Player);
});

PFR2001WRData.map((pfr01Player) => {
  pfr01Player.season = 2001;
  // console.log(pfr01Player);
});

PFR2002WRData.map((pfr02Player) => {
  pfr02Player.season = 2002;
  // console.log(pfr02Player);
});

PFR2003WRData.map((pfr03Player) => {
  pfr03Player.season = 2003;
  // console.log(pfr03Player);
});

PFR2004WRData.map((pfr04Player) => {
  pfr04Player.season = 2004;
  // console.log(pfr04Player);
});

PFR2005WRData.map((pfr05Player) => {
  pfr05Player.season = 2005;
  // console.log(pfr05Player);
});
PFR2006WRData.map((pfr06Player) => {
  pfr06Player.season = 2006;
  // console.log(pfr06Player);
});

PFR2007WRData.map((pfr07Player) => {
  pfr07Player.season = 2007;
  // console.log(pfr07Player);
});

PFR2008WRData.map((pfr08Player) => {
  pfr08Player.season = 2008;
  // console.log(pfr08Player);
});

PFR2009WRData.map((pfr09Player) => {
  pfr09Player.season = 2009;
  // console.log(pfr09Player);
});

PFR2010WRData.map((pfr10Player) => {
  pfr10Player.season = 2010;
  // console.log(pfr10Player);
});

PFR2011WRData.map((pfr11Player) => {
  pfr11Player.season = 2011;
  // console.log(pfr11Player);
});

PFR2012WRData.map((pfr12Player) => {
  pfr12Player.season = 2012;
  // console.log(pfr12Player);
});

PFR2013WRData.map((pfr13Player) => {
  pfr13Player.season = 2013;
  // console.log(pfr13Player);
});

PFR2014WRData.map((pfr14Player) => {
  pfr14Player.season = 2014;
  // console.log(pfr14Player);
});

PFR2015WRData.map((pfr15Player) => {
  pfr15Player.season = 2015;
  // console.log(pfr15Player);
});

PFR2016WRData.map((pfr16Player) => {
  pfr16Player.season = 2016;
  // console.log(pfr16Player);
});

PFR2017WRData.map((pfr17Player) => {
  pfr17Player.season = 2017;
  // console.log(pfr17Player);
});

PFR2018WRData.map((pfr18Player) => {
  pfr18Player.season = 2018;
  // console.log(pfr18Player);
});

PFR2019WRData.map((pfr19Player) => {
  pfr19Player.season = 2019;
  // console.log(pfr19Player);
});

PFR2020WRData.map((pfr20Player) => {
  pfr20Player.season = 2020;
  // console.log(pfr20Player);
});

PFR2021WRData.map((pfr21Player) => {
  pfr21Player.season = 2021;
  // console.log(pfr21Player);
});

PFR2022WRData.map((pfr22Player) => {
  pfr22Player.season = 2022;
  // console.log(pfr22Player);
});

PFR2023WRData.map((pfr23Player) => {
  pfr23Player.season = 2023;
  // console.log(pfr23Player);
});

//
///
////
///
//

let allPFRWRData = [
  ...PFR2000WRData,
  ...PFR2001WRData,
  ...PFR2002WRData,
  ...PFR2003WRData,
  ...PFR2004WRData,
  ...PFR2005WRData,
  ...PFR2006WRData,
  ...PFR2007WRData,
  ...PFR2008WRData,
  ...PFR2009WRData,
  ...PFR2010WRData,
  ...PFR2011WRData,
  ...PFR2012WRData,
  ...PFR2013WRData,
  ...PFR2014WRData,
  ...PFR2015WRData,
  ...PFR2016WRData,
  ...PFR2017WRData,
  ...PFR2018WRData,
  ...PFR2019WRData,
  ...PFR2020WRData,
  ...PFR2021WRData,
  ...PFR2022WRData,
  ...PFR2023WRData,
];

// console.log(allPFRWRData);

allPFRWRData.map((player) => {
  if (player.Player.includes("*")) {
    let tempPlayerNameOne = player.Player.replace("*", "");
    player.Player = tempPlayerNameOne;
    // console.log(player.Player);
  }
  if (player.Player.includes("+")) {
    let tempPlayerNameTwo = player.Player.replace("+", "");
    player.Player = tempPlayerNameTwo;
    // console.log(player.Player);
  }
});

//
///
////
///
//

//
///
////
///
//
let WRPlayerStatsArray = [];
WRPlayerDataArray.map((player) => {
  //   console.log(typeof +player['"player_id"'].slice(1, -1));

  let playerID = player['"player_id"'].slice(1, -1);
  wrDataAndIDsArray.map((idAndName) => {
    // console.log(idAndName['"id"']);
    let rawid = idAndName['"id"'];
    let slicedid = rawid.slice(1, -1);
    let numid = +slicedid;
    // console.log(playerID, numid);
    if (playerID === slicedid) {
      //   console.log(player['"player_name"'], idAndName['"name"']);
      player['"player_name"'] = idAndName['"name"'];
      //   player.curAge = +idAndName['"age"'];
      let formatedSeason = +player['"season"'].slice(1, -1);
      //   console.log(formatedSeason);

      //   console.log(curYear);

      //   console.log(player['"player_name"']);
      if (!WRPlayerStatsArray.includes(player)) {
        WRPlayerStatsArray.push(player);
      }
      //   console.log(+idAndName['"age"']);
    }
    // console.log(typeof +slicedid);
  });
});

let result = WRPlayerStatsArray.filter(
  (person, index) =>
    index ===
    WRPlayerStatsArray.findIndex(
      (other) =>
        person['"player_name"'] === other['"player_name"'] &&
        person['"season"'] === other['"season"']
    )
);
// console.log(result);

result.map((player) => {
  // console.log(player);
  // console.log(player['"player_name"']);

  //
  //
  //
  allPFRWRData.map((pfrPlayer) => {
    if (player['"player_name"'].slice(1, -1) === pfrPlayer.Player) {
      // console.log(pfrPlayer);
      // console.log(player['"season"']);
      if (+player['"season"'].slice(1, -1) === pfrPlayer.season) {
        // console.log(pfrPlayer.Tm);

        let tempdbIDOne = player['""'];
        let tempdbIDtwo = +tempdbIDOne.slice(1, -1);
        player.dbID = tempdbIDtwo;
        player.playerName = player['"player_name"'].slice(1, -1);
        player.season = +player['"season"'].slice(1, -1);
        player.team = player['"Tm"'].slice(1, -1);
        player.age = pfrPlayer.Age;
        player.targets = pfrPlayer.Tgt;
        player.receptions = pfrPlayer.Rec;
        player.catchPercentage = pfrPlayer["Ctch%"];
        player.yardsPerReception = pfrPlayer["Y/R"];
        player.TDs = pfrPlayer.TD;
        player.firstDowns = pfrPlayer["1D"];
        player.successPercentage = pfrPlayer["Succ%"];
        player.yardsPerTarget = pfrPlayer["Y/Tgt"];
        player.receptionsPerGame = pfrPlayer["R/G"];
        player.yardsPerGame = pfrPlayer["Y/G"];

        if (pfrPlayer.Tm === "LAR") {
          // console.log(pfrPlayer);
          player.team = "LAR";
          player['"Tm"'] = '"LAR"';
          // console.log(player);
        }
      }
    }
  });
});

let tempYearInLeague2023 = 0;

result.map((player) => {
  fromPreviousAstronautsWRData.map((p) => {
    if (p.Player === player['"player_name"'].slice(1, -1)) {
      // console.log(p);

      // console.log(curYear, p["Draft Yr"]);

      player.careerYearIn2023WillBe = curYear - p["Draft Yr"];
      // counter += 1;
      tempYearInLeague2023 = curYear - p["Draft Yr"];
    }

    // console.log(p.Player, player['"player_name"'].slice(1, -1));
  });

  // console.log(player);
  if (+player['"season"'].slice(1, -1) === 2023) {
    // console.log(player);

    RVTeamOffensiveSnaps2023.map((team) => {
      // console.log(player['"Tm"'].slice(1, -1));

      if (player['"Tm"'].slice(1, -1) === team['"Team"'].slice(1, -1)) {
        // console.log(team);
        // console.log(team['"Team"'].slice(1, -1));
        // console.log(player['"player_name"'].slice(1, -1), team["Team"]);
        // console.log(+team['"TotPlays"'], typeof +team['"TotPlays"']);
        let teamSnapsPerGame = +team['"TotPlays"'] / 17;
        player.teamSnapsPerGame2023 = +teamSnapsPerGame;
        // console.log(+team['"Pass%"'].slice(1, -2));
        let totalTeamPassPlays = +team['"Pass%"'].slice(1, -2) / 100;
        player.totalTeamPassPlays2023 =
          totalTeamPassPlays * +team['"TotPlays"'];
      }
      // console.log(player);
    });

    PFF2023WRData.map((pffPlayer) => {
      // console.log(pffPlayer.player);
      if (player['"player_name"'].slice(1, -1) === pffPlayer.player) {
        // console.log(pffPlayer);

        // console.log(player);

        PFF2023WRRunBlockingData.map((pffRunBlock) => {
          if (player['"player_name"'].slice(1, -1) === pffRunBlock.player) {
            // console.log(pffRunBlock);
            if (!pffPlayer.totalSnaps || pffPlayer.totalSnaps === 0) {
              pffPlayer.totalSnaps =
                +pffRunBlock.snap_counts_run_play + +pffPlayer.pass_plays;
            }
          }
        });

        //

        allTargetShareDataFor2023.map((targetShare) => {
          // console.log(targetShare.NAME);
          if (
            player['"player_name"'].slice(1, -1) ===
            targetShare["NAME"].slice(1, -1)
          ) {
            // console.log(
            //   +targetShare["TM TGT %"],
            //   typeof +targetShare["TM TGT %"]
            // );
            player.targetShare2023 = +targetShare["TM TGT %"];
          }
        });

        if (!player.careerYearIn2023WillBe) {
          player.careerYearIn2023WillBe = 1;
        }
        if (player['"player_name"'].slice(1, -1) === "A.J. Brown") {
          player.careerYearIn2023WillBe = 5;
        }
        if (player['"player_name"'].slice(1, -1) === "Amon-Ra St. Brown") {
          player.careerYearIn2023WillBe = 3;
        }
        if (player['"player_name"'].slice(1, -1) === "Mike Williams") {
          player.careerYearIn2023WillBe = 7;
        }
        if (player['"player_name"'].slice(1, -1) === "K.J. Osborn") {
          player.careerYearIn2023WillBe = 4;
        }
        if (player['"player_name"'].slice(1, -1) === "Robbie Chosen") {
          player.careerYearIn2023WillBe = 8;
        }
        if (player['"player_name"'].slice(1, -1) === "Equanimeous St. Brown") {
          player.careerYearIn2023WillBe = 6;
        }

        // console.log(
        //   player['"player_name"'].slice(1, -1),
        //   player.careerYearIn2023WillBe,
        //   typeof player.careerYearIn2023WillBe
        // );

        let snapsPerGame = +(
          +pffPlayer.totalSnaps / +player['"Games"']
        ).toFixed(1);

        let snapPercent2023 = +(
          snapsPerGame / +player.teamSnapsPerGame2023
        ).toFixed(3);

        let tempCatchPercentTwo = 0;

        if (player.catchPercentage) {
          let tempCatchPercentOne = player.catchPercentage;
          tempCatchPercentTwo = tempCatchPercentOne.slice(0, -1);
        }

        let tempADotOne = pffPlayer.avg_depth_of_target;
        let tempADoTTwo = tempADotOne.slice(1, -1);

        // console.log(tempCatchPercentTwo);
        // console.log(
        //   +player.teamTotalOffensiveSnaps2023,
        //   +pffPlayer.totalSnaps,
        //   snapPercent2023
        // );
        // console.log(player);
        // console.log(player['"PPR_Points"']);

        if (!+player['"WOPR"']) {
          player['"WOPR"'] = 0;
        }

        if (!+player['"EPA"']) {
          player['"EPA"'] = 0;
        }

        // N + 1
        // if (p.nextSeason) {
        //   p["N+1 PPR/G"] = p.nextSeason["PPR/G"];
        // }
        // if (!p.nextSeason) {
        //   p["N+1 PPR/G"] = "-";
        // }
        player.top2Weeks = [];
        player.top5Weeks = [];
        player.top12Weeks = [];
        player.top24Weeks - [];

        wr23Week1PPRLeaders.map((wl) => {
          // console.log(wl['"Player"'], player['"player_name"'].slice(1, -1));
          if (wl['"Player"'] === player['"player_name"']) {
            let tempOne = wl['"#"'].slice(1, -1);
            let tempTwo = +tempOne;
            // console.log(tempTwo);
            if (tempTwo < 3) {
              player.top2Weeks.push(1);
            }
            if (tempTwo < 6) {
              player.top5Weeks.push(1);
              // console.log(player);
            }
            if (tempTwo < 13) {
              player.top12Weeks.push(1);
            }
            if (tempTwo < 25) {
              player.top12Weeks.push(1);
            }
          }
        });

        fromPreviousAstronautsWRData.push({
          Player: player['"player_name"'].slice(1, -1),
          Season: +player['"season"'].slice(1, -1),
          altSeasonForIndividualPlayerArrays: "2023",
          Team: player['"Tm"'].slice(1, -1),
          Age: +player.age,
          NFLYr: player.careerYearIn2023WillBe,
          GP: +player['"Games"'],
          PPR: +player['"PPR_Points"'],
          ["PPR/G"]: +player['"FPPG"'],
          Snaps: pffPlayer.totalSnaps,
          "Snaps/GP": +(+pffPlayer.totalSnaps / +player['"Games"']).toFixed(1),
          ["Snap %"]: +(snapPercent2023 * 100).toFixed(1),
          Routes: +pffPlayer.routes,
          ["Routes/G"]: +(+pffPlayer.routes / +player['"Games"']).toFixed(1),
          Targets: +pffPlayer.targets,
          ["Targets/G"]: +(+pffPlayer.targets / +player['"Games"']).toFixed(1),
          ["Target %"]: player.targetShare2023,
          ["TPRR"]: +(+pffPlayer.targets / +pffPlayer.routes).toFixed(3),
          ["Catch %"]: +tempCatchPercentTwo,
          REC: +player.receptions,
          ["REC/G"]: +(+player.receptions / +player['"Games"']).toFixed(1),
          ["REC Yards"]: +player['"Rec_Yards"'],
          ["Yards/REC"]: +(+player['"Rec_Yards"'] / +player.receptions).toFixed(
            1
          ),
          ["YPRR"]: +(+player['"Rec_Yards"'] / +pffPlayer.routes).toFixed(2),
          ["REC TDs"]: +pffPlayer.touchdowns,
          ["REC 1Ds"]: +player.firstDowns,
          ["1D/Target"]: +(+player.firstDowns / +pffPlayer.targets).toFixed(3),
          ["1D/RR"]: +(+player.firstDowns / +pffPlayer.routes).toFixed(3),
          ["Air Yards"]: +player['"Air_Yards"'],
          ["1D/AirYard"]: +(
            +player.firstDowns / +player['"Air_Yards"']
          ).toFixed(3),
          aDOT: +tempADotOne,
          ["CT %"]: +pffPlayer.contested_targets,
          ["slot Rate"]: +pffPlayer.slot_rate,

          ["REC EPA/G"]: +(+player['"EPA"'] / +player['"Games"']).toFixed(2),
          RACR: +(+player['"RACR"']).toFixed(2),
          WOPR: +(+player['"WOPR"']).toFixed(2),
          ["QB Rating"]: +pffPlayer.targeted_qb_rating,
        });
      }
    });

    // console.log(player['"player_name"'].slice(1, -1), counter);
    // console.log(player);
  }
});

const allIndividualPlayersObjectsArray = [];

// console.log(fromPreviousAstronautsWRData);

fromPreviousAstronautsWRData.map((pForpArrays) => {
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

fromPreviousAstronautsWRData.map((pForpArrays) => {
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
          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2000"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }

        if (pForpArrays.Season === "2001") {
          // a["2001"] = pForpArrays;

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2001"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2002") {
          // a["2002"] = pForpArrays;

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2002"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2003") {
          // a["2003"] = pForpArrays;

          // a["2002"] = pForpArrays;

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2003"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2004") {
          // a["2004"] = pForpArrays;
          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);
          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2004"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,
            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],
            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2005") {
          // a["2005"] = pForpArrays;

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2005"] = {
            player: pForpArrays.Player,

            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2006") {
          // a["2006"] = pForpArrays;

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2006"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2007") {
          // a["2007"] = pForpArrays;

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2007"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2008") {
          // a["2008"] = pForpArrays;

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2008"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2009") {
          // a["2009"] = pForpArrays;

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2009"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2010") {
          // a["2010"] = pForpArrays;

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2010"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2011") {
          // a["2011"] = pForpArrays;

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2011"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2012") {
          // a["2012"] = pForpArrays;

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2012"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2013") {
          // a["2013"] = pForpArrays;

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2013"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }

        if (pForpArrays.Season === "2014") {
          // a["2014"] = pForpArrays;

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2014"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }

        if (pForpArrays.Season === "2015") {
          // a["2015"] = pForpArrays;

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2015"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2016") {
          // a["2016"] = pForpArrays;
          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);
          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2016"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,
            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],
            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2017") {
          // a["2017"] = pForpArrays;

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2017"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2018") {
          // a["2018"] = pForpArrays;

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2018"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2019") {
          // a["2019"] = pForpArrays;

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          // console.log(typeof +pForpArrays["Catch %"].slice(0, -1));
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);

          // if (!+pForpArrays["Catch %"]) {
          //   let tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }

          a["2019"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2020") {
          // a["2020"] = pForpArrays;

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2020"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2021") {
          // a["2021"] = pForpArrays;

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2021"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2022") {
          // a["2022"] = pForpArrays;

          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);

          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2022"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,

            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],

            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.altSeasonForIndividualPlayerArrays === "2023") {
          // console.log(pForpArrays);

          // a["2023"] = pForpArrays;
          // let tempSnaps = +pForpArrays.Snaps;
          // let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          // if (!+pForpArrays.Snaps) {
          //   tempSnaps = 0;
          //   tempSnapsPerGame = 0;
          // }
          // let tempSnapPerecent = pForpArrays["Snap %"];
          // if (!+pForpArrays["Snap %"]) {
          //   tempSnapPerecent = "0%";
          // }
          // let tempRoutes = +pForpArrays.Routes;
          // let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          // if (!+pForpArrays.Routes) {
          //   tempRoutes = 0;
          //   tempTargetsPerRoute = 0;
          // }
          // let tempRoutesPerGame = +pForpArrays["Routes/G"];
          // if (!+pForpArrays["Routes/G"]) {
          //   tempRoutesPerGame = 0;
          // }
          // let tempCatchPercent = +pForpArrays["Catch %"];
          // // if (!+pForpArrays["Catch %"]) {
          // //   tempCatchPercent = "0%";
          // // }
          // let tempYPRR = +(
          //   +pForpArrays["REC Yards"] / pForpArrays.Routes
          // ).toFixed(2);
          // if (!+pForpArrays.Routes) {
          //   tempYPRR = 0;
          // }
          // // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          // let temp1DPerTarget = +(
          //   +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          // ).toFixed(3);
          // let temp1DPerRoute = +(
          //   +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          // ).toFixed(3);
          // if (!+pForpArrays.Routes) {
          //   temp1DPerRoute = 0;
          // }
          // let tempAirYards = +pForpArrays["Air Yards"];
          // let temp1DPerAirYard = +(
          //   +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          // ).toFixed(3);
          // pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          // if (!+pForpArrays["Air Yards"]) {
          //   tempAirYards = 0;
          //   temp1DPerAirYard = 0;
          // }
          // if (pForpArrays["1D/AirYard"] !== 0) {
          //   let temp1DPerAirYard = +(
          //     +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          //   ).toFixed(3);
          //   pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          // }
          // let tempContstedTargets = +pForpArrays["Contested Targets"];
          // if (!+pForpArrays["Contested Targets"]) {
          //   tempContstedTargets = 0;
          // }
          // if (!+pForpArrays.aDOT) {
          //   pForpArrays.aDOT = 0;
          // }
          // if (!+pForpArrays["Contested Targets"]) {
          //   pForpArrays["CT %"] = 0;
          // }
          // if (!+pForpArrays.RACR) {
          //   pForpArrays.RACR = 0;
          // }
          // if (!+pForpArrays.WOPR) {
          //   pForpArrays.WOPR = "0%";
          // }
          // let tempQBRating = +pForpArrays["Targeted QB Rating"];
          // if (!+pForpArrays["Targeted QB Rating"]) {
          //   tempQBRating = 0;
          // }
          a["2023"] = {
            player: pForpArrays.Player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: pForpArrays.NFLYr,
            GP: +pForpArrays.GP,
            PPR: pForpArrays.PPR,
            ["PPR/G"]: pForpArrays["PPR/G"],
            Snaps: pForpArrays.Snaps,
            ["Snaps/GP"]: pForpArrays["Snaps/GP"],
            ["Snap %"]: pForpArrays["Snap %"],
            Routes: pForpArrays.Routes,
            ["Routes/G"]: pForpArrays["Routes/G"],
            Targets: pForpArrays.Targets,
            ["Targets/G"]: pForpArrays["Targets/G"],
            ["Target %"]: pForpArrays["Target %"],
            ["TPRR"]: pForpArrays.TPRR,
            //
            ["Catch %"]: pForpArrays["Catch %"],
            REC: pForpArrays.REC,
            ["REC/G"]: pForpArrays["REC/G"],
            ["REC Yards"]: pForpArrays["REC Yards"],
            ["Yards/REC"]: pForpArrays["Yards/REC"],
            ["YPRR"]: pForpArrays.YPRR,
            ["REC TDs"]: pForpArrays["REC TDs"],
            ["REC 1Ds"]: pForpArrays["REC 1Ds"],
            ["1D/Target"]: pForpArrays["1D/Target"],
            ["1D/RR"]: pForpArrays["1D/RR"],
            ["Air Yards"]: pForpArrays["Air Yards"],
            ["1D/AirYard"]: pForpArrays["1D/AirYard"],
            aDOT: pForpArrays.aDOT,
            ["CT %"]: pForpArrays["CT %"],
            ["slot Rate"]: pForpArrays["slot Rate"],
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: pForpArrays["REC EPA/G"],
            RACR: pForpArrays.RACR,
            WOPR: (pForpArrays.WOPR / 100).toFixed(3),
            ["QB Rating"]: pForpArrays["QB Rating"],
          };
        }
        if (pForpArrays.Season === "2024") {
          // a["2024"] = pForpArrays;
          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);
          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2024"] = {
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,
            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],
            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2025") {
          // a["2025"] = pForpArrays;
          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);
          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2025"] = {
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,
            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],
            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2026") {
          // a["2026"] = pForpArrays;
          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);
          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2026"] = {
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,
            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],
            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }
        if (pForpArrays.Season === "2027") {
          // a["2027"] = pForpArrays;
          let tempSnaps = +pForpArrays.Snaps;
          let tempSnapsPerGame = +pForpArrays["Snaps/GP"];
          if (!+pForpArrays.Snaps) {
            tempSnaps = 0;
            tempSnapsPerGame = 0;
          }
          let tempSnapPerecent = pForpArrays["Snap %"];
          if (!+pForpArrays["Snap %"]) {
            tempSnapPerecent = "0%";
          }
          let tempRoutes = +pForpArrays.Routes;
          let tempTargetsPerRoute = +pForpArrays["Targets/Route"];
          if (!+pForpArrays.Routes) {
            tempRoutes = 0;
            tempTargetsPerRoute = 0;
          }
          let tempRoutesPerGame = +pForpArrays["Routes/G"];
          if (!+pForpArrays["Routes/G"]) {
            tempRoutesPerGame = 0;
          }
          let tempCatchPercent = +pForpArrays["Catch %"].slice(0, -1);
          // if (!+pForpArrays["Catch %"]) {
          //   tempCatchPercent = "0%";
          // }
          let tempYPRR = +(
            +pForpArrays["REC Yards"] / pForpArrays.Routes
          ).toFixed(2);
          if (!+pForpArrays.Routes) {
            tempYPRR = 0;
          }
          // console.log(pForpArrays, typeof +pForpArrays['REC 1st Downs']);
          let temp1DPerTarget = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Targets
          ).toFixed(3);
          let temp1DPerRoute = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays.Routes
          ).toFixed(3);
          if (!+pForpArrays.Routes) {
            temp1DPerRoute = 0;
          }
          let tempAirYards = +pForpArrays["Air Yards"];
          let temp1DPerAirYard = +(
            +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
          ).toFixed(3);
          pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          if (!+pForpArrays["Air Yards"]) {
            tempAirYards = 0;
            temp1DPerAirYard = 0;
          }
          if (pForpArrays["1D/AirYard"] !== 0) {
            let temp1DPerAirYard = +(
              +pForpArrays["REC 1st Downs"] / +pForpArrays["Air Yards"]
            ).toFixed(3);
            pForpArrays["1D/AirYard"] = +temp1DPerAirYard;
          }
          let tempContstedTargets = +pForpArrays["Contested Targets"];
          if (!+pForpArrays["Contested Targets"]) {
            tempContstedTargets = 0;
          }
          if (!+pForpArrays.aDOT) {
            pForpArrays.aDOT = 0;
          }
          if (!+pForpArrays["Contested Targets"]) {
            pForpArrays["CT %"] = 0;
          }
          if (!+pForpArrays.RACR) {
            pForpArrays.RACR = 0;
          }
          if (!+pForpArrays.WOPR) {
            pForpArrays.WOPR = "0%";
          }
          let tempQBRating = +pForpArrays["Targeted QB Rating"];
          if (!+pForpArrays["Targeted QB Rating"]) {
            tempQBRating = 0;
          }
          a["2027"] = {
            player: pForpArrays.player,
            Season: +pForpArrays.Season,
            Age: +pForpArrays.Age,
            NFLYr: +pForpArrays.CareerYr,
            GP: +pForpArrays.GP,
            PPR: +pForpArrays["PPR Total"],
            ["PPR/G"]: +pForpArrays["PPG"],
            Snaps: tempSnaps,
            ["Snaps/GP"]: tempSnapsPerGame,
            ["Snap %"]: +tempSnapPerecent.slice(0, -1),
            Routes: tempRoutes,
            ["Routes/G"]: tempRoutesPerGame,
            Targets: +pForpArrays.Targets,
            ["Targets/G"]: +pForpArrays["Targets/G"],
            ["Target %"]: +pForpArrays["Target %"].slice(0, -1),
            ["TPRR"]: tempTargetsPerRoute,
            //
            ["Catch %"]: +tempCatchPercent,
            REC: +pForpArrays.REC,
            ["REC/G"]: +pForpArrays["REC/G"],
            ["REC Yards"]: +pForpArrays["REC Yards"],
            ["REC Yards/G"]: +pForpArrays["REC Yards/G"],
            ["Yards/REC"]: +pForpArrays["Yards/REC"],
            ["YPRR"]: tempYPRR,
            ["REC TDs"]: +pForpArrays["REC TDs"],
            ["REC 1Ds"]: +pForpArrays["REC 1st Downs"],
            ["1D/Target"]: +temp1DPerTarget,
            ["1D/RR"]: +temp1DPerRoute,
            ["Air Yards"]: tempAirYards,
            ["1D/AirYard"]: +temp1DPerAirYard,
            aDOT: +pForpArrays.aDOT,
            ["CT %"]: tempContstedTargets,
            ["slot Rate"]: +pForpArrays["Slot %"].slice(0, -1),
            ["TM RecYards"]: +pForpArrays["TM RecYards"],
            ["REC EPA/G"]: +(pForpArrays["REC EPA"] / +pForpArrays.GP).toFixed(
              2
            ),
            RACR: +pForpArrays.RACR,
            WOPR: +(+pForpArrays.WOPR.slice(0, -1) / 100).toFixed(3),
            ["QB Rating"]: tempQBRating,
            ["Avg Seperation"]: +pForpArrays["AVG Seperation"],
          };
        }

        // if (pForpArrays.Season === "2000") {
        //   console.log(a["2000"], a["2001"]);
        //   pForpArrays.nPlusOneSeason = a["2001"];
        // }
      }
    });
  }
});

fromPreviousAstronautsWRData.map((p) => {
  allIndividualPlayersObjectsArray.map((a) => {
    // console.log(a.name, p.Player);
    if (a.name === p.Player) {
      // console.log(p.Season);
      // console.log(a);

      if (p.Season === "2000") {
        // console.log(p.Season);
        // console.log(a["2001"]);
        if (a["2001"]) {
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

// console.log(allIndividualPlayersObjectsArray);

fromPreviousAstronautsWRData.map((p) => {
  // console.log(p);
  if (p.Season !== 2023) {
    p.Season = +p.Season;
    p.Age = +p.Age;
    p.NFLYr = +p.CareerYr;
    p.GP = +p.GP;
    p.PPR = +p["PPR Total"];
    p["PPR/G"] = +p["PPG"];
    p.Snaps = +p.Snaps;
    p["Snaps/GP"] = +p["Snaps/GP"];
    if (!+p.Snaps) {
      p.Snaps = 0;
      p["Snaps/GP"] = 0;
    }
    let tempSnapPercentOne = p["Snap %"].slice(0, -1);
    let tempSnapPercentTwo = +tempSnapPercentOne;
    p["Snap %"] = tempSnapPercentTwo;
    if (!+p["Snap %"]) {
      p["Snap %"] = 0;
    }

    p.Routes = +p.Routes;
    if (!+p.Routes) {
      p.Routes = 0;
      p["Targets/Route"] = 0;
    }

    p["Routes/G"] = +p["Routes/G"];
    if (!+p["Routes/G"]) {
      p["Routes/G"] = 0;
    }

    p.Targets = +p.Targets;
    p["Targets/G"] = +p["Targets/G"];
    p["Target %"] = +p["Target %"].slice(0, -1);
    p["TPRR"] = +p["Targets/Route"];

    //

    p["Catch %"] = +p["Catch %"].slice(0, -1);
    if (!+p["Catch %"]) {
      p["Catch %"] = 0;
    }
    p.REC = +p.REC;
    p["REC/G"] = +p["REC/G"];
    p["REC Yards"] = +p["REC Yards"];
    p["REC Yards/G"] = +(p["REC Yards"] / +p.GP).toFixed(1);
    if (!p["REC Yards"] || !+p.GP) {
      p["REC Yards/G"] = 0;
    }

    p["Yards/REC"] = +p["Yards/REC"];
    p["YPRR"] = +(+p["REC Yards"] / p.Routes).toFixed(2);
    if (!+p.Routes) {
      p["YPRR"] = 0;
    }
    p["REC TDs"] = +p["REC TDs"];
    p["REC 1Ds"] = +p["REC 1st Downs"];
    // console.log(typeof +p.Routes);
    let temp1DPerTarget = +(+p["REC 1Ds"] / +p.Targets).toFixed(3);
    p["1D/Target"] = +temp1DPerTarget;
    let temp1DPerRoute = +(+p["REC 1Ds"] / +p.Routes).toFixed(3);
    p["1D/RR"] = +temp1DPerRoute;
    if (!+p.Routes) {
      p["1D/RR"] = 0;
    }
    p["Air Yards"] = +p["Air Yards"];
    if (!+p["Air Yards"]) {
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
    p["CT %"] = +p["Contested Targets"];
    if (!+p["Contested Targets"]) {
      p["CT %"] = 0;
    }

    p["slot Rate"] = +p["Slot %"].slice(0, -1);
    // if (!+p["Slot %"]) {
    //   p["slot Rate"] = 0;
    // }
    p["REC EPA/G"] = +(p["REC EPA"] / +p.GP).toFixed(2);
    p.RACR = +p.RACR;
    if (!+p.RACR) {
      p.RACR = 0;
    }
    p.WOPR = +(+p.WOPR.slice(0, -1) / 100).toFixed(3);
    if (!+p.WOPR) {
      p.WOPR = 0;
    }
    p["QB Rating"] = +p["Targeted QB Rating"];
    if (!+p["Targeted QB Rating"]) {
      p["QB Rating"] = 0;
    }
    p["Avg Seperation"] = +p["AVG Seperation"];
    p["TM RecYards"] = +p["TM RecYards"];
    // console.log(p);
    p["Draft Year"] = +p["Draft Yr"];
    p["Draft Round"] = +p["Round"];
    if (!+p["Round"]) {
      p["Draft Round"] = 0;
    }
    p["Draft Pick"] = +p["Pick"];
    if (!+p["Pick"]) {
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
      p["TPRR Diff"] = +(p["N1 TPRR"] - p["TPRR"]).toFixed(4);
      p["N1 REC"] = p.nextSeason["REC"];
      p["REC Diff"] = +(p["N1 REC"] - p["REC"]).toFixed(1);
      p["N1 REC/G"] = p.nextSeason["REC/G"];
      p["REC/G Diff"] = +(p["N1 REC/G"] - p["REC/G"]).toFixed(1);
      p["N1 REC Yards"] = p.nextSeason["REC Yards"];
      p["N1 REC Yards/G"] = +p.nextSeason["REC Yards/G"];

      if (p["REC Yards/G"] && p["N1 REC Yards/G"]) {
        p["REC Yards/G Diff"] = +(
          p["N1 REC Yards/G"] - p["REC Yards/G"]
        ).toFixed(1);
      } else {
        p["REC Yards/G Diff"] = 0;
      }
      // console.log(p["REC Yards/G Diff"]);
      p["N1 Yards/REC"] = p.nextSeason["Yards/REC"];
      if (p["Yards/REC"] && p["N1 Yards/REC"]) {
        p["Yards/REC Diff"] = +(p["N1 Yards/REC"] - p["Yards/REC"]).toFixed(1);
      } else {
        p["Yards/REC Diff"] = 0;
      }
      p["N1 YPRR"] = p.nextSeason["YPRR"];
      p["YPRR Diff"] = +(p["N1 YPRR"] - p["YPRR"]).toFixed(2);
      p["N1 REC TDs"] = p.nextSeason["REC TDs"];
      p["RecTD Diff"] = +(p["N1 REC TDs"] - p["REC TDs"]).toFixed(1);
      p["N1 REC 1Ds"] = p.nextSeason["REC 1Ds"];
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
      (p["N1 TM RecYards"] = +p.nextSeason["TM RecYards"]),
        (p["TM RecYards Diff"] = +(
          p["N1 TM RecYards"] - p["TM RecYards"]
        ).toFixed(1));
      // console.log(p["N1 TM RecYards"], p["TM RecYards"]);
      p["N1 REC EPA/G"] = p.nextSeason["REC EPA/G"];
      p["REC EPA/G Diff"] = +(p["N1 REC EPA/G"] - p["REC EPA/G"]).toFixed(1);
      p["N1 RACR"] = p.nextSeason["RACR"];
      p["RACR Diff"] = +(p["N1 RACR"] - p.RACR).toFixed(1);
      // p["N1 WOPR"] = p.nextSeason["WOPR"];
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
      p["N1 REC Yards/G"] = 0;
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
  }
  //
  // things I still want to add

  // year n + 1 PPR per game

  //  'AVG Seperation' for 2023

  // player_id

  //
  //
  //
  //
  //

  if (p.Season === 2023) {
    // console.log(p);
  }
});

fromPreviousAstronautsWRData.map((p) => {
  // console.log(p);
  if (p.Season === 2022) {
    // console.log(p);
  }
});

WRPlayerStatsArray = fromPreviousAstronautsWRData;

export default WRPlayerStatsArray;
