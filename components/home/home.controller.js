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
}