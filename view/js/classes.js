var ticket = 0;
const tiempoFifo = 3;

class Persona{
  constructor(nombre, cc, hora, fecha){
    ticket++;
    this.ticket = ticket;
    this.nombre = nombre;
    this.tiempoLimite = tiempoFifo;
    this.cc = cc;
    this.hora = hora;
    this.fecha = fecha;
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

  fifo(persona) {
    console.log(this.tiempoLimite, persona);
  }
}

function test(){
  var today1 = new Date();
  var now1 = today1.toLocaleString();
  fullDate1 = now1.split(",");
  document.getElementById("fecha1").value = fullDate1[0];
  document.getElementById("hora1").value = fullDate1[1];

  nombre1 = document.getElementById("nombre1").value;
  cc1 = document.getElementById("cc1").value;
  hora1 = document.getElementById("hora1").value;
  fecha1 = document.getElementById("fecha1").value;

  const p1 = new Persona(nombre1, cc1, hora1, fecha1);
  const banco = new Banco(5);

  banco.fifo(p1);
}



