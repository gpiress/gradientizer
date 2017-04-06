angular.module('gradientizr').service('CSSFilterService', CSSFilterService);

function CSSFilterService() {
  let filters = {};

  function hexToRgba(hexColor, alpha=1) {
    let r = parseInt(hexColor.slice(1, 3), 16),
        g = parseInt(hexColor.slice(3, 5), 16),
        b = parseInt(hexColor.slice(5, 7), 16);

    if (isNaN(r) || isNaN(g) || isNaN(b)) {
      r = g = b = 255;
    }

    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  }

  function gradient(startColor, endColor, angle) {
    const startRGBA = hexToRgba(startColor.color, startColor.alpha);
    const endRGBA = hexToRgba(endColor.color, endColor.alpha);

    const filter = "linear-gradient(" + angle + ', ' + startRGBA + ', ' + endRGBA + ')';

    filters['background'] = filter;
  }

  function getFilters() {
    return filters;
  }

  function clear() {
    filters = {};
  }

  return {
    hexToRgba: hexToRgba,
    gradient: gradient,
    getFilters: getFilters,
    clear: clear
  };
}
