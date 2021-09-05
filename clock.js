const DateForm = document.querySelector("#date");
const ClockForm = document.querySelector("#clock");

function setDates() {
  const date = new Date();
  const Years = date.getFullYear();
  const Months = String(date.getMonth()+1).padStart(2,0);
  const Dates = String(date.getDate()).padStart(2,0);;
  const Days = date.getDay();
  
  const Hours = String(date.getHours()).padStart(2,0);
  const Minutes = String(date.getMinutes()).padStart(2,0);
  const Seconds = String(date.getSeconds()).padStart(2,0);

  DateForm.innerText = `${Years}.${Months}.${Dates}`;
  ClockForm.innerText = `${Hours}h ${Minutes}m ${Seconds}s`;
}

setDates();
setInterval(setDates,1000);