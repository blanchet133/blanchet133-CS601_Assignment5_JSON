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

    