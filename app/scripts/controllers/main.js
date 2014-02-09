'use strict';

angular.module('appApp')
  .controller('MainCtrl', function ($scope) {
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
