(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "degrees" : [
    {
      "school" : "University of Massachusetts - Amherst",
      "major" : "Environmental Science",
      "type" : "B.S.",
      "year conferred" : "2010"
    },
    {
      "school" : "Boston University",
      "major" : "Computer Science (Metropolitan College)",
      "type" : "M.S.",
      "year conferred" : "2023-2024 (expected)"
    }
  ]
}
},{}],2:[function(require,module,exports){
window.onload = function () {
  document.getElementById("button").addEventListener("click", fetchPromise);
}

const jsonFile = require("../educationData.json");

async function fetchPromise() {
  try {
    const response = await fetch("https://ptsv2.com/t/hz7b3-1658724590/post", {
      method: 'POST',
      body: JSON.stringify(jsonFile),
      // headers : {
      //   'Content-type' : 'text'
      // }
    });
      if(response.ok) {
        console.log(response);
        //const jsonResponse = await response.json();
        console.log(response.status);
      }
     } catch(error) {
      console.log("!");
      }
    }

    
},{"../educationData.json":1}]},{},[2]);
