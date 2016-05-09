angular.module('starter', ['ionic'])

  .run(function ($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.hide();
      }
      $rootScope.item = {};
      $rootScope.$on('$stateChangeStart', function () {
        $rootScope['bottle'] = $rootScope.item.bottle;
        $rootScope['sock'] = $rootScope.item.sock;
      })
    });
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('menu', {
        url: '/menu',
        templateUrl: 'templates/menu.html'
      })
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


    $urlRouterProvider.otherwise('/menu');

  })
  .controller('AppCtrl', function ($scope, $rootScope, $state) {
    $scope.exit = function () {
      ionic.Platform.exitApp()
    };
    $scope.itemPutInBox = function (itemName, boxIndex) {
      $rootScope.item[itemName] = true;
      var box = document.getElementById('box-' + boxIndex);
      var item = document.getElementById(itemName);
      item.removeAttribute('ng-click');
      item.removeAttribute('class');
      item.setAttribute('class', 'item-on-box');
      box.appendChild(item);
    };
    $scope.orangeBoxActive = function (i) {
      var box = document.getElementById('box-' + i);
      if (box.childElementCount) {
        box.classList == 'orange-border activated' ? box.className = 'orange-border-hide' : box.className = 'orange-border';
      }
    };
    document.addEventListener("backbutton", onBackKeyDown, true);
    function onBackKeyDown(eve) {
      $state.go('menu');
      eve.preventefault();
    }


  });
