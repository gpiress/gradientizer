angular.module('gradientizr').controller('indexController', indexController);

indexController.$inject = ['$scope', 'CSSFilterService', 'TextService'];

function indexController($scope, CSSFilterService, TextService) {
  this.uploadedImageURL = undefined;
  $scope.uploadedFile = undefined;

  this.uploadImage = function() {
    this.setImageURL($scope.uploadedFile);

    //this.setImageURL('images/default_image.png');
  }

  this.setImageURL = function(imageURL) {
    this.uploadedImageURL = imageURL;
  }

  this.selectedOption = 'gradient';

  this.activeOption = function() {
    return this.selectedOption;
  }

  this.selectOption = function(newOption) {
    if (newOption !== this.selectedOption) {
      this.selectedOption = newOption;
    }
  }

  this.gradientSettings = {
    startColor: {
      color: '#2E3192',
      alpha: 0.6
    },
    endColor: {
      color: '#1bffff',
      alpha: 0.35
    },
    angle: 'to top right'
  };

  this.filters = function() {
    return CSSFilterService.getFilters();
  }

  this.applyGradient = function() {
    CSSFilterService.gradient(this.gradientSettings.startColor, this.gradientSettings.endColor, this.gradientSettings.angle);
  }

  this.textSettings = {
    content: '',
    size: '',
    position: 'right bottom'
  }

  this.textStyle = function() {
    return TextService.getStyle();
  }

  this.textContent = function() {
    return TextService.getContent();
  }

  this.addText = function() {
    TextService.set(this.textSettings.content, this.textSettings.size, this.textSettings.position);
  }

  this.reset = function() {
    TextService.clear();
    CSSFilterService.clear();
  }

  return this;
}
