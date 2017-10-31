var fs = require('fs');

var input_dates_text = fs.readFileSync('input.txt', 'utf8');
var dates = input_dates_text.split('\n');
let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];  

// There is an error with an invalid date, and a null string at the end of the file. Will fix tomorrow
for(let i = 0; i < dates.length && dates[i] != null; i++){
	var date = new Date(dates[i]);
    	var day = date.getDay();
	console.log(day);
}
