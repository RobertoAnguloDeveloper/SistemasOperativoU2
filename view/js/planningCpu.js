var ticket = 0;
var ticketRR = 0;
var fifo = [{}];
fifo.shift();
var roundRobin = [{}];
roundRobin.shift();

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
  
  putIntoTable("tableListo", fifo, Object.keys(fifo[0]));

  let campos = [
    document.getElementById("nombre1"),
    document.getElementById("cc1"),
  ]

  limpiarCampos(campos);
}

function simulateFifo(){
  buttons = ["btnCreateFifo","simulateFifo"];

  disabled(buttons, true);

  let rows = document.getElementById("tableListo").getElementsByTagName("tr");
  let rowsTableCPU = document.getElementById("tableCPU").getElementsByTagName("tr");
  
  let rowFinished = [];

  const asyncFunctionFifo = async ()=>{
    var intervalFF = setInterval(()=>{
      
      if (rows.length > 1){
        rows[1].remove();
        let rowCpu = [];
        
        rowCpu[0] = fifo.shift();
        rowFinished.push(rowCpu[0]);

        sleep(1000).then(() => {
          putIntoTable("tableCPU", rowCpu, Object.keys(rowCpu[0]));
        });

        sleep(2000).then(() => {
          rowsTableCPU[1].remove();
          putIntoTable("tableTerminado", rowFinished, Object.keys(rowFinished[0]));
        });

      }else{
        disabled(buttons, false);
        clearInterval(intervalFF);
      }
    }, 3250);
  }
  asyncFunctionFifo();
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

    putIntoTable("tableRR1", roundRobin, Object.keys(roundRobin[0]));

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

function simulateRR(){
  buttons = ["btnCreateRoundRobin","simulateRR"];

  disabled(buttons, true);
  
  let rowsTableCPU = document.getElementById("tableRR2").getElementsByTagName("tr");
  let rowFinished = [];
  let i = 0;
  const asyncFunctionRR = async ()=>{
    var intervalRR = setInterval(()=>{
      let rows = [].slice.call(document.getElementById("tableRR1").getElementsByTagName("tr"));
      rows.shift();
      let rowCpu = [];
      
      if (rows.length > 0){
        let rafaga = parseInt(rows[0].cells[3].innerText);
        let quantum = parseInt(rows[0].cells[4].innerText);

        let remainingTime = Math.abs(rafaga - quantum);

        rows[0].cells[3].innerText = remainingTime;
        roundRobin[0].rafaga = remainingTime;

        
        if(rafaga < quantum || remainingTime === 0){
          console.log(rows[0]);
          rows[0].remove();
          rows.shift();
          rowCpu[0] = roundRobin.shift();
          rowCpu[0].rafaga = 0;
          rowFinished.push(rowCpu[0]);
          
          sleep(1000).then(() => {
            putIntoTable("tableRR2", rowCpu, Object.keys(rowCpu[0]));
          });

          sleep(2000).then(() => {
            rowsTableCPU[1].remove();
            putIntoTable("tableRR3", rowFinished, Object.keys(rowFinished[0]));
          });
        }else {
          console.log("ITERACION #"+i);
          rows.push(rows.shift());
          roundRobin.push(roundRobin.shift());
          putIntoTable("tableRR1", roundRobin, Object.keys(roundRobin[0]));
        }
        
      }else{
        disabled(buttons, false);
        clearInterval(intervalRR);
      }
      
    }, 2200);
  }
  asyncFunctionRR();
}



function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function limpiarCampos(campos){
  for(let i=0;i<campos.length;i++){
    campos[i].value = "";
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

function disabled(buttonsId, status){
  var buttons = [];
  for (let i = 0; i < buttonsId.length; i++) {
    buttons[i] = document.getElementById(buttonsId[i]);
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = status;
  }
}

function putIntoTable(tableId, dataArray, labelsArray){
  let wholeRow = [];
  
  if (document.getElementById(tableId).querySelector("tbody")) {
    document.getElementById(tableId).querySelector("tbody").remove();
  }

  let tbody = document.createElement("tbody");

  for (let i = 0; i < dataArray.length; i++) {
    if (i == 0) {
      document.getElementById(tableId).appendChild(tbody);
    }

    let rowString = "";
    for (let j = 0; j < labelsArray.length; j++) {
      if(dataArray[i][labelsArray[j]] != undefined) {
        let td = document.createElement("td").innerHTML = '<td>' + dataArray[i][labelsArray[j]] + '</td>';
        rowString += td;
      }
    }
    wholeRow.push(rowString);
  }
  
  for (let i = 0; i < wholeRow.length; i++) {
    tbody.insertRow(-1).innerHTML = wholeRow[i];
  }
}