

define(function(){

	var coreModule = angular.module('coreModule',[]);

	coreModule.controller('mainController', function($scope){
		$scope.tittle ='Hellow Angular';
	})
});