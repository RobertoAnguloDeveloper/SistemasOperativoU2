/* function fifo(){

  this.dataStore = Array.prototype.slice.call(arguments, 0);
  this.entrar = entrar; 
  this.salir = salir;
  this.isEmpty = isEmpty;
  this.print = print;

  function entrar (element) {
    this.dataStore.push(element);
  }

  function salir(){
    var Prioridad = this.dataStore[0].Prioridad;
    var prioriItem = 0;
    this.dataStore.forEach(function (item, index ){
      if(item.Prioridad < Prioridad) {
        Prioridad = item.Prioridad;
        prioriItem = index;
      }
    });
    return this.dataStore.splice(prioriItem, 1)[0];
  }

  function isEmpty(){
    return this.dataStore.length == 0;  
  }
  function print(element){
    this.dataStore.map(function(patient){
      element.appendChild(patient.node);
    });
    }

    function Patient(name, priority){
        this.name = name; 
        this.priority = priority;
        this.time = Math.random()*10 + 3;
        var div = document.createElement("div");
        div.setAttribute("id", "patient-"+this.name);
        div.appendChild(document.createTextNode(this.name + "\n("+ this.priority+")"));
        this.node =  div;
      }
} */
