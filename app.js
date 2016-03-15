// create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])
  // create our main controller and get access to firebase
  .controller('mainController', function($scope, $firebase) {
    // connect to firebase
    var ref = new Firebase("https://shining-torch-9201.firebaseIO.com/days");
    var fb = $firebase(ref);

    // function to set the default data
    $scope.reset = function() {
      fb.$set({
        monday: {
          name: 'Monday',
          slots: {
            0900: {
              time: '9:00am',
              booked: false
            },
            0110: {
              time: '11:00am',
              booked: false
            }
          }
        },
        tuesday: {
          name: 'Tuesday',
          slots: {
            0900: {
              time: '9:00am',
              booked: false
            },
            0110: {
              time: '11:00am',
              booked: false
            }
          }
        }
      });
    };
  });