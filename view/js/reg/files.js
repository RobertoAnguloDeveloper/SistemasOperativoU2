const fs = require("fs");

function sortByTime(array){
    array.sort((b,a)=>{
      return new Date(b.date + " "+b.time) - new Date(a.date + " "+a.time);
    });
    return array;
  }
  
  
  function toJson(array){
    fs.writeFile("time.json", JSON.stringify(array), (err) => {
      if (err) throw err;
        console.log("Completed!");
    });
  }
  
  function toCsv(array){
    fs.writeFile("time.csv", array.join("\n"), (err) => {
      if (err) throw err;
        console.log("Completed!");
    });
    console.log("Completed!");
  }

  module.exports.sortByTime = sortByTime;
  module.exports.toJson = toJson;