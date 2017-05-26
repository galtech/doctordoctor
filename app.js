(function (){
'use strict';

angular.module('DoctorDoctorApp', [])
.controller('DoctorDoctorController', DoctorDoctorController);


DoctorDoctorController.$inject = ['$scope'];
function DoctorDoctorController($scope){

  var diagnoseRes = "";

  $scope.showResults = function(){
      $scope.diagnoseRes = "What are you doing here? Who searches symptoms online?\
                          Get yourself to a doctor.";

  };

}

})();
