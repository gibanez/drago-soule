var ClientCtrl = function ($scope, $timeout, $mdSidenav, $log, $mdDialog, ClientService)
{

    var getClients = function()
    {
        ClientService.getAll().then(function(clients)
        {
            $scope.$apply(function () {
                $scope.clients = clients;
            });
        });

    };

    $scope.newClient = {};
    $scope.clients = [];
    getClients();
    var displayModal = function(ev)
    {
        $mdDialog.show({
            contentElement: '#myDialog',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        });
    };
    $scope.save = function()
    {
        ClientService.save($scope.newClient).then(function(){
            $scope.hide();
            $scope.newClient = {};
            getClients();
        });
    }


    $scope.addClient = function(ev)
    {

        //$scope.$apply(function () {
            $scope.newClient = {};
       // });
        displayModal(ev);
    };

    $scope.edit = function(client, $ev)
    {
        $scope.newClient = client;
        displayModal($ev);
    };

    $scope.hide = function() {
        $mdDialog.hide();
    };

};
