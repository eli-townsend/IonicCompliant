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

  .state('tabsController.compliantItem', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/compliantItem.html',
        controller: 'compliantItemCtrl'
      }
    }
  })

  .state('tabsController.nonCompliantItem', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/nonCompliantItem.html',
        controller: 'nonCompliantItemCtrl'
      }
    }
  })

  .state('tabsController.about', {
    url: '/page7',
    views: {
      'tab3': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('tabsController.suggest', {
    url: '/page9',
    views: {
      'tab3': {
        templateUrl: 'templates/suggest.html',
        controller: 'suggestCtrl'
      }
    }
  })

  .state('page', {
    url: '/page10',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('tabsController.termsOfService', {
    url: '/page11',
    views: {
      'tab3': {
        templateUrl: 'templates/termsOfService.html',
        controller: 'termsOfServiceCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/barcode')


});