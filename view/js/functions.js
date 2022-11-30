// fs.writeFile("ticket.json", "ticket: 0", (err) => {
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
//   ticket: 1,
//   nombre: nombre2, 
//   cc: cc2, 
//   quantum: quantum,
//   hora: hora2,
//   fecha: fecha2
// }];

// console.log(data);

// const file = new File(data, 'ticket.json', {
//   type: 'text/plain',
// });

// download(file);
// files.toJson(data);

var ticket = 0;

function data2(){

  nombre2 = document.getElementById("nombre2").value;
  cc2 = document.getElementById("cc2").value;
  quantum = document.getElementById("quantum").value;
  hora2 = document.getElementById("hora2").value;
  fecha2 = document.getElementById("fecha2").value;

  ticket++;

  data = {
    ticket: ticket,
    nombre: nombre2, 
    cc: cc2, 
    quantum: quantum,
    hora: hora2,
    fecha: fecha2
  };

  console.log(data);
  
}