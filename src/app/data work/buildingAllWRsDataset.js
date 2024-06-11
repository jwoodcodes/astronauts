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

let WRPlayerStatsArray = [];
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
  console.log(pfr07Player);
});

PFR2008WRData.map((pfr08Player) => {
  pfr08Player.season = 2008;
  // console.log(pfr08Player);
});

//
///
////
///
//

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
      WRPlayerStatsArray.push(player);

      //   console.log(+idAndName['"age"']);
    }
    // console.log(typeof +slicedid);
  });
});

WRPlayerStatsArray.map((player) => {
  //   console.log(player);
});
