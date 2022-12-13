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
 * This function displays an alert.
 */
function cookieClicked() {
  if (localStorage.cookiesClicked ) {
    //localStorage.cookiesClicked = 1
    localStorage.cookiesClicked = localStorage.cookiesClicked++
    
  } 
  else {
    localStorage.cookiesClicked = 1
  }
     
    document.getElementById("output").innerHTML = localStorage.cookiesClicked
}
