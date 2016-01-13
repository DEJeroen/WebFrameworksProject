var app = angular.module("myapp",[]);
app.controller("mijnCtrl", function($scope){
	console.log("in ctrl");

	$scope.FetchLatitudes = function()
	{$http.get("http://localhost:3000/latitude")
		.success(function(lat){
console.log(lat);
$scope.lat = lat;
		})

		.error(function(err){
console.log(err);
		})
	}

$(".nav .dropdown").hover(function(arg)
{
$(".dropdown-menu").fadeIn("slow");
}, function(arg)
{
$(".dropdown-menu").fadeOut("fast");
});
});



