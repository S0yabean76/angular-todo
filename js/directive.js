angular.module('TodoDirective',[])
	.directive('todoTable', function() {
	  return {
	    restrict: 'E', 
	    templateUrl: 'templates/directives/todo-table.html'
	  };
	})

	.directive('standardNavbar', function(){
		return{
			restrict: 'E',
			templateUrl: 'templates/directives/standard-navbar.html'
		};
	});