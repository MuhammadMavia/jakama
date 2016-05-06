angular.module('starter', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('menu', {
        url: '/menu',
        templateUrl: 'templates/menu.html'
      })
      /*.state('page02', {
       url: '/page02',
       templateUrl: 'templates/app.html'
       })*/
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/app.html'
      })

      .state('app.page01', {
        url: '/page01',
        views: {
          'AppContent': {
            templateUrl: 'templates/page01.html'
          }
        }
      })
      .state('app.page02', {
        url: '/page02',
        views: {
          'AppContent': {
            templateUrl: 'templates/page02.html'
          }
        }
      });


    $urlRouterProvider.otherwise('/app/page01');

  })
  .controller('AppCtrl', function ($scope) {
    $scope.exit = function () {
      ionic.Platform.exitApp()
    };
    $scope.bottlePosition = true;
    $scope.bottlePutInBox = function () {
      $scope.bottlePosition = false;
    }
  });
