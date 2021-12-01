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

export const products_33_off = (selected) => {
  if (selected.color === "black") {
    switch (selected.size) {
      case "S":
        return '2COLLARSS';
      case "M":
        return '2COLLARSM';
      case "L":
        return '2COLLARSL';
      case "XL":
        return '2COLLARSXL';
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

export const products_35_off = (selected) => {
  if (selected.color === "black") {
    switch (selected.size) {
      case "S":
        return '3COLLARSS';
      case "M":
        return '3COLLARSM';
      case "L":
        return '3COLLARSL';
      case "XL":
        return '3COLLARSXL';
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

