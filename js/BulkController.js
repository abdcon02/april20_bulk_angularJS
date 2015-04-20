var bulk.controller('BulkCtrl', function BulkCtrl($scope) {
    $scope.order = [];
    $scope.percentage = 0.00;

    var itemPrice = 1.00;

    $scope.addOrder = function() {
        $scope.order.push({ amount: $scope.amount });
        $scope.amount = null;
    };

    $scope.discount = function() {
        if (($scope.order[0] > 100) && ($scope.order[0] < 500)) {
            $scope.percentage = 0.01
        }
        if (($scope.order[0] >= 500) && ($scope.order[0] < 1000)) {
            $scope.percentage = 0.05
        }
        if (($scope.order[0] >= 1000) && ($scope.order[0] < 5000)) {
            $scope.percentage = 0.10
        }
        if (($scope.order[0] >= 5000) && ($scope.order[0] < 20000)) {
            $scope.percentage = 0.20
        }
        if ($scope.order[0] >= 20000) {
            $scope.percentage = 0.30
        }

        var discountPrice = itemPrice - $scope.percentage;

        return discountPrice;

    };

    $scope.orderPrice = function() {
        return discountPrice * $scope.order[0];
    };

});
