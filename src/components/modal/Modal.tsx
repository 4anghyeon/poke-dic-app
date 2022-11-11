import React from "react";
import ModalPortal from "./ModalPortal";
import classes from "./modal.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { openModalState, selectedPokemonState } from "../../state/atomState";
import translator from "../../helper/translator";
import { Grid } from "@mui/material";
import SmallTypeBox from "./SmallTypeBox";

function Modal() {
  const setModalOpen = useSetRecoilState(openModalState);
  const selectedPokemon = useRecoilValue(selectedPokemonState);

  return (
    <ModalPortal>
      <div className={classes.modal}>
        <div className={classes.modalBackground} onClick={() => setModalOpen(false)}></div>
        <div className={classes.modalContent}>
          <Grid container sx={{ width: "100%" }}>
            <Grid item lg={6} sx={{ display: "flex", justifyContent: "center", padding: "50px", width: "100%" }}>
              <img
                src={selectedPokemon.pokemon.sprites.other["official-artwork"].front_default}
                alt={selectedPokemon.pokemon.name}
              />
            </Grid>
            <Grid
              container
              item
              lg={6}
              className={classes.contentBox}
              sx={{ paddingLeft: "20px", paddingRight: "20px" }}
            >
              <div className={classes.numberBox}>
                <span>No. {selectedPokemon.pokemon.id.toString().padStart(3, "0")}</span>
              </div>
              <div>
                <h1>{translator.get(selectedPokemon.pokemon.name)}</h1>
              </div>
              <div>
                <p>
                  {
                    selectedPokemon.pokemonSpecies.flavor_text_entries.find((f) => f.language.name === "ko")!
                      .flavor_text
                  }
                </p>
              </div>
              <div className={classes.speciesBox}>
                <Grid container>
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    <h4>타입</h4>
                    <Grid container sx={{ width: "fitContent" }}>
                      {selectedPokemon.pokemon.types.map((type) => {
                        return <SmallTypeBox key={type.type.name} name={type.type.name} />;
                      })}
                    </Grid>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    <h4>키</h4>
                    <span>{(selectedPokemon.pokemon.height! / 10).toFixed(1)}m</span>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    <h4>몸무게</h4>
                    <span>{(selectedPokemon.pokemon.weight! / 10).toFixed(1)}kg</span>
                  </Grid>
                </Grid>
                <Grid container className={classes.lineBox}>
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    <h4>성별</h4>
                    {selectedPokemon.pokemonSpecies.gender_rate === 0 ? (
                      <span>남</span>
                    ) : selectedPokemon.pokemonSpecies.gender_rate === 8 ? (
                      <span>여</span>
                    ) : (
                      <div>
                        <span>남</span>
                        <span>여</span>
                      </div>
                    )}
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    <h4>분류</h4>
                    <span>{selectedPokemon.pokemonSpecies.genera.find((g) => g.language.name === "ko")!.genus}</span>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    <h4>특성</h4>
                    {selectedPokemon.pokemon.abilities!.map((a) => (
                      <div key={a.ability.name} style={{ marginBottom: "5px" }}>
                        {a.ability.name}
                      </div>
                    ))}
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </ModalPortal>
  );
}

export default Modal;
