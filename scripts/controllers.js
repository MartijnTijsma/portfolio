angular.module('playApp')
.controller('ApplicationCtrl', function($scope){
	$scope.customer = {
    	name: 'Naomi',
    	address: '1600 Amphitheatre'
	};
})
.controller('HomeCtrl' , function($scope, $http, $window){
    $scope.Math = $window.Math;
	$scope.projects = {};
	$scope.selectedProject = {
	    index: null
	};
	
	$http.get('projects.json').success(function(data){
	    $scope.projects = data;
	});
	
	console.log(Math.ceil(0.5));
	
	$scope.selectProject = function(project, index){
	    if(index == $scope.selectedProject.index){
	        $scope.selectedProject.index = null;
	    } else {
    	    $scope.selectedProject = project;
    	    $scope.selectedProject.index = index;
    	}
	}
})
.controller('AboutCtrl', function($scope){
    console.log('About me');
});
