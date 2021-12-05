export const stripeProducts = (productsArr) => {
  if (productsArr.length === 1) {
    switch (productsArr[0].color) {
      case "black":
        switch (productsArr[0].size) {
          case "S":
            return "https://buy.stripe.com/eVa3cV8oT8Cg2TSeV6";
          case "M":
            return "https://buy.stripe.com/28odRzgVp9GkfGEbIV";
          case "L":
            return "https://buy.stripe.com/28odRz48D05K9ig7sG";
          case "XL":
            return "https://buy.stripe.com/14kcNv8oT05KeCA14j";
          default:
            return;
        }
      case "blue":
        switch (productsArr[0].size) {
          case "S":
            return "https://buy.stripe.com/8wMfZHfRlg4IbqocMQ";
            case "M":
              return "https://buy.stripe.com/dR6dRzfRldWA520eUZ";
            case "L":
              return "https://buy.stripe.com/3cs3cV0Wr19OgKIaEK";
            case "XL":
              return "https://buy.stripe.com/6oE00J34z7yc2TS28f";
          default:
            return;
        }
      case "red":
        switch (productsArr[0].size) {
          case "S":
            return "https://buy.stripe.com/3cs3cV20vdWA6647sA";
          case "M":
            return "https://buy.stripe.com/eVaeVD20vg4I5206ox";
          case "L":
            return "https://buy.stripe.com/4gw14N6gLcSwcus3cm";
          case "XL":
            return "https://buy.stripe.com/eVa00JcF9bOs2TS6oz";
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
            return "https://buy.stripe.com/5kA28R7kP3hWfGE4h2";
          case "SM":
            return "https://buy.stripe.com/eVa14NfRl6u8bqobJv";
          case "SL":
            return "https://buy.stripe.com/dR614NbB53hW3XW14S";
          case "SXL":
            return "https://buy.stripe.com/8wM6p7dJd19O7a83d1";
          case "MS":
            return "https://buy.stripe.com/5kA3cV7kPaKo0LKfZO";
          case "MM":
            return "https://buy.stripe.com/eVabJr0WrbOsamk7tj";
          case "ML":
            return "https://buy.stripe.com/fZe6p79sX05KeCAdRI";
          case "MXL":
            return "https://buy.stripe.com/9AQ7tb34z6u80LK291";
          case "LS":
            return "https://buy.stripe.com/7sI00J6gLf0EeCA7tm";
          case "LM":
            return "https://buy.stripe.com/14kdRz48D6u866400V";
          case "LL":
            return "https://buy.stripe.com/cN2cNv48D6u83XW150";
          case "LXL":
            return "https://buy.stripe.com/6oE4gZdJd5q4dyw7tp";
          case "XLS":
            return "https://buy.stripe.com/6oE8xfeNhf0EeCA8xu";
          case "XLM":
            return "https://buy.stripe.com/eVa9Bjax15q4eCA8xv";
          case "XLL":
            return "https://buy.stripe.com/8wM6p7cF99Gkcus5lk";
          case "XLXL":
            return "https://buy.stripe.com/eVaeVD34zcSwamk6pp";
          default:
            return;
        }
      case "blackblue":
        switch (productsArr[0].size + productsArr[1].size) {
          case "SS":
            return "https://buy.stripe.com/28o6p76gL5q40LK7tK";
          case "SM":
            return "https://buy.stripe.com/9AQbJrbB57ycfGEbK4";
          case "SL":
            return "https://buy.stripe.com/3cs3cV20vdWA5208xW";
          case "SXL":
            return "https://buy.stripe.com/14k5l3dJdbOsdyw8y0";
          case "MS":
            return "https://buy.stripe.com/5kAeVD7kP2dSdywaFX";
          case "MM":
            return "https://buy.stripe.com/cN2dRz8oTdWAcus4hD";
          case "ML":
            return "https://buy.stripe.com/eVa3cVfRl8Cg52001r";
          case "MXL":
            return "https://buy.stripe.com/28ocNveNh8CgdywaG9";
          case "LS":
            return "https://buy.stripe.com/4gwdRz7kP3hW8ec15o";
          case "LM":
            return "https://buy.stripe.com/4gwfZH5cHcSw9ig9BY";
          case "LL":
            return "https://buy.stripe.com/5kA9Bj48Dg4IfGEbKa";
          case "LXL":
            return "https://buy.stripe.com/7sIdRzdJdaKogKI8y2";
          case "XLS":
            return "https://buy.stripe.com/4gwfZHax13hWgKI9BV";
          case "XLM":
            return "https://buy.stripe.com/dR614N5cHcSw2TS6pN";
          case "XLL":
            return "https://buy.stripe.com/00g00JfRl4m0eCA7tV";
          case "XLXL":
            return "https://buy.stripe.com/9AQdRz0Wrg4I2TS01x";
          default:
            return;
        }
      case "blueblack":
        switch (productsArr[0].size + productsArr[1].size) {
          case "SS":
            return "https://buy.stripe.com/28o6p76gL5q40LK7tK";
          case "SM":
            return "https://buy.stripe.com/5kAeVD7kP2dSdywaFX";
          case "SL":
            return "https://buy.stripe.com/4gwdRz7kP3hW8ec15o";
          case "SXL":
            return "https://buy.stripe.com/4gwfZHax13hWgKI9BV";
          case "MS":
            return "https://buy.stripe.com/9AQbJrbB57ycfGEbK4";
          case "MM":
            return "https://buy.stripe.com/cN2dRz8oTdWAcus4hD";
          case "ML":
            return "https://buy.stripe.com/4gwfZH5cHcSw9ig9BY";
          case "MXL":
            return "https://buy.stripe.com/dR614N5cHcSw2TS6pN";
          case "LS":
            return "https://buy.stripe.com/3cs3cV20vdWA5208xW";
          case "LM":
            return "https://buy.stripe.com/eVa3cVfRl8Cg52001r";
          case "LL":
            return "https://buy.stripe.com/5kA9Bj48Dg4IfGEbKa";
          case "LXL":
            return "https://buy.stripe.com/00g00JfRl4m0eCA7tV";
          case "XLS":
            return "https://buy.stripe.com/14k5l3dJdbOsdyw8y0";
          case "XLM":
            return "https://buy.stripe.com/28ocNveNh8CgdywaG9";
          case "XLL":
            return "https://buy.stripe.com/7sIdRzdJdaKogKI8y2";
          case "XLXL":
            return "https://buy.stripe.com/9AQdRz0Wrg4I2TS01x";
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
            return "https://buy.stripe.com/5kAfZH5cH19OgKI4gw";
          case "SM":
            return "https://buy.stripe.com/cN24gZdJdbOsamk8wN";
          case "SL":
            return "https://buy.stripe.com/fZe9Bj7kP05Kamk14m";
          case "SXL":
            return "https://buy.stripe.com/3cs00J8oT7ycamkbJ1";
          case "MS":
            return "https://buy.stripe.com/00g7tb7kPcSw5205kE";
          case "MM":
            return "https://buy.stripe.com/fZefZHcF99Gk9ig5kF";
          case "ML":
            return "https://buy.stripe.com/aEU8xf7kP9Gkdyw7sO";
          case "MXL":
            return "https://buy.stripe.com/9AQaFn5cH4m00LKaF1";
          case "LS":
            return "https://buy.stripe.com/3csfZHax15q48ec00o";
          case "LM":
            return "https://buy.stripe.com/fZe6p7bB5cSw3XWcNb";
          case "LL":
            return "https://buy.stripe.com/6oEbJr48DdWA1PO4gG";
          case "LXL":
            return "https://buy.stripe.com/8wMeVD34z7yc1PO9B1";
          case "XLS":
            return "https://buy.stripe.com/5kA4gZdJddWAfGEfZq";
          case "XLM":
            return "https://buy.stripe.com/fZe14N20vf0E1POdRj";
          case "XLL":
            return "https://buy.stripe.com/14k3cV20v19O2TScNg";
          case "XLXL":
            return "https://buy.stripe.com/9AQ3cV5cHf0E0LK14z";
          default:
            return;
        }
      case "redblue":
        switch (productsArr[0].size + productsArr[1].size) {
          case "SS":
            return "https://buy.stripe.com/28o6p7gVpbOsgKIaFG";
          case "SM":
            return "https://buy.stripe.com/7sI00JeNhaKo3XWcNS";
          case "SL":
            return "https://buy.stripe.com/dR65l3eNh2dS2TS7tC";
          case "SXL":
            return "https://buy.stripe.com/6oE6p7bB52dS0LK15i";
          case "MS":
            return "https://buy.stripe.com/fZe3cVdJdbOs1PO4hj";
          case "MM":
            return "https://buy.stripe.com/9AQ7tbeNh4m0amk15b";
          case "ML":
            return "https://buy.stripe.com/14k00JcF94m00LKcNX";
          case "MXL":
            return "https://buy.stripe.com/4gw8xf9sXf0E3XW4hv";
          case "LS":
            return "https://buy.stripe.com/28o7tb48DbOs7a8aFI";
          case "LM":
            return "https://buy.stripe.com/9AQfZH7kPf0EeCA29g";
          case "LL":
            return "https://buy.stripe.com/4gw00JbB5cSwfGE3do";
          case "LXL":
            return "https://buy.stripe.com/8wMbJrdJd8Cg9ig5lA";
          case "XLS":
            return "https://buy.stripe.com/3cs5l30WrcSwbqo8xB";
          case "XLM":
            return "https://buy.stripe.com/bIYaFneNh5q4664g07";
          case "XLL":
            return "https://buy.stripe.com/6oEdRz9sX6u8fGEeW7";
          case "XLXL":
            return "https://buy.stripe.com/fZebJr7kP3hWamk9BR";
          default:
            return;
        }
      case "bluered":
        switch (productsArr[0].size + productsArr[1].size) {
          case "SS":
            return "https://buy.stripe.com/28o6p7gVpbOsgKIaFG";
          case "SM":
            return "https://buy.stripe.com/fZe3cVdJdbOs1PO4hj";
          case "SL":
            return "https://buy.stripe.com/28o7tb48DbOs7a8aFI";
          case "SXL":
            return "https://buy.stripe.com/3cs5l30WrcSwbqo8xB";
          case "MS":
            return "https://buy.stripe.com/7sI00JeNhaKo3XWcNS";
          case "MM":
            return "https://buy.stripe.com/9AQ7tbeNh4m0amk15b";
          case "ML":
            return "https://buy.stripe.com/9AQfZH7kPf0EeCA29g";
          case "MXL":
            return "https://buy.stripe.com/bIYaFneNh5q4664g07";
          case "LS":
            return "https://buy.stripe.com/dR65l3eNh2dS2TS7tC";
          case "LM":
            return "https://buy.stripe.com/14k00JcF94m00LKcNX";
          case "LL":
            return "https://buy.stripe.com/4gw00JbB5cSwfGE3do";
          case "LXL":
            return "https://buy.stripe.com/6oEdRz9sX6u8fGEeW7";
          case "XLS":
            return "https://buy.stripe.com/6oE6p7bB52dS0LK15i";
          case "XLM":
            return "https://buy.stripe.com/4gw8xf9sXf0E3XW4hv";
          case "XLL":
            return "https://buy.stripe.com/8wMbJrdJd8Cg9ig5lA";
          case "XLXL":
            return "https://buy.stripe.com/fZebJr7kP3hWamk9BR";
          default:
            return;
        }
      case "redred":
        switch (productsArr[0].size + productsArr[1].size) {
          case "SS":
            return "https://buy.stripe.com/8wMcNvdJd4m0eCA9B6";
          case "SM":
            return "https://buy.stripe.com/28oeVDcF9cSwfGE00x";
          case "SL":
            return "https://buy.stripe.com/aEUdRzcF94m02TS7t0";
          case "SXL":
            return "https://buy.stripe.com/14k28R20v9Gkdyw5kT";
          case "MS":
            return "https://buy.stripe.com/5kAcNv8oTbOseCAeVu";
          case "MM":
            return "https://buy.stripe.com/eVaaFnfRlg4Ibqo9Bb";
          case "ML":
            return "https://buy.stripe.com/6oEeVDgVpg4I5204gS";
          case "MXL":
            return "https://buy.stripe.com/3csaFn8oT7ycfGE4gT";
          case "LS":
            return "https://buy.stripe.com/eVa28RbB5bOs9igbJm";
          case "LM":
            return "https://buy.stripe.com/aEUbJrbB5cSw664dRv";
          case "LL":
            return "https://buy.stripe.com/6oE28Rax13hWdyw4gW";
          case "LXL":
            return "https://buy.stripe.com/5kA3cVeNhcSw3XW28P";
          case "XLS":
            return "https://buy.stripe.com/bIY7tb9sX3hW520fZG";
          case "XLM":
            return "https://buy.stripe.com/00gdRzgVp19O664bJr";
          case "XLL":
            return "https://buy.stripe.com/4gw00JeNhaKo0LKeVE";
          case "XLXL":
            return "https://buy.stripe.com/5kAfZH48DbOsamk6p9";
          default:
            return;
        }
    }
  }
};
