angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.history', {
    url: '/history',
    views: {
      'tab1': {
        templateUrl: 'templates/history.html',
        controller: 'historyCtrl'
      }
    }
  })

  .state('tabsController.barcode', {
    url: '/barcode',
    views: {
      'tab2': {
        templateUrl: 'templates/barcode.html',
        controller: 'barcodeCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/settings',
    views: {
      'tab3': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('compliantItem', {
    url: '/page5',
    templateUrl: 'templates/compliantItem.html',
    controller: 'compliantItemCtrl'
  })

  .state('nonCompliantItem', {
    url: '/page6',
    templateUrl: 'templates/nonCompliantItem.html',
    controller: 'nonCompliantItemCtrl'
  })

  .state('about', {
    url: '/page7',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

$urlRouterProvider.otherwise('/page1/settings')


});