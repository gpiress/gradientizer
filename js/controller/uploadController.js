angular.module('gradientizr').controller('uploadController', uploadController);

uploadController.$inject = ['CSSFilterService'];

function uploadController(CSSFilterService) {
  this.uploadedImageURL = undefined;

  this.uploadImage = function() {
    console.log("Fake upload");

    this.setImageURL('images/default_image.png');
  }

  this.setImageURL = function(imageURL) {
    this.uploadedImageURL = imageURL;
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

  return this;
}
