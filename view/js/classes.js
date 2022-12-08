var ticket = 0;
var ticketRR = 0;

class Persona{
  constructor(nombre, cc, rafaga, quantum, hora, fecha){
    if(rafaga != null){
      ticketRR++;
      this.ticketRR = ticketRR;
      this.nombre = nombre;
      this.cc = cc;
      this.rafaga = rafaga;
      this.quantum = quantum;
      this.hora = hora;
      this.fecha = fecha;
    }else{
      ticket++;
      this.ticket = ticket;
      this.nombre = nombre;
      this.cc = cc;
      this.hora = hora;
      this.fecha = fecha;
    }
  }
}

function limpiarCampos(campos){
  for(let i=0;i<campos.length;i++){
    campos[i].value = "";
  }
}

function simulateFifo(){
  document.getElementById("btnCreateFifo").disabled = true;
  document.getElementById("simulateFifo").disabled = true;

  let rows = document.getElementById("tableListo").getElementsByTagName("tr");
  let i = 0;
  let initialSize = rows.length-1;

  var interval = setInterval(()=>{
    const promise = new Promise((resolve)=>{
      setTimeout(()=>{
        if(i < rows.length){
          resolve();
        }
        resolve();
      }, 2000);
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

        var interval2 = setInterval(()=>{
          let promise2 = new Promise((resolve)=>{
            setTimeout(()=>{
              resolve();
            }, 500);
          });

          promise2.then(res=>{
            let rows2 = document.getElementById("tableCPU").getElementsByTagName("tr");

            if(rows2.length > 1) {
              let tbody2 = document.createElement("tbody");
              document.getElementById("tableTerminado").appendChild(tbody2);

              let tdx = document.createElement("td").innerHTML = rows2[1].innerHTML;

              tbody2.insertRow(-1).innerHTML = tdx;
              rows2[1].remove();
              clearInterval(interval2);
            }
          });
        },2000);

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

        var interval3 = setInterval(()=>{
          let promise3 = new Promise((resolve)=>{
            setTimeout(()=>{
              resolve();
            }, 1000);
          });

          promise3.then(res=>{
            let rows2 = document.getElementById("tableCPU").getElementsByTagName("tr");
            if(rows2.length > 1) {
              let tbody2 = document.createElement("tbody");
              document.getElementById("tableTerminado").appendChild(tbody2);

              let tdx = document.createElement("td").innerHTML = rows2[1].innerHTML;

              tbody2.insertRow(-1).innerHTML = tdx;
              rows2[1].remove();

              document.getElementById("btnCreateFifo").disabled = false;
              document.getElementById("simulateFifo").disabled = false;

              clearInterval(interval3);
            }
          });
        },2500);
        
        clearInterval(interval);
      }
    });
    
  }, 2500);
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

  const p1 = new Persona(nombre, cc, null, null, hora, fecha);

  fifo.push({
    ticket: p1.ticket,
    nombre: p1.nombre,
    cc: p1.cc,
    rafaga: p1.rafaga,
    quantum: p1.quantum,
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
  
  const wait = async ms => new Promise(resolve => setTimeout(resolve, ms));
  // const asyncFunction = async ()=>{
  //   console.log("1");
  //   await wait(1000);
  //   console.log("2");
  //   await wait(1000);
  //   console.log("3");
  // }
  // asyncFunction();

  const asyncFunction = async ()=>{
    
    var interval6 = setInterval(()=>{
      let rows = document.getElementById("tableRR1").getElementsByTagName("tr");
      if (rows.length > 1){
        
        let rafaga = roundRobin[0].rafaga;
        let quantum = roundRobin[0].quantum;

        let remainingTime = Math.abs(rafaga - quantum);

        rows[1].cells[3] = remainingTime;
        roundRobin[0].rafaga = remainingTime;

        if (remainingTime === 0){
          let tbody = document.createElement("tbody");
          document.getElementById("tableRR2").appendChild(tbody);

          let td1 = document.createElement("td").innerHTML = '<td>' + roundRobin[0].ticketRR + '</td>';
          let td2 = document.createElement("td").innerHTML = '<td>' + roundRobin[0].nombre + '</td>';
          let td3 = document.createElement("td").innerHTML = '<td>' + roundRobin[0].cc + '</td>';
          let td4 = document.createElement("td").innerHTML = '<td>' + roundRobin[0].rafaga + '</td>';
          let td5 = document.createElement("td").innerHTML = '<td>' + roundRobin[0].quantum + '</td>';
          let td6 = document.createElement("td").innerHTML = '<td>' + roundRobin[0].hora + '</td>';
          let td7 = document.createElement("td").innerHTML = '<td>' + roundRobin[0].fecha + '</td>';

          tbody.insertRow(-1).innerHTML = td1+td2+td3+td4+td5+td6+td7;
          
          rows[1].remove();
          roundRobin.shift();
        }else{
          if(rafaga > quantum){
            
            let tbody = document.createElement("tbody");
            document.getElementById("tableRR1").appendChild(tbody);

            let td1 = document.createElement("td").innerHTML = '<td>' + roundRobin[0].ticketRR + '</td>';
            let td2 = document.createElement("td").innerHTML = '<td>' + roundRobin[0].nombre + '</td>';
            let td3 = document.createElement("td").innerHTML = '<td>' + roundRobin[0].cc + '</td>';
            let td4 = document.createElement("td").innerHTML = '<td>' + roundRobin[0].rafaga + '</td>';
            let td5 = document.createElement("td").innerHTML = '<td>' + roundRobin[0].quantum + '</td>';
            let td6 = document.createElement("td").innerHTML = '<td>' + roundRobin[0].hora + '</td>';
            let td7 = document.createElement("td").innerHTML = '<td>' + roundRobin[0].fecha + '</td>';

            tbody.insertRow(-1).innerHTML = td1+td2+td3+td4+td5+td6+td7;
            rows[1].remove();
            roundRobin.push(roundRobin.shift());
          }else{
            let tbody = document.createElement("tbody");
            document.getElementById("tableRR2").appendChild(tbody);

            let td1 = document.createElement("td").innerHTML = '<td>' + roundRobin[0].ticketRR + '</td>';
            let td2 = document.createElement("td").innerHTML = '<td>' + roundRobin[0].nombre + '</td>';
            let td3 = document.createElement("td").innerHTML = '<td>' + roundRobin[0].cc + '</td>';
            let td4 = document.createElement("td").innerHTML = '<td>' + 0 + '</td>';
            let td5 = document.createElement("td").innerHTML = '<td>' + roundRobin[0].quantum + '</td>';
            let td6 = document.createElement("td").innerHTML = '<td>' + roundRobin[0].hora + '</td>';
            let td7 = document.createElement("td").innerHTML = '<td>' + roundRobin[0].fecha + '</td>';

            tbody.insertRow(-1).innerHTML = td1+td2+td3+td4+td5+td6+td7;
            rows[1].remove();
            roundRobin.shift();
          }
        }
      }else{
        console.log("Completed!");
        clearInterval(interval6);
      }
    },1000);

    
  }
  asyncFunction();
}

function persona2(){
  let today = new Date();
  let now = today.toLocaleString();
  let fullDate = now.split(",");
  
  let nombre = document.getElementById("nombre2").value;
  let cc = document.getElementById("cc2").value;
  let quantum = document.getElementById("quantum").value;
  let rafaga = document.getElementById("rafaga").value;
  let hora = fullDate[1];
  let fecha = fullDate[0];

  if(roundRobin.length == 0){
    ticketRR = 0;
  }

  if(quantum != "" && rafaga != ""){
    
    const p2 = new Persona(nombre, cc, parseInt(rafaga), parseInt(quantum), hora, fecha);

    roundRobin.push({
      ticketRR: p2.ticketRR,
      nombre: p2.nombre,
      cc: p2.cc,
      rafaga: p2.rafaga,
      quantum: p2.quantum,
      hora: p2.hora,
      fecha: p2.fecha
    });

    if (document.getElementById("tableRR1").querySelector("tbody")) {
      document.getElementById("tableRR1").querySelector("tbody").remove();
    }

    let tbody = document.createElement("tbody");
    
    for (let i = 0; i < roundRobin.length; i++) {
      if (i == 0) {
        document.getElementById("tableRR1").appendChild(tbody);
      }

      let td1 = document.createElement("td").innerHTML = '<td>' + roundRobin[i].ticketRR + '</td>';
      let td2 = document.createElement("td").innerHTML = '<td>' + roundRobin[i].nombre + '</td>';
      let td3 = document.createElement("td").innerHTML = '<td>' + roundRobin[i].cc + '</td>';
      let td4 = document.createElement("td").innerHTML = '<td>' + roundRobin[i].rafaga + '</td>';
      let td5 = document.createElement("td").innerHTML = '<td>' + roundRobin[i].quantum + '</td>';
      let td6 = document.createElement("td").innerHTML = '<td>' + roundRobin[i].hora + '</td>';
      let td7 = document.createElement("td").innerHTML = '<td>' + roundRobin[i].fecha + '</td>';

      tbody.insertRow(-1).innerHTML = td1+td2+td3+td4+td5+td6+td7; 
    }

    let campos = [
      document.getElementById("nombre2"),
      document.getElementById("cc2"),
      document.getElementById("rafaga")
    ];

    limpiarCampos(campos);
  }else if(quantum == ""){
    alert("Debes llenar el campo QUANTUM");
  }else{
    alert("Debes llenar el campo RÁFAGA");
  }
}

function fijarCambiar(){
  let quantum = document.getElementById("quantum");
  if(!quantum.disabled){
    quantum.disabled = true;
    quantum.style = "width: 150px; background-color: #ACD9DD;";
  }else{
    quantum.style = "width: 150px; background-color: none;";
    quantum.disabled = false;
  }
}