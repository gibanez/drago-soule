var MainCtrl = function ($scope, $timeout, $mdSidenav, $log)
{
    $scope.toggleMenu = function () {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('left').toggle()
            .then(function () {
                $log.debug("close LEFT is done");
            });

    };
}
