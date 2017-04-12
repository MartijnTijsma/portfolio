angular.module('playApp',['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider.state('home', {
    	url: '/',
    	templateUrl: 'views/home.html',
    	controller: 'HomeCtrl'	
    })
    .state('about', {
    	url: '/about',
    	templateUrl: 'views/about.html',
    	controller: 'AboutCtrl'	
    });
});