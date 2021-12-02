export const products_30_off = (selected) => {
  if (selected.color === "black") {
    switch (selected.size) {
      case "S":
        return process.env.GATSBY_BLACK_SMALL;
      case "M":
        return process.env.GATSBY_BLACK_MEDIUM;
      case "L":
        return process.env.GATSBY_BLACK_LARGE;
      case "XL":
        return process.env.GATSBY_BLACK_XL;
      default:
        return;
    }
  } else if (selected.color === "blue") {
    switch (selected.size) {
      case "S":
        return process.env.GATSBY_BLUE_SMALL;
        case "M":
          return process.env.GATSBY_BLUE_MEDIUM;
        case "L":
          return process.env.GATSBY_BLUE_LARGE;
        case "XL":
          return process.env.GATSBY_BLUE_XL;
      default:
        return;
    }
  } else if (selected.color === "yellow") {
    switch (selected.size) {
      case "S":
        return process.env.GATSBY_YELLOW_SMALL;
        case "M":
          return process.env.GATSBY_YELLOW_MEDIUM;
        case "L":
          return process.env.GATSBY_YELLOW_LARGE;
        case "XL":
          return process.env.GATSBY_YELLOW_XL;
      default:
        return;
    }
  }
  return;
};