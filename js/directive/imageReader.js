angular.module('gradientizr').directive('imageReader', function($q) {
    var slice = Array.prototype.slice;

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function(scope, element, attrs, ngModel) {
                if (!ngModel) return;

                ngModel.$render = function() {};

                element.bind('change', function(e) {
                  var element = e.target;

                  readFile(element.files[0])
                    .then(function(dataUrlImage) {
                      ngModel.$setViewValue(dataUrlImage);
                    })
                    .catch(function(error) {
                      console.error("Error reading file. " + error);
                    });

                  function readFile(file) {
                    var deferred = $q.defer();

                    var reader = new FileReader();

                    reader.onload = function(e) {
                      deferred.resolve(e.target.result);
                    };

                    reader.onerror = function(e) {
                      deferred.reject(e);
                    };
                    
                    reader.readAsDataURL(file);

                    return deferred.promise;
                  }

                }); //change

            } //link
    }; //return
});
