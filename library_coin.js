"use strict";

// OBJECT LITERAL DECLARE
const coins = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  cents: 0,

  makeChange(cents) {
    if (isNaN(cents) || cents < 0 || cents > 99) {
      alert("Please enter a valid number between 0 and 99");
    } else {
      let quarters = cents / 25;
      quarters = Math.floor(quarters);
      cents = cents % 25;

      let dimes = cents / 10;
      dimes = Math.floor(dimes);
      cents = cents % 10;

      let nickels = cents / 5;
      nickels = Math.floor(nickels);

      let pennies = cents % 5;
      // ------------------INSERTING VALUES ---------------------
      $("#pennies").val(pennies);
      $("#quarters").val(quarters);
      $("#nickels").val(nickels);
      $("#dimes").val(dimes);
    }
  },
};
//   GETTING VALUE OF CENT FROM HTML PAGE
var cents = document.getElementById("cents").value;
//   --- --------------------TRY CATCH -----------------------------
try {
  //   INITIALIZING OBJECT LITERAL
  coins.makeChange(cents);
} catch (err) {
  //   CATCHING ERROR AND INSERTING ERROR
  console.log("dd", err);
  document.getElementById("error").innerHTML = err.message;
}
coins.makeChange(cents);
