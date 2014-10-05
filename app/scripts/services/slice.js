'use strict';


angular.module('testApp')
.service('Slice', function() {

  this.sliceText = function(text, size) {
    if (text !== undefined) {
      if (text.length >= size) {
        return text.slice(0, size) + '...';
      }
      else {
      	return text;
      }

    } else {
      return '';
    }
  };

});
