var app = angular.module("anApp", []);


var MainController = function ($scope, github) {

    $scope.sortOrder = "+forks_count";

    $scope.search = function (username) {

        var onRepoRequest = function (data) {
            $scope.repos = data;
        };

        var onUserSearchComplete = function (data) {
            $scope.user = data;
            github.getUserRepos($scope.user)
                .then(onRepoRequest);
        };

        github.getUserData(username)
            .then(onUserSearchComplete)
    };

};

app.controller("MainController", ["$scope", "github", MainController]);