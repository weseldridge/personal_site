'use strict';

angular.module('appApp')
.controller('MainCtrl', function ($scope) {
})
.controller('ContactCtrl', function($scope){

  // Form submit function.
  $scope.submitForm = function(isValid){

    if(isValid){

      $http({
        method: 'POST',
        url: 'backend.weseldridge.com/api/email',
        data: $.param($scope.contactForm),
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).success(function(data){

      })

    }
  };
})
.controller('ProjectCtrl', function ($scope) {
  $scope.projects = [
  {
    'title': 'Test Project 1',
    'gitUrl': 'http://github.com',
    'description': 'This is a bit of filler text until I write what I want to go here. This is a bit of filler text until I write what I want to go here. This is a bit of filler text until I write what I want to go here. This is a bit of filler text until I write what I want to go here. This is a bit of filler text until I write what I want to go here.',
    'imgUrl': 'test.png',
    'projectUrl': 'http://project.rebelliouslabs.com',
    'documentation': 'http://io.rebelliouslabs.com'
  },
  {
    'title': 'Test Project 2',
    'gitUrl': 'http://github.com',
    'description': 'This is a bit of filler text until I write what I want to go here. This is a bit of filler text until I write what I want to go here. This is a bit of filler text until I write what I want to go here. This is a bit of filler text until I write what I want to go here. This is a bit of filler text until I write what I want to go here.',
    'imgUrl': 'test.png',
    'projectUrl': 'http://project.rebelliouslabs.com',
    'documentation': 'http://io.rebelliouslabs.com'
  },
  {
    'title': 'Test Project 3',
    'gitUrl': 'http://github.com',
    'description': 'This is a bit of filler text until I write what I want to go here. This is a bit of filler text until I write what I want to go here. This is a bit of filler text until I write what I want to go here. This is a bit of filler text until I write what I want to go here. This is a bit of filler text until I write what I want to go here.',
    'imgUrl': 'test.png',
    'projectUrl': 'http://project.rebelliouslabs.com',
    'documentation': 'http://io.rebelliouslabs.com'
  },
  {
    'title': 'Test Project 4',
    'gitUrl': 'http://github.com',
    'description': 'This is a bit of filler text until I write what I want to go here. This is a bit of filler text until I write what I want to go here. This is a bit of filler text until I write what I want to go here. This is a bit of filler text until I write what I want to go here. This is a bit of filler text until I write what I want to go here.',
    'imgUrl': 'test.png',
    'projectUrl': 'http://project.rebelliouslabs.com',
    'documentation': 'http://io.rebelliouslabs.com'
  }
  ]
});
