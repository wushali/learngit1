/*function foo(){
	console.log("aaaa");
}*/
/*var module1 = {
	_val : 10,//私有属性
	foo:function(){
		console.log("aaaa")
	}
}
*/

var module1 = (function(){
	var _val = 10;
	function foo(){
		console.log("aaaa");
	}
	function bar(){
		
	}
	return {
		foo:foo,
		bar:bar
	}
})();
