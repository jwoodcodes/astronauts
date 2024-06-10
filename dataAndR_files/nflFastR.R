#install.packages("tidyverse", type = "binary")
#install.packages("ggrepel", type = "binary")
#install.packages("nflreadr", type = "binary")
#install.packages("nflplotR", type = "binary")
#install.packages("nflfastR", type = "binary")
#install.packages("gsisdecoder")

library(tidyverse)
library(ggrepel)
library(nflreadr)
library(nflplotR)
library(nflfastR)
library(dplyr)
library(gsisdecoder)

options(scipen = 9999)



#
# 2023 player data

wrPlayerData23 <- load_player_stats(
  seasons = most_recent_season(),
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData23)

wr23Data <- wrPlayerData23 %>%
  filter(position == "WR", season == '2023', week < 19) %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2023',
    
    Rec_Yards = sum(receiving_yards),
    YAC = sum(receiving_yards_after_catch),
    
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = sum(Rec_Yards/ Air_Yards),
    WOPR = sum(wopr/ Games),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1),
   
    ) %>%
  arrange(-FPPG)

#head(wr23Data, 5)  

#view(wr23Data)

#
# 2022 player data
#

wrPlayerData22 <- load_player_stats(
  seasons = 2022,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData22)

wr22Data <- wrPlayerData22 %>%
  filter(position == "WR", season == '2022', week < 19) %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2022',
    Rec_Yards = sum(receiving_yards),
   
    YAC = sum(receiving_yards_after_catch),
    
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr22Data, 5)  

#wr22Data

allWrSeasonsData <- wr23Data %>%
  full_join(wr22Data)

view(allWrSeasonsData)

#
# 2021 player data
#

wrPlayerData21 <- load_player_stats(
  seasons = 2021,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData21)

wr21Data <- wrPlayerData21 %>%
  filter(position == "WR", season == '2021', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
   
    Games = n(),
    season = '2021',
    Rec_Yards = sum(receiving_yards),
    
    YAC = sum(receiving_yards_after_catch),
    
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr21Data, 5)  

#view(wr21Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr21Data)

#
# 2020 player data
#

wrPlayerData20 <- load_player_stats(
  seasons = 2020,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData20)

wr20Data <- wrPlayerData20 %>%
  filter(position == "WR", season == '2020', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2020',
    Rec_Yards = sum(receiving_yards),
    YAC = sum(receiving_yards_after_catch),
   
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr20Data, 5)  

#view(wr20Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr20Data)




#
#
# 2019 player data
#
#

wrPlayerData19 <- load_player_stats(
  seasons = 2019,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData19)

wr19Data <- wrPlayerData19 %>%
  filter(position == "WR", season == '2019', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2019',
    Rec_Yards = sum(receiving_yards),
    YAC = sum(receiving_yards_after_catch),
    
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr19Data, 5)  

#view(wr19Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr19Data)

#
#
# 2018 player data
# 
#

wrPlayerData18 <- load_player_stats(
  seasons = 2018,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData18)

wr18Data <- wrPlayerData18 %>%
  filter(position == "WR", season == '2018', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2018',
    Rec_Yards = sum(receiving_yards),
   
    YAC = sum(receiving_yards_after_catch),
    
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr18Data, 5)  

#view(wr18Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr18Data)

#
#
# 2017 player data
#
#

wrPlayerData17 <- load_player_stats(
  seasons = 2017,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData17)

wr17Data <- wrPlayerData17 %>%
  filter(position == "WR", season == '2017', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2017',
    Rec_Yards = sum(receiving_yards),
    
    YAC = sum(receiving_yards_after_catch),
    
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr17Data, 5)  

#view(wr17Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr17Data)

#
#
# 2016 player data 
#
#

wrPlayerData16 <- load_player_stats(
  seasons = 2016,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData16)

wr16Data <- wrPlayerData16 %>%
  filter(position == "WR", season == '2016', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2016',
    Rec_Yards = sum(receiving_yards),
    YAC = sum(receiving_yards_after_catch),
    
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr16Data, 5)  

#view(wr16Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr16Data)

#
#
# 2015 player data
#
#

wrPlayerData15 <- load_player_stats(
  seasons = 2015,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData15)

wr15Data <- wrPlayerData15 %>%
  filter(position == "WR", season == '2015', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2015',
    Rec_Yards = sum(receiving_yards),
    YAC = sum(receiving_yards_after_catch),
    
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr15Data, 5)  

#view(wr15Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr15Data)

#
#
# 2014 player data
#
#

wrPlayerData14 <- load_player_stats(
  seasons = 2014,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData14)

wr14Data <- wrPlayerData14 %>%
  filter(position == "WR", season == '2014', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2014',
    Rec_Yards = sum(receiving_yards),
    YAC = sum(receiving_yards_after_catch),
    
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr14Data, 5)  

#view(wr14Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr14Data)

#
#
# 2013 player data
# 
#

wrPlayerData13 <- load_player_stats(
  seasons = 2013,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData13)

wr13Data <- wrPlayerData13 %>%
  filter(position == "WR", season == '2013', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2013',
    Rec_Yards = sum(receiving_yards),
    YAC = sum(receiving_yards_after_catch),
   
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr13Data, 5)  

#view(wr13Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr13Data)

#
#
# 2012 player data
#
#

wrPlayerData12 <- load_player_stats(
  seasons = 2012,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData12)

wr12Data <- wrPlayerData12 %>%
  filter(position == "WR", season == '2012', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2012',
    Rec_Yards = sum(receiving_yards),
    YAC = sum(receiving_yards_after_catch),
    
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr12Data, 5)  

#view(wr12Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr12Data)

#
#
# 2011 player data
#
#

wrPlayerData11 <- load_player_stats(
  seasons = 2011,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData12)

wr11Data <- wrPlayerData11 %>%
  filter(position == "WR", season == '2011', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2011',
    Rec_Yards = sum(receiving_yards),
    YAC = sum(receiving_yards_after_catch),
    
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr11Data, 5)  

#view(wr11Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr11Data)

#
#
# 2010 player data
#
#

wrPlayerData10 <- load_player_stats(
  seasons = 2010,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData10)

wr10Data <- wrPlayerData10 %>%
  filter(position == "WR", season == '2010', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2010',
    Rec_Yards = sum(receiving_yards),
    YAC = sum(receiving_yards_after_catch),
    
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr10Data, 5)  

#view(wr10Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr10Data)

#
#
# 2009 player data
#
#

wrPlayerData09 <- load_player_stats(
  seasons = 2009,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData09)

wr09Data <- wrPlayerData09 %>%
  filter(position == "WR", season == '2009', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2009',
    Rec_Yards = sum(receiving_yards),
    YAC = sum(receiving_yards_after_catch),
    
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr09Data, 5)  

#view(wr09Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr09Data)

#
#
# 2008 player data
#
#

wrPlayerData08 <- load_player_stats(
  seasons = 2008,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData08)

wr08Data <- wrPlayerData08 %>%
  filter(position == "WR", season == '2008', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2008',
    Rec_Yards = sum(receiving_yards),
    YAC = sum(receiving_yards_after_catch),
    
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr08Data, 5)  

#view(wr08Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr08Data)

#
#
# 2007 player data
#
#

wrPlayerData07 <- load_player_stats(
  seasons = 2007,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData08)

wr07Data <- wrPlayerData07 %>%
  filter(position == "WR", season == '2007', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2007',
    Rec_Yards = sum(receiving_yards),
    YAC = sum(receiving_yards_after_catch),
   
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr07Data, 5)  

#view(wr07Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr07Data)

#
#
# 2006 players data
#
#

wrPlayerData06 <- load_player_stats(
  seasons = 2006,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData06)

wr06Data <- wrPlayerData06 %>%
  filter(position == "WR", season == '2006', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2006',
    Rec_Yards = sum(receiving_yards),
    YAC = sum(receiving_yards_after_catch),
   
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr06Data, 5)  

#view(wr06Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr06Data)

#
#
# 2005 player data
#
#

wrPlayerData05 <- load_player_stats(
  seasons = 2005,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData05)

wr05Data <- wrPlayerData05 %>%
  filter(position == "WR", season == '2005', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2005',
    Rec_Yards = sum(receiving_yards),
    YAC = sum(receiving_yards_after_catch),
    
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr05Data, 5)  

#view(wr05Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr05Data)

#
#
# 2004 player data
#
#

wrPlayerData04 <- load_player_stats(
  seasons = 2004,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData04)

wr04Data <- wrPlayerData04 %>%
  filter(position == "WR", season == '2004', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2004',
    Rec_Yards = sum(receiving_yards),
    YAC = sum(receiving_yards_after_catch),
    
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr04Data, 5)  

#view(wr04Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr04Data)

#
#
# 2003 player data
#
#

wrPlayerData03 <- load_player_stats(
  seasons = 2003,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData03)

wr03Data <- wrPlayerData03 %>%
  filter(position == "WR", season == '2003', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2003',
    Rec_Yards = sum(receiving_yards),
    YAC = sum(receiving_yards_after_catch),
   
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr03Data, 5)  

#view(wr03Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr03Data)

#
#
# 2002 player data
#
#

wrPlayerData02 <- load_player_stats(
  seasons = 2002,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData04)

wr02Data <- wrPlayerData02 %>%
  filter(position == "WR", season == '2002', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2002',
    Rec_Yards = sum(receiving_yards),
    
    YAC = sum(receiving_yards_after_catch),
   
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr02Data, 5)  

#view(wr02Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr02Data)

#
#
# 2001 player data
#
#

wrPlayerData01 <- load_player_stats(
  seasons = 2001,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData04)

wr01Data <- wrPlayerData01 %>%
  filter(position == "WR", season == '2001', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2001',
    Rec_Yards = sum(receiving_yards),
    YAC = sum(receiving_yards_after_catch),
    
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

#head(wr01Data, 5)  

#view(wr01Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr01Data)

#
#
# 2000 player data
#
#

wrPlayerData01 <- load_player_stats(
  seasons = 2000,
  stat_type = c("offense"),
  file_type = getOption("nflreadr.prefer", default = "rds")
)

#colnames(wrPlayerData00)

wr00Data <- wrPlayerData00 %>%
  filter(position == "WR", season == '2000', season_type == "REG") %>%
  group_by(player_name, Pos = position, Tm = recent_team, player_id, pic = headshot_url) %>%
  reframe(
    
    Games = n(),
    season = '2000',
    Rec_Yards = sum(receiving_yards),
    YAC = sum(receiving_yards_after_catch),
   
    Air_Yards = sum(receiving_air_yards),
    AY_share = sum(air_yards_share / Games),
    EPA = sum(receiving_epa),
    RACR = round(sum(Rec_Yards/ Air_Yards), 3),
    WOPR = round(sum(wopr/ Games), 3),
    PPR_Points = round(sum(fantasy_points_ppr), 0),
    FPPG = round(PPR_Points / Games, 1)
  ) %>%
  arrange(-FPPG)

head(wr00Data, 5)  

#view(wr00Data)

allWrSeasonsData <- allWrSeasonsData %>%
  full_join(wr00Data)




view(allWrSeasonsData)

write.csv(allWrSeasonsData, 'C:/Users/jkwoo/astronauts/astronuats/dataAndR_files/wrPlayerDataFromR.csv')

#
#
#
#
# GSID's below

playerIDs <- load_ff_playerids()

colnames(playerIDs)



gsisIDs <- playerIDs["gsis_id"]
head(gsisIDs)
view(gsisIDs)

for (player in playerIDs) {
  for (wr in allWrSeasonsData) {
    if(allWrSeasonsData$player_id == player["gsis_id"]) {
      print(player['name'])
    }
  }
  print(head(player))
}


#

pbp <- nflfastR::load_pbp(2000:2023)

colnames(pbp)

pbp23 <- pbp %>%
  filter(season == 2023, pass == 1, !receiver == 'NA') %>%
  group_by(receiver) %>%
  reframe(
    player_team = posteam,
    def_team = defteam,
    defender = pass_defense_1_player_name,
    wasComplete = complete_pass,
    yards = yards_gained,
    air_yards = air_yards,
    yards_after_catch = yards_after_catch,
    
    #  description = desc,
    
  )

head(pbp23, 10)
tail(pbp23, 10)

colnames(pbp23)

view(pbp23)

#

allCombine <- load_combine(2000:2023)

#view(allCombine)

#colnames(allCombine)

combine22 <- allCombine %>%
  filter(draft_year == 2022, pos == "WR") %>%
  
  reframe(
    player_name = player_name,
    draft_year = draft_year,
    draft_round = draft_round,
    draft_ovr = draft_ovr,
    college = school,
    ht = ht,
    wt = wt,
    forty = forty,
    vertical = vertical,
    broad_jump = broad_jump,
    cone = cone,
    shuttle = shuttle
    
    
  )

#head(combine22)
#view(combine22)

combine23 <- allCombine %>%
  filter(draft_year == 2023, pos == "WR") %>%
  
  reframe(
    player_name = player_name,
    draft_year = draft_year,
    draft_round = draft_round,
    draft_ovr = draft_ovr,
    college = school,
    ht = ht,
    wt = wt,
    forty = forty,
    vertical = vertical,
    broad_jump = broad_jump,
    cone = cone,
    shuttle = shuttle
    
    
  )
    
#head(combine23)
#view(combine23)

allCombineData <- combine23 %>%
  full_join(combine22)

#view(allCombineData)







