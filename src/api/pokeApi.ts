import RegionType from "../dataTypes/RegionType";
import translator from "../translator";
import { NamesType } from "../dataTypes/NamesType";
import { AbilityType } from "../dataTypes/AbilityType";

export const getRegionList = async () => {
  let result: RegionType[] = [];
  await fetch("https://pokeapi.co/api/v2/region/")
    .then((res) => res.json())
    .then(async (data: { count: number }) => {
      for (let i = 1; i < data.count + 1; i++) {
        await getRegionById(i).then((rr) => result.push(rr));
      }
    });

  return result;
};

const getRegionById = async (id: number) => {
  let result: RegionType = {
    id: id,
    enName: "",
    name: "",
  };
  await fetch(`https://pokeapi.co/api/v2/region/${id}`)
    .then((res) => res.json())
    .then((data: { names: NamesType[]; name: string }) => {
      if (data) {
        let find = data.names.find((d) => d.language.name === "ko");
        result.enName = data.name;
        if (find) result.name = find.name;
        else result.name = translator.get(data.name) || "";
      }
    });
  return result;
};

export const getAbilities = async () => {
  let result: AbilityType[] = [];
  await fetch("https://pokeapi.co/api/v2/ability?limit=9999")
    .then((res) => res.json())
    .then(async (data: { results: AbilityType[] }) => {
      data.results.forEach((r) => {
        result.push({
          enName: r.name,
          id: Number.parseInt(
            r.url
              ?.replaceAll("https://pokeapi.co/api/v2/ability/", "")
              .replaceAll("/", "") as string
          ),
          name: r.name,
        });
      });
    });
  return result;
};

const getAbilityById = async (id: number) => {
  let result: AbilityType = {
    id: -1,
    enName: "",
    name: "",
  };
  await fetch(`https://pokeapi.co/api/v2/ability/${id}`)
    .then((res) => res.json())
    .then((data: { names: NamesType[]; name: string; id: number }) => {
      let find = data.names.find((n) => n.language.name === "ko");
      result.id = data.id;
      result.enName = data.name;
      if (find) result.name = find.name;
    });
  return result;
};
