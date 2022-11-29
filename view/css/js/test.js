var array = [ { transportnumber: '45', time: '10:28:00', date:"2017-01-16"}
,{ transportnumber: '45', time: '10:38:00', date:"2017-01-16"}
,{ transportnumber: '45', time: '10:48:00', date:"2017-01-16"}
,{ transportnumber: '14', time: '10:12:00', date:"2017-01-16"}
,{ transportnumber: '14', time: '10:24:00', date:"2017-01-16"}
,{ transportnumber: '14', time: '10:52:00', date:"2017-01-16"}];
array.sort(function(b,a){
  return new Date(b.date + " "+b.time) - new Date(a.date + " "+a.time);
});
console.log(array);