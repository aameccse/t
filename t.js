
document.getElementById("demo").innerHTML = date.toDateString();

function digi() {
  var date = new Date(),
      hour = date.getHours(),
      minute = checkTime(date.getMinutes()),
      ss = checkTime(date.getSeconds());
	  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      document.getElementById("demo").innerHTML =( date.getDate()+ " " + months[date.getMonth()] + " " + date.getFullYear() + " " + days[date.getDay()]);
  function checkTime(i) {
    if( i < 10 ) {
      i = "0" + i;
    }
    return i;
  }

if ( hour > 12 ) {
  hour = hour - 12;
  if ( hour == 12 ) {
    hour = checkTime(hour);
  document.getElementById("tt").innerHTML = hour+":"+minute+":"+ss+" AM";
  }
  else {
    hour = checkTime(hour);
    document.getElementById("tt").innerHTML = hour+":"+minute+":"+ss+" PM";
  }
}
else {
  document.getElementById("tt").innerHTML = hour+":"+minute+":"+ss+" AM";;
}
var time = setTimeout(digi,1000);
}


