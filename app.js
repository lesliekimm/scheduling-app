// create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])
  // create our main controller and get access to firebase
  .controller('mainController', function($scope, $firebase) {
    // connect to firebase
    var ref = new Firebase("https://shining-torch-9201.firebaseIO.com/days");
    var fb = $firebase(ref);
  });