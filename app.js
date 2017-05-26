(function (){
'use strict';

angular.module('DoctorDoctorApp', [])
.controller('DoctorDoctorController', DoctorDoctorController);


DoctorDoctorController.$inject = ['$scope'];
function DoctorDoctorController($scope){

  var diagnoseRes = "";
  var baseLink = "http://undertheweather.ie/ailment/";
  var helpLink = "";
  var ailment = "";

  $scope.showResults = function(){

      $scope.diagnoseRes = "You would be advised to seek advice from a doctor\
                            or pharmacist rather than attempting to self diagnose online\
                            however this link may help: ";

      $scope.helpLink = baseLink + $scope.ailment;

  };

}

})();
