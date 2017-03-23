angular.module('gradientizr').controller('uploadController', uploadController);

uploadController.$inject = ['CSSFilterService'];

function uploadController(CSSFilterService) {
  this.uploadedImageURL = undefined;

  this.uploadImage = function() {
    console.log("Upload fake");

    this.setImageURL('images/default_image.png');
    //this.setImageURL('http://lorempixel.com/g/400/200/');
    //this.setImageURL('http://placehold.it/350x150/D4145A/000000');
  }

  this.setImageURL = function(imageURL) {
    this.uploadedImageURL = imageURL;
  }

  this.gradientSettings = {
    startColor: {
      color: '#ffffff',
      alpha: 0.6
    },
    endColor: {
      color: '#000000',
      alpha: 0.35
    },
    angle: 45
  };

  this.filters = function() {
    return CSSFilterService.getFilters();
  }

  this.applyGradient = function() {
    CSSFilterService.gradient(this.gradientSettings.startColor, this.gradientSettings.endColor, this.gradientSettings.angle);
  }

  return this;
}
