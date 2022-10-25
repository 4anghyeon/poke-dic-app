import React, { Fragment, useEffect, useRef, useState } from "react";
import classes from "./detail-search-bar.module.css";
import { Box, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TypeCard from "./TypeCard";
import LocationType from "../../../dataTypes/LocationType";

const getLocation = async () => {
  let result: LocationType[] = [];
  await fetch("https://pokeapi.co/api/v2/region/")
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        console.log(data);
        result = data.results.map((d: LocationType) => {
          return {
            name: d.name,
          };
        });
      }
    });

  return result;
};

function DetailSearchBar(props: { showDetail: boolean }) {
  const [showCharacter, setShowCharacter] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showDicNo, setShowDicNo] = useState(false);
  const characterDropdownRef = useRef<HTMLDivElement>(null);
  const locationDropdownRef = useRef<HTMLDivElement>(null);

  // Todo
  const [characterTypeList, setCharacterTypeList] = useState([
    "전체",
    "테스트",
  ]);

  const [locationList, setLocationList] = useState<LocationType[]>([]);

  useEffect(() => {
    getLocation().then((data) => {
      setLocationList(data);
    });
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      if (
        characterDropdownRef.current &&
        !characterDropdownRef.current.contains(e.target as Node)
      ) {
        setShowCharacter(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [characterDropdownRef]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(e.target as Node)
      ) {
        setShowLocation(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [locationDropdownRef]);

  // 특성 드롭다운 열고 닫기
  const onClickShowCharacterHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowLocation(false);
    setShowCharacter(!showCharacter);
  };

  // 지방 드롭다운 열고 닫기
  const onClickShowLocationHandler = () => {
    console.log(locationList);
    setShowCharacter(false);
    setShowLocation(!showLocation);
  };

  // drop-down 클릭시 가장 최상위 부모를 클릭했을 때만 이벤트가 일어날 수 있도록
  // 자식 요소에서는 이벤트 전파를 막는다
  const onClickChildrenShowCharacterHandler = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.stopPropagation();
  };

  const onClickChildrenShowLocationHandler = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.stopPropagation();
  };

  return (
    <div className={props.showDetail ? classes.open : classes.close}>
      <Grid container sx={{ padding: "0 24px 12px 24px" }}>
        <Grid item lg={2}></Grid>
        <Grid container item sm={12} md={12} lg={10}>
          {/* LEFT */}
          <Grid item xs={12} sm={12} md={4}>
            <Grid container sx={{ position: "relative", marginBottom: "15px" }}>
              <Grid
                item
                xs={12}
                md={2}
                sx={{ paddingRight: "15px", paddingBottom: "15px" }}
              >
                <span>특성</span>
              </Grid>
              <Grid
                item
                xs={12}
                md={10}
                onClick={onClickShowCharacterHandler}
                id="characterDropdown"
                ref={characterDropdownRef}
                className={classes.box}
              >
                <span style={{ width: "100%", textAlign: "center" }}>전체</span>
                <ExpandMoreIcon
                  style={{ float: "right", paddingRight: "10px" }}
                />
                {showCharacter && (
                  <Grid
                    item
                    xs={12}
                    md={10}
                    sx={{ position: "absolute" }}
                    className={classes.dropdownBox}
                    onClick={onClickChildrenShowCharacterHandler}
                  >
                    <Grid container sx={{ display: "block" }}>
                      <Grid
                        item
                        xs={12}
                        md={12}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <input type="text" />
                      </Grid>
                      {characterTypeList.map((c) => {
                        return (
                          <Grid
                            item
                            xs={12}
                            md={12}
                            sx={{ display: "flex", justifyContent: "center" }}
                          >
                            <span>{c}</span>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Grid container sx={{ position: "relative", marginBottom: "15px" }}>
              <Grid
                item
                xs={12}
                md={2}
                sx={{ paddingRight: "15px", paddingBottom: "15px" }}
              >
                <span>지방</span>
              </Grid>
              <Grid
                item
                xs={12}
                md={10}
                className={classes.box}
                ref={locationDropdownRef}
                onClick={onClickShowLocationHandler}
              >
                <span style={{ width: "100%", textAlign: "center" }}>전체</span>
                <ExpandMoreIcon
                  style={{ float: "right", paddingRight: "10px" }}
                />
                {showLocation && (
                  <Grid
                    item
                    xs={12}
                    md={10}
                    sx={{ position: "absolute" }}
                    className={classes.dropdownBox}
                    onClick={onClickChildrenShowLocationHandler}
                  >
                    <Grid
                      container
                      sx={{
                        display: "block",
                        height: "200px",
                        overflow: "auto",
                      }}
                    >
                      {locationList.map((l) => {
                        return (
                          <Grid
                            item
                            xs={12}
                            md={12}
                            key={l.name}
                            sx={{ display: "flex", justifyContent: "center" }}
                          >
                            <span key={l.name}>{l.name}</span>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Grid container sx={{ position: "relative", marginBottom: "15px" }}>
              <Grid
                item
                sm={12}
                md={2}
                sx={{ paddingRight: "15px", paddingBottom: "15px" }}
              >
                <span>도감번호</span>
              </Grid>
              <Grid
                item
                md={10}
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid
                  item
                  xs={5}
                  sm={5}
                  md={5}
                  className={`${classes.box} ${classes.numberInput}`}
                >
                  <input type="number" />
                </Grid>
                <Grid
                  item
                  xs={2}
                  sm={2}
                  md={2}
                  className={`${classes.middleText}`}
                >
                  <span>-</span>
                </Grid>
                <Grid
                  item
                  xs={5}
                  sm={5}
                  md={5}
                  className={`${classes.box} ${classes.numberInput}`}
                >
                  <input type="number" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/**/}
          <Grid item md={1}></Grid>
          {/* RIGHT */}
          <Grid item xs={12} sm={12} md={7}>
            <Grid container sx={{ position: "relative", marginBottom: "15px" }}>
              <Grid
                item
                xs={12}
                md={1}
                sx={{ paddingRight: "15px", paddingBottom: "15px" }}
              >
                <span>타입</span>
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={8}
                sx={{ display: "flex", justifyContent: "flex-start" }}
              >
                <TypeCard />
                <TypeCard />
                <TypeCard />
                <TypeCard />
                <TypeCard />
                <TypeCard />
                <TypeCard />
                <TypeCard />
                <TypeCard />
                <TypeCard />
                <TypeCard />
                <TypeCard />
                <TypeCard />
                <TypeCard />
                <TypeCard />
                <TypeCard />
                <TypeCard />
                <TypeCard />
                <TypeCard />
                <TypeCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default DetailSearchBar;
