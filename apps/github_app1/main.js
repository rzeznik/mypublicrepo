function MyApp($scope) {
  $scope.hello = function () {
    window.alert('Alert '+$scope.name);
  };
}