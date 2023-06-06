function show() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = yyyy+'-'+mm+'-'+dd;
	$('#tdydate').attr('value', today);
	// Load data on the page
	var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;
	if (i == 0) {
		return;
	}
    while ( i-- ) {
        values.push(` ${localStorage.getItem(keys[i])}`);
    }
    var result = ''
    number = 0;
    while (number < values.length) {
		result += `${values[number]}`
		number ++;
    }
    var date = new Date(); // Get date
    var h = date.getHours(); // Get hour: 0 - 23
    if (h <= 10) {
    	document.getElementById("first").checked = true;
    } else if (h >= 11) {
    	document.getElementById("second").checked = true;
    }
}
