var app = angular.module('PhotosApp', []);

app.controller('PhotoController', ['$http', function ($http){
    console.log('PhotoController has been loaded');
    var self = this;
    self.message = 'Hello world!!';
    self.photosArray = [];


    
}]);