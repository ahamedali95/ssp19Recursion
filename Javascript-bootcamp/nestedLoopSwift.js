function calculate(a) {
	var count = 0; //3
	var amount = [];

	for (var i = 0; i < a.length; i++) {
		var amount1 = a[i]; //20

		for (var j = 0; j < a.length; j++) {
			var amount2 = a[j]; //20

			if (amount1 === amount2) {
				count += 1;
				console.log(count);
			}
			
		}

		if (count >= 3) {
				count = 0;
				if (amount.indexOf(amount1) === - 1) {
				amount.push(amount1);
			}
		} else {
				count = 0;
			}
	}

	return amount;
}

console.log(calculate([1000,50,60,1000,30,20,50,20,50,1000,20,100,100,100]));