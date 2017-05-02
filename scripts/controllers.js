angular.module('portfolioApp')
.controller('ApplicationCtrl', function($scope){
    $scope.scrollDown = true;
    $scope.customer = {
        name: 'Naomi',
        address: '1600 Amphitheatre'
    };
})
.controller('HomeCtrl' , function($scope, $http, $window){
    console.log('Home');
})
.controller('OverviewCtrl', function($scope, $http){
    console.log('OverviewCtrl');
    $scope.intro = [];
    $scope.groups = [];
    $scope.selectedProjectName = null;
    $scope.selectedImage = null;
    var unique = new Date().getTime();
    $http.get('projects.json?'+unique).then(function(response){
        if(response.data){
            console.log("loaded projects", response.data);
            $scope.intro = response.data.intro;
            $scope.groups = response.data.groups;
        }
    });

    $scope.selectProject = function(name, image){
        if($scope.selectedImage && $scope.selectedImage.name === image.name){
            //deselect
            $scope.selectedProjectName = null;
            $scope.selectedImage = null;
        } else {
            $scope.selectedProjectName = name;
            $scope.selectedImage = image;    
        }
    }

    $scope.deselectImage = function(){
        $scope.selectedProjectName = null;
        $scope.selectedImage = null;
    }
})
.controller('AboutCtrl', function($scope){
    console.log('About me');
});
