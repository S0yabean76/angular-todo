angular.module('TodoDirective',[])
	.directive('todoTable', function() {
	  return {
	    restrict: 'E', 
	    templateUrl: 'templates/directives/todo-table.html'
	  };
	})

	.directive('todoNavbar', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/directives/todo-navbar.html'
		};
	});
