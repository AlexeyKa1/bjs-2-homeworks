"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let D = b**2 - 4 * a * c;

  if(D > 0){
    let tmp = [];
    tmp.push((-b + Math.sqrt(D)) / (2*a));
    tmp.push((-b - Math.sqrt(D)) / (2*a));
    arr = tmp;
  }else if(D === 0){
    arr = -b / (2 * a);
  }else if(D < 0){
    return arr;
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
