angular.module('playApp')
.directive('myCustomer', function(){
	return {
    	template: 'Name: {{customer.name}} Address: {{customer.address}}' 
	};
})
.directive('scrollNav', function ($window) {
	return function(scope, element, attrs) {
	    angular.element($window).bind("scroll", function() {
			if (this.pageYOffset >= 50) {
				scope.scrollDown = true;
      		} else {
        		scope.scrollDown = false;
      		}
      		scope.$apply();
    	});
  	};
})
.directive('myChart', function(){
	return {
		restrict: 'EA',
		scope: {},
		link: function postLink(scope, element, attrs) {
			//element.html('<span>chart</span>');
			//select element and create svg
			var dur = 1500; //ms
			var svgWidth = 500; //px
			var svgHeight = 100; //px
			
            var svg = d3.select(element[0])
                .append("svg")
                .attr('id', 'chart')
                .attr('class', 'graph')
				.attr('height', svgHeight)
                .attr('width', svgWidth)
                .style('border', '#333')
                .style('border-width', 1);
            
			var halfWidth = svgWidth * 0.5;
			var rect = svg.append('rect')
				.attr('x', halfWidth)
                .attr('y', svgHeight)
				.attr('height', 0)
                .attr('width', 0)
                .attr('fill', 'steelblue')
                .transition()
                	.duration(dur)
                	.attr('x', 0)
                	.attr('y', 0)
                	.attr('height',svgHeight)
                	.attr('width',svgWidth)
                .transition()
                	.duration(dur)
               		.attr('x', halfWidth)
                	.attr('width', 0)
                .transition()
                	.duration(dur)
                	.attr('x', 0)
	                .attr('y', svgHeight)
					.attr('height', 0)
					.attr('width',svgWidth)
                .transition()
	                .duration(dur)
                	.attr('x', 0)
                	.attr('y', 0)
                	.attr('height',svgHeight)
                	.attr('width',svgWidth);
			
		}
	};
});
