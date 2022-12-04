// fs.writeFile("ticket2.json", "ticket2: 0", (err) => {
//   if (err) throw err;
//     console.log("Completed!");
// });

// const files = require("./reg/files.js");
// // var array = [ { time: '10:28:00', date:"1000-10-10"}
// // ,{ time: '10:38:00', date:"1000-10-10"}
// // ,{ time: '10:48:00', date:"1000-10-10"}
// // ,{ time: '10:12:00', date:"1000-10-10"}
// // ,{ time: '10:24:00', date:"1000-10-10"}
// // ,{ time: '10:52:00', date:"1000-10-10"}];

// function download(file) {
//   const link = document.createElement('a')
//   const url = URL.createObjectURL(file)

//   link.href = url
//   link.download = file.name
//   document.body.appendChild(link)
//   link.click()

//   document.body.removeChild(link)
//   window.URL.revokeObjectURL(url)
// }


// data = [{
//   ticket2: 1,
//   nombre: nombre2, 
//   cc: cc2, 
//   quantum: quantum,
//   hora: hora2,
//   fecha: fecha2
// }];

// console.log(data);

// const file = new File(data, 'ticket2.json', {
//   type: 'text/plain',
// });

// download(file);
// files.toJson(data);

var ticket1 = 0;

fifo = [{}];

function test(){
  var test = document.getElementById("table1").querySelector("tbody").querySelector("tr");
  console.log(test);
  
  test.remove();
}

function data1(){
  var today1 = new Date();
  var now1 = today1.toLocaleString();
  fullDate1 = now1.split(",");
  document.getElementById("fecha1").value = fullDate1[0];
  document.getElementById("hora1").value = fullDate1[1];

  nombre1 = document.getElementById("nombre1").value;
  cc1 = document.getElementById("cc1").value;
  hora1 = document.getElementById("hora1").value;
  fecha1 = document.getElementById("fecha1").value;

  ticket1++;

  fifo.push({
    ticket: ticket1,
    nombre: nombre1,
    cc: cc1,
    hora: hora1,
    fecha: fecha1
  });

  console.log(fifo);
  putInTable1(fifo);
}

function putInTable1(data){
  if (document.getElementById("table1").querySelector("tbody")) {
    document.getElementById("table1").querySelector("tbody").remove();
  }

  for (var i = 1; i < data.length; i++) {
    if (i == 1) {
      tbody = document.createElement("tbody");
      document.getElementById("table1").appendChild(tbody);
    }

    var td1 = document.createElement("td").innerHTML = '<td>' + data[i].ticket + '</td>';
    var td2 = document.createElement("td").innerHTML = '<td>' + data[i].nombre + '</td>';
    var td3 = document.createElement("td").innerHTML = '<td>' + data[i].cc + '</td>';
    var td4 = document.createElement("td").innerHTML = '<td>' + data[i].hora + '</td>';
    var td5 = document.createElement("td").innerHTML = '<td>' + data[i].fecha + '</td>';
    tbody.insertRow(-1).innerHTML = td1+td2+td3+td4+td5;
  }
}

var ticket2 = 0;

dataRoundRobin = [{}];

function data2(){
  var today2 = new Date();
  var now2 = today2.toLocaleString();
  fullDate2 = now2.split(",");
  document.getElementById("fecha2").value = fullDate2[0];
  document.getElementById("hora2").value = fullDate2[1];

  nombre2 = document.getElementById("nombre2").value;
  cc2 = document.getElementById("cc2").value;
  quantum = document.getElementById("quantum").value;
  hora2 = document.getElementById("hora2").value;
  fecha2 = document.getElementById("fecha2").value;

  ticket2++;

  dataRoundRobin.push({
    ticket: ticket2,
    nombre: nombre2,
    cc: cc2,
    quantum: quantum,
    hora: hora2,
    fecha: fecha2
  });

  console.log(dataRoundRobin);
  putInTable2(dataRoundRobin);
}

function putInTable2(data){
  if (document.getElementById("table2").querySelector("tbody")) {
    document.getElementById("table2").querySelector("tbody").remove();
  }

  for (var i = 1; i < data.length; i++) {
    if (i == 1) {
      tbody = document.createElement("tbody");
      document.getElementById("table2").appendChild(tbody);
    }

    var td1 = document.createElement("td").innerHTML = '<td>' + data[i].ticket + '</td>';
    var td2 = document.createElement("td").innerHTML = '<td>' + data[i].nombre + '</td>';
    var td3 = document.createElement("td").innerHTML = '<td>' + data[i].cc + '</td>';
    var td4 = document.createElement("td").innerHTML = '<td>' + data[i].quantum + '</td>';
    var td5 = document.createElement("td").innerHTML = '<td>' + data[i].hora + '</td>';
    var td6 = document.createElement("td").innerHTML = '<td>' + data[i].fecha + '</td>';
    tbody.insertRow(-1).innerHTML = td1+td2+td3+td4+td5+td6;
  }
}

function roundRobin(){

}