const findColor = (name: string) => {
  switch (name) {
    case "normal":
      return "#92999f";
    case "grass":
      return "#7ab766";
    case "poison":
      return "#a16ec2";
    case "fire":
      return "#efa061";
    case "flying":
      return "#95a8d9";
    case "dragon":
      return "#336cbe";
    case "water":
      return "#608fcf";
    case "bug":
      return "#9bbf48";
    case "dark":
      return "#585365";
    case "electric":
      return "#edd259";
    case "psychic":
      return "#e57879";
    case "ground":
      return "#ca7c50";
    case "fairy":
      return "#dc94e1";
    case "steel":
      return "#678d9e";
    case "fighting":
      return "#bc4b6a";
    case "rock":
      return "#c3b78f";
    case "ice":
      return "#8dccc0";
    case "ghost":
      return "#5769a7";
  }
};

export default findColor;
