$(document).ready(function() {

	var i = {
		cost: 		$('#cost'),
		discount: 	$('#discount'),
		total: 		$('#total'),
		profit: 	$('#profit')
	}
	var activeField = undefined;
	var perviousFiels = undefined;

	/* on keyup calculate by active field */
	i.cost.bind('keyup', function() {
		activeField = 'cost';
		calculate();
	});

	i.discount.bind('keyup', function() {
		activeField = 'discount';
		calculate();
	});

	i.total.bind('keyup', function() {
		activeField = 'total';
		calculate();
	});

	i.profit.bind('keyup', function() {
		activeField = 'profit';
		calculate();
	});

	/* on blur save pervious field */
	i.cost.bind('blur', function() { perviousFiels = 'cost'; });
	i.discount.bind('blur', function() { perviousFiels = 'discount'; });
	i.total.bind('blur', function() { perviousFiels = 'total'; });
	i.profit.bind('blur', function() { perviousFiels = 'profit'; });


	function calculate() {
		var v = {
			cost: 		parseFloat(i.cost.val()),
			discount: 	parseFloat(i.discount.val()),
			total: 		parseFloat(i.total.val()),
			profit: 	parseFloat(i.profit.val())
		}

		console.log('activeField = ' + activeField);
		console.log('perviousFiels = ' + perviousFiels);

		switch(activeField) {
			case 'cost':
				calulateByCost(v);
				break;

			case 'discount':
				calulateByDiscount(v);
				break;

			case 'total':
				calulateByTotal(v);
				break;

			case 'profit':
				calulateByProfit(v);
				break;
		}
		
	}
	function calulateByCost(v) {
		if(activeField != 'cost' || isNaN(v.cost)) { return; }

		if(perviousFiels == 'discount' && !isNaN(v.discount)) {
			v.profit = v.cost / 100 * v.discount;
			v.total = v.cost - v.profit;

			i.total.val(v.total);
			i.profit.val(v.profit);
		} else if(perviousFiels == 'total' && !isNaN(v.total)) {
			v.profit = v.cost - v.total;
			v.discount = 100 / v.cost * v.profit;

			i.profit.val(v.profit);
			i.discount.val(v.discount);
		} else if(perviousFiels == 'profit' && !isNaN(v.profit)) {
			v.total = v.cost - v.profit;
			v.discount = 100 / v.cost * v.profit;;

			i.discount.val(v.discount);
			i.total.val(v.total);
		}
	}

	function calulateByDiscount(v) {
		if(activeField != 'discount' || isNaN(v.discount)) { return; }

		if(perviousFiels == 'cost' && !isNaN(v.cost)) {
			v.profit = v.cost / 100 * v.discount;
			v.total = v.cost - v.profit;

			i.total.val(v.total);
			i.profit.val(v.profit);
		} else if(perviousFiels == 'total' && !isNaN(v.total)) {
			v.cost = v.total / (100 - v.discount) * 100;
			v.profit =  v.cost / 100 * v.discount;

			i.cost.val(v.cost);
			i.profit.val(v.profit);
		} else if(perviousFiels == 'profit' && !isNaN(v.profit)) {
			v.cost = v.profit / v.discount * 100;
			v.total = v.cost - v.profit;
			
			i.cost.val(v.cost);
			i.total.val(v.total);
		}
	}

	function calulateByTotal(v) {
		if(activeField != 'total' || isNaN(v.total)) { return; }

		if(perviousFiels == 'cost' && !isNaN(v.cost)) {
			v.profit = v.cost - v.total;
			v.discount = 100 / v.cost * v.profit;

			i.discount.val(v.discount);
			i.profit.val(v.profit);
		} else if(perviousFiels == 'discount' && !isNaN(v.discount)) {
			v.cost = v.total / (100 - v.discount) * 100;
			v.profit =  v.cost / 100 * v.discount;

			i.cost.val(v.cost);
			i.profit.val(v.profit);
		} else if(perviousFiels == 'profit' && !isNaN(v.profit)) {
			v.cost = v.total + v.profit;
			v.discount = v.discount = 100 / v.cost * v.profit;

			i.cost.val(v.cost);
			i.discount.val(v.discount);
		}
	}

	function calulateByProfit(v) {
		if(activeField != 'profit' || isNaN(v.profit)) { return; }

		if(perviousFiels == 'cost' && !isNaN(v.cost)) {
			v.total = v.cost - v.profit;
			v.discount = 100 / v.cost * v.profit;;

			i.discount.val(v.discount);
			i.total.val(v.total);
		} else if(perviousFiels == 'discount' && !isNaN(v.discount)) {
			v.cost = v.profit / v.discount * 100;
			v.total = v.cost - v.profit;
			
			i.cost.val(v.cost);
			i.total.val(v.total);
		}  else if(perviousFiels == 'total' && !isNaN(v.total)) {
			v.cost = v.total + v.profit;
			v.discount = v.discount = 100 / v.cost * v.profit;

			i.cost.val(v.cost);
			i.discount.val(v.discount);
		}
	}

});

