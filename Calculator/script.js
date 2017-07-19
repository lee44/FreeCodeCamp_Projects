$( document ).ready(function() {
  var expr ;
	var state = 1; //state 0: invalid input, state 1: print String, state 2: clear display, 									 state 3: To many digits, state 4:to many decimal digits
	var conString ='';
	
	$('button').click(function(){
		switch($(this).attr("value"))
		{
			case 'AC':state = 2;document.getElementById("result").innerHTML = '';break;
			case '=':checkExpression();break;
			default:
				expr = $(this).attr("value");break;
		}
		document.getElementById("expression").innerHTML = createString();
		state = 1;
	});

	function createString(){
		if(state == 0)
			conString = 'Invalid Input';
		else if(state == 1)
			conString = conString.concat(expr);
		else if(state == 2)
			conString = '';
		else if(state == 3)
			conString = 'To Many Digits';
		else
			conString = 'To Many Decimal Digits';		
		expr = '';
		
		return conString;	
	}
	
	function checkExpression()
	{
		var regexp = /^\d{1,9}(\.\d{1,3})?([-+*/]{1}\d{1,9}(\.\d{1,3})?)*$/;
		var digitoverflow = /^\d+([-+*/]{1}\d+)*$/;
		var decimaloverflow = /^\d{1,9}(\.\d+)?([-+*/]{1}\d{1,9}(\.\d+)?)*$/;
		var createdString = createString();
		
		if(regexp.test(createdString))
		{
			state = 1;
			getResult();
		}
		else if(digitoverflow.test(createdString))
			state = 3;
		else if(decimaloverflow.test(createdString))
			state = 4;
		else
			state = 0;
	}
	function getResult()
	{
		var expression = conString;
		var copy = expression;

		expression = expression.replace(/[0-9]+/g, "#").replace(/[\(|\|\.)]/g, "");
		var numbers = copy.split(/[^0-9\.]+/);
		var operators = expression.split("#").filter(function(n){return n});
		var result = [];

		for(var i = 0; i < numbers.length; i++)
		{
			 result.push(numbers[i]);
			 if (i < operators.length) 
				 result.push(operators[i]);
		}
		
		var total = parseFloat(result[0]);
		for(var z = 1; z < result.length; z+=2)
		{
			switch(result[z])
			{
				case '/':total /= parseFloat(result[z+1]);break;
				case '*':total *= parseFloat(result[z+1]);break;
				case '+':total += parseFloat(result[z+1]);break;
				case '-':total -= parseFloat(result[z+1]);break;
			}
			
		}
		document.getElementById("result").innerHTML = total;
	}
});