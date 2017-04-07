angular.module('gradientizr').controller('indexController', indexController);

indexController.$inject = ['$scope', 'CSSFilterService', 'TextService'];

function indexController($scope, CSSFilterService, TextService) {
  this.uploadedImageURL = undefined;
  $scope.uploadedFile = undefined;

  this.uploadImage = function() {
    this.setImageURL($scope.uploadedFile);
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
      alpha: 0.6,
      valid: true
    },
    endColor: {
      color: '#1bffff',
      alpha: 0.35,
      valid: true
    },
    angle: 'to top right'
  };

  this.filters = function() {
    return CSSFilterService.getFilters();
  }

  this.applyGradient = function() {
    CSSFilterService.gradient(this.gradientSettings.startColor,
                              this.gradientSettings.endColor,
                              this.gradientSettings.angle);
  }

  this.validateGradientColor = function(startOrEnd) {
    let color = {};
    if (startOrEnd === 'start') {
      color = this.gradientSettings.startColor;
    } else if (startOrEnd === 'end') {
      color = this.gradientSettings.endColor;
    }

    if (color != {}) {
      color.valid = CSSFilterService.validColor(color.color);
    }
  }

  this.textSettings = {
    content: 'Some text',
    size: 64,
    position: 'bottom right',
    textColor: '#ffffff',
    outlineColor: '#ffffff'
  }

  this.textStyle = function() {
    return TextService.getStyle();
  }

  this.textContent = function() {
    return TextService.getContent();
  }

  this.addText = function() {
    TextService.set(this.textSettings);
  }

  this.reset = function() {
    TextService.clear();
    CSSFilterService.clear();
  }

  return this;
}
