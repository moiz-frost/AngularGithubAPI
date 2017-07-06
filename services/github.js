(function () {

    var github = function ($http) {
        var getUserData = function (username) {
            return $http.get("https://api.github.com/users/" + username)
                .then(function (response) {
                    return response.data;
                });
        };

        var getUserRepos = function (user) {
            return $http.get(user.repos_url)
                .then(function (response) {
                    return response.data;
                });
        };

        return {
            getUserData: getUserData,
            getUserRepos: getUserRepos
        };
    };


    var module = angular.module("anApp");
    module.factory("github", github);

}());