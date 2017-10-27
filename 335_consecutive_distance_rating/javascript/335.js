//solution to /r/dailyprogrammer #335 - Consectutive distance rating

/*
 * @param input an array of numbers
 */
function distanceRating(input) {
	let total = 5, distance = 0;
	for(let i = 0; i < input.length; i++, distance = 0)
		for(let j = i; j < input.length; j++ )
			// Test for +1 and -1 input[i]
			if(input[i] == input[j] - 1 || input[i] - 1 == input[j])
				total += (j - (i + 1));
	console.log("Input array: " + input);
	console.log("Result: " + total);
	return total;
}
distanceRating([77, 39, 35, 38, 41, 42, 76, 73, 40, 31, 10]);
