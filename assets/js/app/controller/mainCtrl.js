var MainCtrl = function ($scope, $timeout, $mdSidenav, $log, $http)
{
    $scope.toggleMenu = function () {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('left').toggle()
            .then(function () {
                $log.debug("close LEFT is done");
            });

    };
    $scope.goClient = function($scope, $location)
    {
        console.info($location);
        //$location.path("/cliente/").replace().reload(false)
        //$location.path('/client/2').replace().notify(false);
    }
}
