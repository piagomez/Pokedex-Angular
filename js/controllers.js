(function () {
	angular.module('pokedex.controllers', [])

		.controller('PokedexCtrl', ['$scope','$routeParams','pokemonService', function ($scope, $routeParams, pokemonService){
			var type = $routeParams.type;
			if(type){
				pokemonService.byType(type).then(function (data){
					$scope.pokemons = data;
					// $scope.groupped = partition(data, 4);
				});
			}else{
				pokemonService.all().then(function (data){ //retorna una promesa, si se cumple devuelve los datos
					$scope.pokemons = data;
					// $scope.groupped = partition(data, 4);
				});
			}
		}])

		.controller('PokemonCtrl', ['$scope','$routeParams','pokemonService', function ($scope, $routeParams, pokemonService){
			var name = $routeParams.name;
			$scope.pokemon = {};
			pokemonService.byName(name)
			.then(function (data){
				$scope.pokemon = data;
			})
			// $scope.pokemon = {
			// 	id:'001',
			// 	name:'Bulbasaur',
			// 	species:'Seed Pokémon',
			// 	type:['Grass','Poison'],
			// 	height:"2'4'' (0.71m)",
			// 	weight:'15.2 lbs (6.9 kg)',
			// 	abilities:['Overgrow','Chlorophyll','Water Stream'],
			// 	stats:{
			// 		hp:45,
			// 		attack: 49,
			// 		defense: 49,
			// 		"sp.atk": 65,
			// 		"sp.def":65,
			// 		speed: 45,
			// 		total: 318
			// 	},
			// 	evolution: ['Bulbasaur', 'Ivysaur', 'Venusaur']
			// };
		}])

		.controller('TabsCtrl', function(){
			this.tab = 1;
			this.selectTab = function(tab){
				this.tab = tab;
			};
		});
})();