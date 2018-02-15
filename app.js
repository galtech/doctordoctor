(function (){
'use strict';

angular.module('DoctorDoctorApp', [])
.controller('DoctorDoctorController', DoctorDoctorController);


DoctorDoctorController.$inject = ['$scope'];
function DoctorDoctorController($scope){

  var diagnoseRes = "";
  var domain = "http://undertheweather.ie/"
  var baseLink = domain + "ailment/";
  var helpLink = "";
  var ailment = "";

  $scope.showResults = function(){

      $scope.diagnoseRes = "You would be advised to seek advice from a doctor\
                            or pharmacist rather than attempting to self diagnose online\
                            however this link may help: ";

      var symptom = lookupAilment($scope.ailment);

      if( symptom == null ){
        $scope.helpLink = domain + 'sitemap';
      }else{
        $scope.helpLink = baseLink + symptom;
      }

  };

  var lookupAilment = function(str){
    var ailmentLst = ['cold','cough','ear','flu','rash','temperature','throat','tummy'];
    var lowerCaseStr = str.toLowerCase();
    var enteredWords = lowerCaseStr.split(' ');
    for(var i=0;i<enteredWords.length;i++){
        if(ailmentLst.includes(enteredWords[i])){
          return enteredWords[i];
        }

    }
  };

}

})();
