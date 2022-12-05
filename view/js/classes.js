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

function simulateFifo(){
  let rows = document.getElementById("tableListo").getElementsByTagName("tr");
  let i = 0;
  let initialSize = rows.length-1;

  var interval = setInterval(()=>{
    const promise = new Promise((resolve)=>{
      // console.log("[i]=>"+i+" rows.length=>"+ rows.length);
      // if(i < initialSize){
      //   //document.getElementById('enCaja'+i).innerHTML = "****";
        
      // }

      setTimeout(()=>{
        if(i < rows.length){
          resolve();
          setTimeout(()=>{
          }, 1000);
        }
        resolve();
      }, 1000);
    });

    promise.then(res=>{
      if (i < initialSize-1){
        let tbody = document.createElement("tbody");
        document.getElementById("tableCPU").appendChild(tbody);

        let td1 = document.createElement("td").innerHTML = '<td>' + fifo[0].ticket + '</td>';
        let td2 = document.createElement("td").innerHTML = '<td>' + fifo[0].nombre + '</td>';
        let td3 = document.createElement("td").innerHTML = '<td>' + fifo[0].cc + '</td>';
        let td4 = document.createElement("td").innerHTML = '<td>' + fifo[0].hora + '</td>';
        let td5 = document.createElement("td").innerHTML = '<td>' + fifo[0].fecha + '</td>';

        tbody.insertRow(-1).innerHTML = td1+td2+td3+td4+td5;
        rows[1].remove()
        fifo.shift();
        i++;
      }else{
        let tbody = document.createElement("tbody");
        document.getElementById("tableCPU").appendChild(tbody);

        let td1 = document.createElement("td").innerHTML = '<td>' + fifo[0].ticket + '</td>';
        let td2 = document.createElement("td").innerHTML = '<td>' + fifo[0].nombre + '</td>';
        let td3 = document.createElement("td").innerHTML = '<td>' + fifo[0].cc + '</td>';
        let td4 = document.createElement("td").innerHTML = '<td>' + fifo[0].hora + '</td>';
        let td5 = document.createElement("td").innerHTML = '<td>' + fifo[0].fecha + '</td>';

        tbody.insertRow(-1).innerHTML = td1+td2+td3+td4+td5;
        rows[1].remove()
        fifo.shift();

        rows = document.getElementById("tableCPU").getElementsByTagName("tr");

        i = 0;
        initialSize = rows.length-1;

        var interval2 = setInterval(()=>{
          const promise2 = new Promise((resolve)=>{
            setTimeout(()=>{
              if(i < rows.length){
                resolve();
                setTimeout(()=>{
                }, 1000);
              }
              resolve();
            }, 1000);


          });

          promise2.then(res=>{
            if (i < initialSize-1){
              tbody = document.createElement("tbody");
              document.getElementById("tableTerminado").appendChild(tbody);

              td1 = document.createElement("td").innerHTML = rows[1].innerHTML;

              tbody.insertRow(-1).innerHTML = td1;
              rows[1].remove()
              i++;
            }else{
              tbody = document.createElement("tbody");
              document.getElementById("tableTerminado").appendChild(tbody);

              td1 = document.createElement("td").innerHTML = rows[1].innerHTML;

              tbody.insertRow(-1).innerHTML = td1;
              rows[1].remove();
              clearInterval(interval2);
            }
          });
        },2000);

        clearInterval(interval);
      }
    });
    
  }, 2000);
}

fifo = [{}];

fifo.shift();

function persona1(){
  let today = new Date();
  let now = today.toLocaleString();
  let fullDate = now.split(",");

  let nombre = document.getElementById("nombre1").value;
  let cc = document.getElementById("cc1").value;
  let hora = fullDate[1];
  let fecha = fullDate[0];
  
  if(fifo.length == 0){
    ticket = 0;
  }

  const p1 = new Persona(nombre, cc, null, hora, fecha);

  fifo.push({
    ticket: p1.ticket,
    nombre: p1.nombre,
    cc: p1.cc,
    duracion: p1.duracion,
    hora: p1.hora,
    fecha: p1.fecha
  });

  if (document.getElementById("tableListo").querySelector("tbody")) {
    document.getElementById("tableListo").querySelector("tbody").remove();
  }

  let tbody = document.createElement("tbody");

  for (let i = 0; i < fifo.length; i++) {
    if (i == 0) {
      document.getElementById("tableListo").appendChild(tbody);
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

roundRobin = [{}];
roundRobin.shift();

function simulateRR(){
  let rows = document.getElementById("table2").getElementsByTagName("tr");
  // 
  // console.log(roundRobin.length);
  // console.log("Click")
  if (rows.length > 1){
    if(roundRobin[0].duracion <= roundRobin[0].cpuLimit){
      rows[1].remove();
      roundRobin.shift();
    }else{
      let aux = rows[rows.length-1]
      rows[rows.length-1] = rows[1];
    }
  }
}

function persona2(){
  let today = new Date();
  let now = today.toLocaleString();
  let fullDate = now.split(",");

  let nombre = document.getElementById("nombre2").value;
  let cc = document.getElementById("cc2").value;
  let quantum = document.getElementById("quantum").value;
  let cpuLimit = document.getElementById("cpuLimit").value;
  let hora = fullDate[1];
  let fecha = fullDate[0];

  if(roundRobin.length == 0){
    ticketRR = 0;
  }

  const p2 = new Persona(nombre, cc, quantum, hora, fecha);

  roundRobin.push({
    ticketRR: p2.ticketRR,
    nombre: p2.nombre,
    cc: p2.cc,
    duracion: p2.duracion,
    cpuLimit: cpuLimit,
    hora: p2.hora,
    fecha: p2.fecha
  });

  if (document.getElementById("table2").querySelector("tbody")) {
    document.getElementById("table2").querySelector("tbody").remove();
  }

  let tbody = document.createElement("tbody");
  
  for (let i = 0; i < roundRobin.length; i++) {
    if (i == 0) {
      document.getElementById("table2").appendChild(tbody);
    }

    let td1 = document.createElement("td").innerHTML = '<td>' + roundRobin[i].ticketRR + '</td>';
    let td2 = document.createElement("td").innerHTML = '<td>' + roundRobin[i].nombre + '</td>';
    let td3 = document.createElement("td").innerHTML = '<td>' + roundRobin[i].cc + '</td>';
    let td4 = document.createElement("td").innerHTML = '<td>' + roundRobin[i].duracion + '</td>';
    let td5 = document.createElement("td").innerHTML = '<td>' + roundRobin[i].cpuLimit + '</td>';
    let td6 = document.createElement("td").innerHTML = '<td>' + roundRobin[i].hora + '</td>';
    let td7 = document.createElement("td").innerHTML = '<td>' + roundRobin[i].fecha + '</td>';

    tbody.insertRow(-1).innerHTML = td1+td2+td3+td4+td5+td6+td7; 
  }

  let campos = [
    document.getElementById("nombre2"),
    document.getElementById("cc2"),
    document.getElementById("quantum")
  ];

  limpiarCampos(campos);
}

function fijarCambiar(){
  let cpuLimit = document.getElementById("cpuLimit");
  if(!cpuLimit.disabled){
    cpuLimit.disabled = true;
    cpuLimit.style = "width: 150px; background-color: #ACD9DD;";
  }else{
    cpuLimit.style = "width: 150px; background-color: none;";
    cpuLimit.disabled = false;
  }
}