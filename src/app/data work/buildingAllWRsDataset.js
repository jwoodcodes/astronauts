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

        // console.log(
        //   +player.teamTotalOffensiveSnaps2023,
        //   +pffPlayer.totalSnaps,
        //   snapPercent2023
        // );
        // console.log(player);

        fromPreviousAstronautsWRData.push({
          Player: player['"player_name"'].slice(1, -1),
          Season: +player['"season"'].slice(1, -1),
          Team: player['"Tm"'].slice(1, -1),
          Age: +player.age,
          NFLYr: player.careerYearIn2023WillBe,
          GP: +player['"Games"'],
          Snaps: pffPlayer.totalSnaps,
          "Snaps/GP": +(+pffPlayer.totalSnaps / +player['"Games"']).toFixed(1),
          ["Snap %"]: +(snapPercent2023 * 100).toFixed(1),
          Routes: +pffPlayer.routes,
          ["Routes/G"]: +(+pffPlayer.routes / +player['"Games"']).toFixed(1),
          Targets: +pffPlayer.targets,
          ["Targets/G"]: +(+pffPlayer.targets / +player['"Games"']).toFixed(1),
          ["Target %"]: player.targetShare2023,
          ["Targets/Route"]: +(+pffPlayer.targets / +pffPlayer.routes).toFixed(
            3
          ),
        });
      }
    });

    // console.log(player['"player_name"'].slice(1, -1), counter);
    // console.log(player);
  }
});

fromPreviousAstronautsWRData.map((p) => {
  // console.log(p);
  if (p.Season !== 2023) {
    p.Season = +p.Season;
    p.Age = +p.Age;
    p.NFLYr = +p.CareerYr;
    p.GP = +p.GP;
    p.Snaps = +p.Snaps;
    p["Snaps/GP"] = +p["Snaps/GP"];
    if (!+p.Snaps) {
      p.Snaps = 0;
      p["Snaps/GP"] = 0;
    }
    p["Snap %"] = +p["Snap %"].slice(0, -1);
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
    p["Targets/Route"] = +p["Targets/Route"];

    //

    p["Catch %"] = +p["Catch %"].slice(0, -1);
    if (!+p["Catch %"]) {
      p["Catch %"] = 0;
    }
    p.REC = +p.REC;
    p["REC/G"] = +p["REC/G"];
    p["REC Yards"] = +p["REC Yards"];
    p["Yards/REC"] = +p["Yards/REC"];
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
  }
  //
  //
  //
  //
  //

  if (p.Season === 2023) {
    console.log(p);
  }
});

WRPlayerStatsArray = fromPreviousAstronautsWRData;

export default WRPlayerStatsArray;
