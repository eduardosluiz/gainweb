'use strict';

angular.module('gainApp')
  .service('dietas', function ($http) {
    var service = this;
    const API_URL = 'http://localhost:4002/api/v1';
