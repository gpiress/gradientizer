angular.module('gradientizr').service('TextService', textService);

function textService() {

  var content = "";
  var style = {};

  function setContent(newText) {
    if (newText === undefined || newText === '') {
      newText = 'Default text';
    }

    content = newText;
  }

  function setFontSize(fontSize) {
    if (fontSize === undefined || fontSize === '') {
      fontSize = 36;
    }

    style['fontSize'] = fontSize + 'px';
  }

  function parsePositionKeyword(keyword) {
    if (keyword.toLowerCase() === 'top') {
      style['top'] = 0;
    } else if (keyword.toLowerCase() === 'bottom') {
      style['bottom'] = 0;
    } else if (keyword.toLowerCase() === 'left') {
      style['left'] = '10px';
    } else if (keyword.toLowerCase() === 'right') {
      style['right'] = '10px';
    }
  }

  function setPosition(position) {
    var positions = position.split(' ');

    positions.forEach(parsePositionKeyword);
  }

  function getContent() {
    return content;
  }

  function set(newText, fontSize, position) {
    clear();

    setContent(newText);
    setFontSize(fontSize);
    setPosition(position);
  }

  function getStyle() {
    return style;
  }

  function clear() {
    content = "";
    style = {};
  }

  return {
    set: set,
    getContent: getContent,
    getStyle: getStyle,
    clear: clear
  };
}
