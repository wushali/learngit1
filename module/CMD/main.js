define(function(require,exports,module){
	var add = require("add");
	var multiply = require("multiply");
	function mixin(x,y){
		console.log(add.add(x,y),multiply.multiply(x,y));
	}
	mixin(5,10);
})
