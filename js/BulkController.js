bulkBuy.controller('BulkCtrl', function BulkCtrl($scope) {
    $scope.order = [];
    $scope.percentage = 0.00;
    var itemPrice = 1.00;
    var discountPrice = 0;
    var totalPrice = 0;

    $scope.addOrder = function() {
        $scope.order.push({ amount: $scope.amount });
        $scope.amount = null;
    };

    $scope.discount = function(order) {
        var percentage;

        if (order.amount <= 100) {
            percentage = 0.00
        }
        if ((order.amount > 100) && (order.amount < 500)) {
            percentage = 0.01
        }
        if ((order.amount >= 500) && (order.amount < 1000)) {
            percentage = 0.05
        }
        if ((order.amount >= 1000) && (order.amount < 5000)) {
            percentage = 0.10
        }
        if ((order.amount >= 5000) && (order.amount < 20000)) {
            percentage = 0.20
        }
        if (order.amount >= 20000) {
            percentage = 0.30
        }

        discountPrice = itemPrice - percentage;

        return discountPrice;
    };

    $scope.orderPrice = function(order) {
        totalPrice = discountPrice * order.amount;
        return parseFloat(totalPrice).toFixed(2);

    };

    $scope.deleteOrder = function(order) {
        $scope.order = [];
    };

});
