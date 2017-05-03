export default ngModule => {
  ngModule.config(
    ($stateProvider, $urlRouterProvider) => {
      $urlRouterProvider.otherwise('/');
      $stateProvider
      .state('main', {
        url: '/',
        template: require('../main/main.jade'),
        controller: 'MainCtrl',
        controllerAs: 'main',
      })
      .state('event', {
        url: '/event',
        template: require('../main/event.jade'),
        controller: 'EventCtrl',
        controllerAs: 'event',
      });
    }
  );
};
