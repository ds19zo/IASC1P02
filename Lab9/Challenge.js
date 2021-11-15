var start = new Date();
var time = start.getTime();

function stopTime(){
  var stop = new Date();
  var time = stop.getTime();
  var difference = stop - start;
  var seconds = difference/1000;

  alert("You have been on this page for"+seconds+"seconds");
}
