import LocationType from "../dataTypes/LocationType";
import translater from "../translater";

export const getLocation = async () => {
  let result: LocationType[] = [];
  await fetch("https://pokeapi.co/api/v2/region/")
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        result = data.results.map((d: LocationType) => {
          return {
            key: d.name,
            name: translater.get(d.name),
          };
        });
      }
    });

  return result;
};
