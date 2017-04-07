angular.module('gradientizr').service('CSSFilterService', CSSFilterService);

function CSSFilterService() {
  let filters = {};

  const fullHexFormat = /#[0-9a-fA-F]{6}/;
  const shortHexFormat = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/;

  function sanitizeColor(hexColor) {
    if (hexColor.match(fullHexFormat) !== null) {
      return hexColor;
    }

    if (hexColor.match(shortHexFormat) !== null) {
      const properHex = hexColor.replace(shortHexFormat, "#$1$1$2$2$3$3");
      return properHex;
    }

    return '#ffffff';
  }

  function hexToRgba(hexColor, alpha=1) {
    const properHex = sanitizeColor(hexColor);

    const r = parseInt(properHex.slice(1, 3), 16),
          g = parseInt(properHex.slice(3, 5), 16),
          b = parseInt(properHex.slice(5, 7), 16);

    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  }

  function validColor(color) {
    if (color.match(fullHexFormat) !== null ||
        color.match(shortHexFormat !== null)) {
      return true;
    }

    return false;
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
    validColor: validColor,
    gradient: gradient,
    getFilters: getFilters,
    clear: clear
  };
}
