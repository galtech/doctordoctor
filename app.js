(function (){
'use strict';

angular.module('DoctorDoctorApp', [])
.controller('DoctorDoctorController', DoctorDoctorController);


DoctorDoctorController.$inject = ['$scope'];
function DoctorDoctorController($scope){

  $scope.showResults = function(){
      console.log('what are you doing here?');
  };

}

})();
