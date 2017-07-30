angular.module('GuildMockup')
.controller('HomeController', HomeController);

HomeController.$inject = [];

function HomeController() {
	console.log("Home Controller is getting called");
	var ctrl = this;
	ctrl.homeShow = true
	console.log(ctrl.homeShow);

	ctrl.show = function () {
		ctrl.homeShow = true;
	};

	ctrl.noShow = function () {
		ctrl.homeShow = false;
		console.log(ctrl.homeShow);
	};

$(document).ready(function() {
    
    var $item = $('div.HorizontalItem'), //Cache your DOM selector
        visible = 2, //Set the number of items that will be visible
        index = 0, //Starting index
        endIndex = ( $item.length / visible ) - 2; //End index
    
    $('div#arrowR').click(function(){
        if(index < endIndex ){
          index++;
          $item.animate({'left':'-=300px'});
        }
    });
    
    $('div#arrowL').click(function(){
        if(index > 0){
          index--;            
          $item.animate({'left':'+=300px'});
        }
    });
    
});

}