console.log("s=here");
angular.module('weatherNews', []).controller("MainCtrl",
[
	'$scope',
	function($scope)
	{
		$scope.test = "Sup, yo?";
		$scope.posts = [
			"post1",
			"post2",
			"post3",
			"post4",
			"post5",
			"post6"
		];
	}
]);
console.log("now");
