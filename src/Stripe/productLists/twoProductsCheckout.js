export const twoProductCheckout = (productsArr) => {
  console.log(productsArr, "TWO PRODUCTS");
  switch (productsArr[0].color) {
    case "black":
      switch (productsArr[0].size) {
        case "S":
          return "blackUrlSmall";
        case "M":
          return "blackUrlMedium";
        case "L":
          return "blackUrlL";
        case "XL":
          return "blackUrlX";
        default:
          return;
      }
    case "blue":
      switch (productsArr[0].size) {
        case "S":
          return "blueUrlSmall";
        case "M":
          return "blueUrlMedium";
        case "L":
          return "blueUrlL";
        case "XL":
          return "blueUrlX";
        default:
          return;
      }
    case "red":
      switch (productsArr[0].size) {
        case "S":
          return "redUrlSmall";
        case "M":
          return "redUrlMedium";
        case "L":
          return "redUrlL";
        case "XL":
          return "redUrlX";
        default:
          return;
      }
  }
};
