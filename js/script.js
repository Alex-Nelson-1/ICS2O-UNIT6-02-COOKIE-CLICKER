// Created by: Alex Nelson
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT6-02-COOKIE-CLICKER/sw.js", {
    scope: "/ICS2O-UNIT6-02-COOKIE-CLICKER/",
  })
}

/**
 * This function adds 1 to the counter every time you click the cookie. The counter is saved to local storage.
 */
function cookieClicked() {
  //if cookies clicked exists, then...
  if (localStorage.cookiesClicked) {
    localStorage.cookiesClicked++
  } else {
    //cookies clicked does not exist create cookies clicked
    localStorage.cookiesClicked = 0
  }
  //output cookies clicked
  document.getElementById("output").innerHTML =
    "You have clicked the cookie " + localStorage.cookiesClicked + " times."
}
