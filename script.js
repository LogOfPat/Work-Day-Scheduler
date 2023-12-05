
var timeCurrent = dayjs();
var hourCurrent = timeCurrent.format('H');
console.log(`current hour ${hourCurrent}`);

$(function () {

  // prints the current date in the header
  document.getElementById('headertime').textContent = "Current date: " + timeCurrent.format('MM/DD/YYYY');
  
  $("button").on("click", function() {
    this.parentElement;
    let key = this.parentElement.id;
    let event = this.parentElement.children[1].value;
    localStorage.setItem(key, String(event));
    console.log(this);
    console.log(this.parentElement.children[1].value); //checks textarea
  } );

  checkTime()
});


function compareTime(selectedHour) {
  var result = "";
  console.log("prints current selected hour: " + selectedHour);
  let hourCheck = selectedHour.substring(selectedHour.length-2);

    if (Number(hourCheck) > hourCurrent){
      result = "greater than current hour";
      document.getElementById(selectedHour).className = "row time-block future";
    } else if (Number(hourCheck) == hourCurrent) {
      result = "current hour";
      document.getElementById(selectedHour).className = "row time-block present";
    } else {
      result = "less than current";
      document.getElementById(selectedHour).className = "row time-block past";
    }

  return result;
};

function updateData(slotId) {
  console.log("id to update " + slotId)
  let textarea = document.getElementById(slotId);
  textarea.children[1].value = localStorage.getItem(slotId);
}

function checkTime(){
  let childElement = document.getElementById("timeslots").children;
  console.log(childElement);
  for (let i = 0; i < document.getElementById("timeslots").childElementCount; i++ ) {
    var timeSlot = childElement[i];
    console.log("the timeslot id " + timeSlot.id);
    compareTime(timeSlot.id);
    updateData(timeSlot.id);
  }

}