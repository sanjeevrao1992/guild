(function (){
	angular.module('GuildMockup')
	.config(config);

	function config($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('home', {
				url: '/',
				controller: HomeController,
				controllerAs: 'ctrl',
				templateUrl: '/components/home/home.template.html'
			})
			
			.state('home.team', {
				url: '/team/{id}',
				templateUrl: '/components/team/team.template.html',
				controller: TeamController,
				controllerAs: 'ctrl'
			})
			.state('home.about', {
				url: '/about/{id}',
				templateUrl: '/components/about/about.template.html',
				controller: AboutController,
				controllerAs: 'ctrl'
			})
			.state('home.portfolio', {
				url: '/portfolio/{id}',
				templateUrl: '/components/portfolio/portfolio.template.html',
				controller: PortfolioController,
				controllerAs: 'ctrl'
			})
			.state('home.contact', {
				url: '/contact/{id}',
				templateUrl: '/components/contact/contact.template.html',
				controller: ContactController,
				controllerAs: 'ctrl'
			});

			$urlRouterProvider.otherwise('/');
	}
})();