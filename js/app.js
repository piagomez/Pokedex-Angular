(function () {
	var app = angular.module('pokedex',[
		'ngRoute',
		'pokedex.controllers',
		'pokedex.filters',
		'pokedex.directives',
		'pokedex.services'
		]);
	app.config(['$routeProvider',function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl:'views/pokedex.html',
				controller:'PokedexCtrl'
			})
			.when('/:type', {
				templateUrl:'views/pokedex.html',
				controller:'PokedexCtrl'
			})
			.when('/pokemon/:name', {
				templateUrl:'views/pokemon.html',
				controller:'PokemonCtrl',
				controllerAs:'pkmCtrl'
			})
			.otherwise({
				redirectTo:'/'
			});
	}]);
})();