(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.onload = function () {
  document.getElementById("button").addEventListener("click", fetchPromise);
  const table = document.createElement("p");
  table.setAttribute("id","p1")
  document.getElementById("tableSpace").appendChild(table);
}

async function fetchPromise() {
  try {
    const response = await fetch("https://ptsv2.com/t/hz7b3-1658724590/post", {
      method: 'GET'
    });
      if(response.ok) {
        const jsonResponse = await response.json();
        document.getElementById("p1").innerHTML = JSON.stringify(jsonResponse);
      }
     } catch(error) {
      console.log("!");
      }
    }



},{}]},{},[1]);
