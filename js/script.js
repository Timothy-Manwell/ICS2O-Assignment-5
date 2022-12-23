// Copyright (c) 2022 Timothy Manwell All rights reserved
//
// Created by: Timothy Manwell
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

function myButtonClicked() {
  const timesThroughLoop =  parseInt(document.getElementById("times-through-loop").value)
  var counter = 0
  var piAnswer = 0

  while (counter < timesThroughLoop) {
    piAnswer = piAnswer + ((4 / (1 + (2 *counter))) * (-1) ** counter)
    counter++
  }
  
  document.getElementById("answer").innerHTML =
    "Pi to " + timesThroughLoop + " digits is " + piAnswer + "."
}
