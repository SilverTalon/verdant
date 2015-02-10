'use strict';

angular.module('verdant')
  .controller('LoginController', LoginController);

LoginController.$inject = ['$http'];
function LoginController($http) {
  var vm = this;
  vm.signin = signin;
  vm.login = '';
  vm.password = '';

  //////////////


  function signin() {

    var options = {
      username: vm.username,
      password: vm.password
    }

    $http.post('http://localhost:8000/api/login', options)
    .success(function(response) {
        console.dir(response);
    }).error(function(response) {
      console.dir(response);
      vm.form.error = response.message;
    });
  }
}
