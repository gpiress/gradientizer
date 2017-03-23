angular.module('gradientizr').service('CSSFilterService', CSSFilterService);

function CSSFilterService() {
  let filters = {};

  function hexToRgba(hexColor, alpha=1) {
    var r = parseInt(hexColor.slice(1, 3), 16),
        g = parseInt(hexColor.slice(3, 5), 16),
        b = parseInt(hexColor.slice(5, 7), 16);

    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  }

  function gradient(startColor, endColor, angle) {
    const startRGBA = hexToRgba(startColor.color, startColor.alpha);
    const endRGBA = hexToRgba(endColor.color, endColor.alpha);

    let filter = "linear-gradient(" + angle + ', ' + startRGBA + ', ' + endRGBA + ')';

    filters['background'] = filter;
  }

  function getFilters() {
    return filters;
  }

  return {
    gradient: gradient,
    getFilters: getFilters
  };
}
