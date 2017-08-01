define(function(require,exports,module){
	var x = 10;
	function add(num){
		return x+num;
	}
	module.exports = {
		add:add
	}
})
