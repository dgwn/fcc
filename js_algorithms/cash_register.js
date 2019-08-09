const CURRENCY_DICTIONARY = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.10,
  "QUARTER": 0.25,
  "ONE": 1.00,
  "FIVE": 5.00,
  "TEN": 10.00,
  "TWENTY": 20.00,
  "ONE HUNDRED": 100.00
};

const REGISTER_STATUS = { closed: 'CLOSED', open: 'OPEN', insufficientFunds: 'INSUFFICIENT_FUNDS'};

function checkCashRegister(price, cash, cid) {
  let cashRegister = { status: '', change: cid };
  let changeNeeded = cash - price;
  let totalCash = getTotalinDrawer(cid);
  cashRegister.status = getRegisterStatus(changeNeeded, totalCash);

  // cid format is ["NAME", total amount of this item, value of this item, number of items]

  /*
  cid[i][2] = assignValue(cid[i][0]);
  cid[i][3] = cid[i][1] / cid[i][2];
  console.log(cid[i])
  */

}

function getTotalinDrawer(cid) {
  for (let i = 0; i < cid.length; i++) {
    let total = 0
    total += cid[i][1];
    return total;
  };
}

function getRegisterStatus(changeNeeded, totalCash) {
  if (changeNeeded > totalCash) {
    return REGISTER_STATUS.insufficientFunds;
  }
  else if (changeNeeded < totalCash) {
    return REGISTER_STATUS.open;
  }
  else return REGISTER_STATUS.closed;
}

function getChange() {
  let change = [];
  for (let i = 8; i >= 0; i--) {
    if (changeNeeded > cid[i][2]) {
      console.log(cid[i]);

    }
    else console.log("0 " + cid[i][0])
  };
};


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
