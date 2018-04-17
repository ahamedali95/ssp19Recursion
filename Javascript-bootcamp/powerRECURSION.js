function power(base, exponent) {
	var result = base;

	for (var i = exponent - 1; i >= 1; i--) {
		result *= base;
	}

	return result;
}

console.log(power(10,0));


function computePower(num, exponent) {
	if (exponent === 0) {
		return 1;
	}

	return num * computePower(num, exponent - 1);
}

console.log(power2(10,2));

