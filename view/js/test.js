var array = [ { time: '10:28:00', date:"1000-10-10"}
,{ time: '10:38:00', date:"1000-10-10"}
,{ time: '10:48:00', date:"1000-10-10"}
,{ time: '10:12:00', date:"1000-10-10"}
,{ time: '10:24:00', date:"1000-10-10"}
,{ time: '10:52:00', date:"1000-10-10"}];
array.sort((b,a)=>{
  return new Date(b.date + " "+b.time) - new Date(a.date + " "+a.time);
});
console.log(array);