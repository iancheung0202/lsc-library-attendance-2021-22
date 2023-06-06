
// Create a clock
function showTime(){
    var date = new Date(); // Get date
    var h = date.getHours(); // Get hour: 0 - 23
    var m = date.getMinutes(); // Get minute: 0 - 59
    var s = date.getSeconds(); // Get second: 0 - 59
    // Add "0" to numbers only having the place value
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s;
    // Print the time out
    document.getElementById("banner").innerHTML = "現在時間: ";
    document.getElementById("clock").innerHTML = time;
    if (h <= 13) {
    	var thePeriod = "Lunchtime";
    } else if (h >= 14) {
    	var thePeriod = "After-school";
    }
	document.getElementById("period").innerHTML = thePeriod;
    // Repeat the function every 1000 milliseconds (1 second)
    setTimeout(showTime, 1000);
}
showTime();