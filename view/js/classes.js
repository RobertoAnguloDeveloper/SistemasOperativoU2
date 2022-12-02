var ticket = 0;
var ticketRR = 0;
const tiempoFifo = 3;

class Persona{
  constructor(nombre, cc, duracion, hora, fecha){
    if(duracion != null){
      ticketRR++;
      this.ticketRR = ticketRR;
      this.nombre = nombre;
      this.tiempoLimite = tiempoFifo;
      this.cc = cc;
      this.duracion = duracion;
      this.hora = hora;
      this.fecha = fecha;
    }else{
      ticket++;
      this.ticket = ticket;
      this.nombre = nombre;
      this.tiempoLimite = tiempoFifo;
      this.cc = cc;
      this.hora = hora;
      this.fecha = fecha;
    }
  }

  // constructor(nombre, cc, duracion, hora, fecha){
  //   this.ticket++;
  //   this.nombre = nombre;
  //   this.cc = cc;
  //   this.duracion = duracion;
  //   this.hora = hora;
  //   this.fecha = fecha;
  // }

  getTicket(){
    return this.ticket;
  }

  setTicket(ticket){
    this.ticket = ticket;
  }

  getNombre(){
    return this.nombre;
  }

  setNombre(nombre){
    this.nombre = nombre;
  }

  getCc(){
    return this.cc;
  }

  setCc(cc){
    this.cc = cc;
  }

  getHora(){
    return this.hora;
  }

  setHora(hora){
    this.hora = hora;
  }

  getFecha(){
    return this.fecha;
  }

  setFecha(fecha){
    this.fecha = fecha;
  }

  getDuracion(){
    return this.duracion;
  }

  setDuracion(duracion){
    this.duracion = duracion;
  }
}

class Banco{
  constructor(tiempoLimite){
    this.tiempoLimite = tiempoLimite;
  }

  getTiempoLimite(){
    return this.tiempoLimite;
  }

}

function limpiarCampos(campos){
  for(let i=0;i<campos.length;i++){
    campos[i].value = "";
  }
}

fifo = [{}];

function persona1(){
  let today = new Date();
  let now = today.toLocaleString();
  let fullDate = now.split(",");

  let nombre = document.getElementById("nombre1").value;
  let cc = document.getElementById("cc1").value;
  let hora = fullDate[1];
  let fecha = fullDate[0];
  
  const p1 = new Persona(nombre, cc, null, hora, fecha);

  fifo.push({
    ticket: p1.ticket,
    nombre: p1.nombre,
    cc: p1.cc,
    duracion: p1.duracion,
    hora: p1.hora,
    fecha: p1.fecha
  });

  console.log(fifo);

  if (document.getElementById("table1").querySelector("tbody")) {
    document.getElementById("table1").querySelector("tbody").remove();
  }

  let tbody = document.createElement("tbody");

  for (let i = 1; i < fifo.length; i++) {
    if (i == 1) {
      
      document.getElementById("table1").appendChild(tbody);
    }

    let td1 = document.createElement("td").innerHTML = '<td>' + fifo[i].ticket + '</td>';
    let td2 = document.createElement("td").innerHTML = '<td>' + fifo[i].nombre + '</td>';
    let td3 = document.createElement("td").innerHTML = '<td>' + fifo[i].cc + '</td>';
    let td4 = document.createElement("td").innerHTML = '<td>' + fifo[i].hora + '</td>';
    let td5 = document.createElement("td").innerHTML = '<td>' + fifo[i].fecha + '</td>';

    tbody.insertRow(-1).innerHTML = td1+td2+td3+td4+td5; 
  }

  let campos = [
    document.getElementById("nombre1"),
    document.getElementById("cc1"),
  ]

  limpiarCampos(campos);
}

dataRoundRobin = [{}];

function persona2(){
  let today = new Date();
  let now = today.toLocaleString();
  let fullDate = now.split(",");

  let nombre = document.getElementById("nombre2").value;
  let cc = document.getElementById("cc2").value;
  let quantum = document.getElementById("quantum").value;
  let hora = fullDate[1];
  let fecha = fullDate[0];

  const p2 = new Persona(nombre, cc, quantum, hora, fecha);

  dataRoundRobin.push({
    ticketRR: p2.ticketRR,
    nombre: p2.nombre,
    cc: p2.cc,
    duracion: p2.duracion,
    hora: p2.hora,
    fecha: p2.fecha
  });

  console.log(dataRoundRobin);

  if (document.getElementById("table2").querySelector("tbody")) {
    document.getElementById("table2").querySelector("tbody").remove();
  }

  let tbody = document.createElement("tbody");
  
  for (let i = 1; i < dataRoundRobin.length; i++) {
    if (i == 1) {
      document.getElementById("table2").appendChild(tbody);
    }

    let td1 = document.createElement("td").innerHTML = '<td>' + dataRoundRobin[i].ticketRR + '</td>';
    let td2 = document.createElement("td").innerHTML = '<td>' + dataRoundRobin[i].nombre + '</td>';
    let td3 = document.createElement("td").innerHTML = '<td>' + dataRoundRobin[i].cc + '</td>';
    let td4 = document.createElement("td").innerHTML = '<td>' + dataRoundRobin[i].duracion + '</td>';
    let td5 = document.createElement("td").innerHTML = '<td>' + dataRoundRobin[i].hora + '</td>';
    let td6 = document.createElement("td").innerHTML = '<td>' + dataRoundRobin[i].fecha + '</td>';

    tbody.insertRow(-1).innerHTML = td1+td2+td3+td4+td5+td6; 
  }

  let campos = [
    document.getElementById("nombre2"),
    document.getElementById("cc2"),
    document.getElementById("quantum"),
  ]

  limpiarCampos(campos);
}