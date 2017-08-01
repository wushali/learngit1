define(["add","multiply"],function(a,m){
	//依赖  具体的模块  前置依赖  低耦合 高内聚
	console.log(a,m);
	function minxi(x,y){
		console.log(a.add(x,y),m.multiply(x,y));
	}
	minxi(1,3);
})
