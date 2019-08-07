function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let totalCash = 0;
  // cid format is ["NAME", total amount of this item, value of this item, number of items]
  for (let i = 0; i < cid.length; i++) {
    totalCash += cid[i][1];
    cid[i][2] = assignValue(cid[i][0]);
    cid[i][3] = cid[i][1] / cid[i][2];
    console.log(cid[i])
  };

  // return the desired data
  if (change > totalCash) {
    console.log("insufficient");
    return {status: "INSUFFICIENT_FUNDS", change: [changeGiven]};
  }
  else if (change === totalCash) {
    console.log("closed");
    return {status: "CLOSED", change: [changeGiven]};
  }
  else if (change < totalCash) {
    console.log("open");
    return {status: "OPEN", change: [changeGiven]};
  }

  function assignValue(item) {
    if (item === "PENNY") {
      return 0.01;
    }
    else if (item === "NICKEL") {
      return 0.05;
    }
    else if (item === "DIME") {
      return 0.10;
    }
    else if (item === "QUARTER") {
      return 0.25;
    }
    else if (item === "ONE") {
      return 1;
    }
    else if (item === "FIVE") {
      return 5;
    }
    else if (item === "TEN") {
      return 10;
    }
    else if (item === "TWENTY") {
      return 20;
    }
    else if (item === "ONE HUNDERED") {
      return 100;
    }
  };

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
