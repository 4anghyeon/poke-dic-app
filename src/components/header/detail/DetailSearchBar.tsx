import React, { Fragment, useEffect, useRef, useState } from "react";
import classes from "./detail-search-bar.module.css";
import { Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TypeCard from "./TypeCard";
import RegionType from "../../../dataTypes/RegionType";
import translator from "../../../translator";
import { getAbilities, getRegionList } from "../../../api/pokeApi";
import { AbilityType } from "../../../dataTypes/AbilityType";

// 지방 리스트 불러오기 API

function DetailSearchBar(props: { showDetail: boolean }) {
  const [showAbility, setShowAbility] = useState(false);
  const [showRegion, setShowRegion] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedAbility, setSelectedAbility] = useState("all");
  const [regionList, setRegionList] = useState<RegionType[]>([
    {
      id: 0,
      enName: "all",
      name: "전체",
    },
  ]);

  const [abilityTypeList, setAbilityTypeList] = useState<AbilityType[]>([
    {
      id: 0,
      enName: "all",
      name: "전체",
    },
  ]);

  const abilityDropdownRef = useRef<HTMLDivElement>(null);
  const regionDropdownRef = useRef<HTMLDivElement>(null);

  // 지방 리스트 불러오기
  useEffect(() => {
    getRegionList().then((data) => {
      setRegionList((prev) => [...prev, ...data]);
    });
  }, []);

  // 특성 리스트 불러오기
  useEffect(() => {
    getAbilities().then((data) => {
      setAbilityTypeList((prev) => [...prev, ...data]);
    });
  }, []);

  // 드롭다운 바깥 클릭시 자동 닫힘
  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      if (
        abilityDropdownRef.current &&
        !abilityDropdownRef.current.contains(e.target as Node)
      ) {
        setShowAbility(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [abilityDropdownRef]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      if (
        regionDropdownRef.current &&
        !regionDropdownRef.current.contains(e.target as Node)
      ) {
        setShowRegion(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [regionDropdownRef]);

  // 특성 드롭다운 열고 닫기
  const onClickShowCharacterHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowRegion(false);
    setShowAbility(!showAbility);
    console.log(showAbility);
    if (!showAbility) {
      document.querySelectorAll("#abilityDropdownBox span").forEach((span) => {
        console.log(span.innerHTML);
      });
    }
  };

  // 지방 드롭다운 열고 닫기
  const onClickShowLocationHandler = () => {
    setShowAbility(!showAbility);
    setShowRegion(!showRegion);
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

  // 지방 선택
  const selectLocationHandler = (enName: string) => {
    setSelectedRegion(enName);
    setShowRegion(false);
  };

  // 특성 선택
  const selectAbilityHandler = (enName: string) => {
    setSelectedAbility(enName);
    setShowAbility(false);
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
                ref={abilityDropdownRef}
                className={classes.box}
              >
                <span style={{ width: "100%", textAlign: "center" }}>
                  {translator.get(selectedAbility) || selectedAbility}
                </span>
                <ExpandMoreIcon
                  style={{ float: "right", paddingRight: "10px" }}
                />
                {showAbility && (
                  <Grid
                    item
                    id="abilityDropdownBox"
                    xs={12}
                    md={10}
                    sx={{ position: "absolute" }}
                    className={classes.dropdownBox}
                    onClick={onClickChildrenShowCharacterHandler}
                    style={{
                      display: "block",
                      height: "200px",
                      overflow: "auto",
                    }}
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
                      {abilityTypeList.map((c) => {
                        return (
                          <Grid
                            item
                            xs={12}
                            md={12}
                            sx={{ display: "flex", justifyContent: "center" }}
                            key={c.id}
                            onClick={() => selectAbilityHandler(c.enName)}
                          >
                            <span>{c.name}</span>
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
                ref={regionDropdownRef}
                onClick={onClickShowLocationHandler}
              >
                <span style={{ width: "100%", textAlign: "center" }}>
                  {translator.get(selectedRegion)}
                </span>
                <ExpandMoreIcon
                  style={{ float: "right", paddingRight: "10px" }}
                />
                {showRegion && (
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
                      {regionList.map((l) => {
                        return (
                          <Grid
                            item
                            xs={12}
                            md={12}
                            key={l.id}
                            sx={{ display: "flex", justifyContent: "center" }}
                            className={
                              selectedRegion === l.name ? classes.selected : ""
                            }
                            onClick={() => selectLocationHandler(l.enName)}
                          >
                            <span>{l.name}</span>
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
