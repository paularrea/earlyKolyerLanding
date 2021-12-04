export const stripeProducts = (productsArr) => {
  if (productsArr.length === 1) {
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
    return;
  } else if (productsArr.length === 2) {
    switch (productsArr[0].color + productsArr[1].color) {
      case "blackblack":
        switch (productsArr[0].size + productsArr[1].size) {
          case "SS":
            return "blackblackSS";
          case "SM":
            return "blackblackSM";
          case "SL":
            return "blackblackSL";
          case "SXL":
            return "blackblackSXL";
          case "MS":
            return "blackblackMS";
          case "MM":
            return "blackUrlL";
          case "ML":
            return "blackUrlX";
          case "MXL":
            return "blackUrlMedium";
          case "LS":
            return "blackUrlL";
          case "LM":
            return "blackUrlX";
          case "LL":
            return "blackUrlL";
          case "LXL":
            return "blackUrlX";
          case "XLS":
            return "blackUrlMedium";
          case "XLM":
            return "blackUrlL";
          case "XLL":
            return "blackUrlX";
          case "XLXL":
            return "blackUrlX";
          default:
            return;
        }
      case "blackblue":
        switch (productsArr[0].size + productsArr[1].size) {
          case "SS":
            return "blackblackSS";
          case "SM":
            return "blackblackSM";
          case "SL":
            return "blackblackSL";
          case "SXL":
            return "";
          case "MS":
            return "blackblackMS";
          case "MM":
            return "blackUrlL";
          case "ML":
            return "blackUrlX";
          case "MXL":
            return "blackUrlMedium";
          case "LS":
            return "blackUrlL";
          case "LM":
            return "blackUrlX";
          case "LL":
            return "blackUrlL";
          case "LXL":
            return "blackUrlX";
          case "XLS":
            return "https://buy.stripe.com/dR628Rax18CgfGE4iw";
          case "XLM":
            return "https://buy.stripe.com/8wM3cV8oT8Cgamk9CR";
          case "XLL":
            return "https://buy.stripe.com/cN26p7cF9g4IamkaGW";
          case "XLXL":
            return "https://buy.stripe.com/28o00JfRl3hW7a86qH";
          default:
            return;
        }
      case "blueblack":
        switch (productsArr[0].size + productsArr[1].size) {
          case "SS":
            return "blackblackSS";
          case "SM":
            return "blackblackSM";
          case "SL":
            return "blackblackSL";
          case "SXL":
            return "https://buy.stripe.com/dR628Rax18CgfGE4iw";
          case "MS":
            return "blackblackMS";
          case "MM":
            return "blackUrlL";
          case "ML":
            return "blackUrlX";
          case "MXL":
            return "https://buy.stripe.com/8wM3cV8oT8Cgamk9CR";
          case "LS":
            return "blackUrlL";
          case "LM":
            return "blackUrlX";
          case "LL":
            return "blackUrlL";
          case "LXL":
            return "https://buy.stripe.com/cN26p7cF9g4IamkaGW";
          case "XLS":
            return "blackUrlMedium";
          case "XLM":
            return "blackUrlL";
          case "XLL":
            return "blackUrlX";
          case "XLXL":
            return "https://buy.stripe.com/28o00JfRl3hW7a86qH";
          default:
            return;
        }
      case "blackred":
        switch (productsArr[0].size + productsArr[1].size) {
          case "SS":
            return "https://buy.stripe.com/00g9Bj20v4m0eCAdTa";
          case "SM":
            return "https://buy.stripe.com/3cs9Bj7kP6u82TS02l";
          case "SL":
            return "https://buy.stripe.com/8wMeVD5cHg4I9ig2au";
          case "SXL":
            return "https://buy.stripe.com/5kAeVD0Wrg4Ibqo6qL";
          case "MS":
            return "https://buy.stripe.com/bIY3cVeNh4m07a83eA";
          case "MM":
            return "https://buy.stripe.com/5kA14N9sXf0E52016y";
          case "ML":
            return "https://buy.stripe.com/4gw28RbB505K2TScPc";
          case "MXL":
            return "https://buy.stripe.com/7sI8xfdJd9Gk5208yX";
          case "LS":
            return "https://buy.stripe.com/4gw8xfgVp3hWbqo7uU";
          case "LM":
            return "https://buy.stripe.com/8wMbJrdJd19O0LK9D3";
          case "LL":
            return "https://buy.stripe.com/5kA14N9sXf0E52016y";
          case "LXL":
            return "https://buy.stripe.com/dR6eVDbB5aKo0LK5mP";
          case "XLS":
            return "https://buy.stripe.com/3csbJr6gLf0E7a816A";
          case "XLM":
            return "https://buy.stripe.com/4gw28R0Wr2dScus8z3";
          case "XLL":
            return "https://buy.stripe.com/eVa5l3eNhdWA2TS8z4";
          case "XLXL":
            return "https://buy.stripe.com/00g8xf9sX05K0LK9D9";
          default:
            return;
        }
      case "redblack":
        switch (productsArr[0].size + productsArr[1].size) {
          case "SS":
            return "https://buy.stripe.com/00g9Bj20v4m0eCAdTa";
          case "SM":
            return "https://buy.stripe.com/bIY3cVeNh4m07a83eA";
          case "SL":
            return "https://buy.stripe.com/4gw8xfgVp3hWbqo7uU";
          case "SXL":
            return "https://buy.stripe.com/3csbJr6gLf0E7a816A";
          case "MS":
            return "https://buy.stripe.com/3cs9Bj7kP6u82TS02l";
          case "MM":
            return "https://buy.stripe.com/5kA14N9sXf0E52016y";
          case "ML":
            return "https://buy.stripe.com/8wMbJrdJd19O0LK9D3";
          case "MXL":
            return "https://buy.stripe.com/4gw28R0Wr2dScus8z3";
          case "LS":
            return "https://buy.stripe.com/8wMeVD5cHg4I9ig2au";
          case "LM":
            return "https://buy.stripe.com/4gw28RbB505K2TScPc";
          case "LL":
            return "https://buy.stripe.com/5kA14N9sXf0E52016y";
          case "LXL":
            return "https://buy.stripe.com/eVa5l3eNhdWA2TS8z4";
          case "XLS":
            return "https://buy.stripe.com/5kAeVD0Wrg4Ibqo6qL";
          case "XLM":
            return "https://buy.stripe.com/7sI8xfdJd9Gk5208yX";
          case "XLL":
            return "https://buy.stripe.com/dR6eVDbB5aKo0LK5mP";
          case "XLXL":
            return "https://buy.stripe.com/00g8xf9sX05K0LK9D9";
          default:
            return;
        }
      case "blueblue":
        switch (productsArr[0].size + productsArr[1].size) {
          case "SS":
            return "blackblackSS";
          case "SM":
            return "blackblackSM";
          case "SL":
            return "blackblackSL";
          case "SXL":
            return "blackblackSXL";
          case "MS":
            return "blackblackMS";
          case "MM":
            return "blackUrlL";
          case "ML":
            return "blackUrlX";
          case "MXL":
            return "blackUrlMedium";
          case "LS":
            return "blackUrlL";
          case "LM":
            return "blackUrlX";
          case "LL":
            return "blackUrlL";
          case "LXL":
            return "blackUrlX";
          case "XLS":
            return "blackUrlMedium";
          case "XLM":
            return "blackUrlL";
          case "XLL":
            return "blackUrlX";
          case "XLXL":
            return "blackUrlX";
          default:
            return;
        }
      case "redblue":
        switch (productsArr[0].size + productsArr[1].size) {
          case "SS":
            return "blackblackSS";
          case "SM":
            return "blackblackSM";
          case "SL":
            return "blackblackSL";
          case "SXL":
            return "blackblackSXL";
          case "MS":
            return "blackblackMS";
          case "MM":
            return "blackUrlL";
          case "ML":
            return "blackUrlX";
          case "MXL":
            return "blackUrlMedium";
          case "LS":
            return "blackUrlL";
          case "LM":
            return "blackUrlX";
          case "LL":
            return "blackUrlL";
          case "LXL":
            return "blackUrlX";
          case "XLS":
            return "blackUrlMedium";
          case "XLM":
            return "blackUrlL";
          case "XLL":
            return "blackUrlX";
          case "XLXL":
            return "";
          default:
            return;
        }
      case "bluered":
        switch (productsArr[0].size + productsArr[1].size) {
          case "SS":
            return "blackblackSS";
          case "SM":
            return "blackblackSM";
          case "SL":
            return "blackblackSL";
          case "SXL":
            return "blackblackSXL";
          case "MS":
            return "blackblackMS";
          case "MM":
            return "blackUrlL";
          case "ML":
            return "blackUrlX";
          case "MXL":
            return "blackUrlMedium";
          case "LS":
            return "blackUrlL";
          case "LM":
            return "blackUrlX";
          case "LL":
            return "blackUrlL";
          case "LXL":
            return "blackUrlX";
          case "XLS":
            return "blackUrlMedium";
          case "XLM":
            return "blackUrlL";
          case "XLL":
            return "blackUrlX";
          case "XLXL":
            return "blackUrlX";
          default:
            return;
        }
      case "redred":
        switch (productsArr[0].size + productsArr[1].size) {
          case "SS":
            return "redredSS";
          case "SM":
            return "redredSM";
          case "SL":
            return "redredSL";
          case "SXL":
            return "redredSXL";
          case "MS":
            return "redredMS";
          case "MM":
            return "redredMM";
          case "ML":
            return "redredML";
          case "MXL":
            return "redredMXL";
          case "LS":
            return "redredLS";
          case "LM":
            return "redredLM";
          case "LL":
            return "redredLL";
          case "LXL":
            return "redredLXL";
          case "XLS":
            return "redredXLS";
          case "XLM":
            return "redredXLM";
          case "XLL":
            return "redredXLL";
          case "XLXL":
            return "redredXLXL";
          default:
            return;
        }
    }
  }
};
