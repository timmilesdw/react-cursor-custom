function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", ";\n  height: ", ";\n  border-radius: 100%;\n  border: ", ";\n  transition: ", ";\n  pointer-events: none;\n  transform: translate(-50%, -50%);\n  z-index: 999;\n  position: absolute;\n  mix-blend-mode: ", ";\n  display: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", ";\n  height: ", ";\n  position: absolute;\n  transform: translate(-50%, -50%);\n  background: ", ";\n  z-index: 999;\n  border-radius: 100%;\n  pointer-events: none;\n  overflow: auto;\n  mix-blend-mode: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Cursor = function Cursor(_ref) {
  var x = _ref.x,
      y = _ref.y,
      color = _ref.color,
      noRing = _ref.noRing,
      mixBlend = _ref.mixBlend,
      dotSize = _ref.dotSize,
      ringSize = _ref.ringSize,
      transitionTime = _ref.transitionTime;
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(CursorDot, {
    color: color,
    mixBlend: mixBlend,
    dotSize: dotSize,
    x: x,
    y: y
  }), /*#__PURE__*/React__default.createElement(CursorRing, {
    noRing: noRing,
    color: color,
    mixBlend: mixBlend,
    transitionTime: transitionTime,
    ringSize: ringSize,
    x: x,
    y: y
  }));
};
var CursorDot = styled__default.div.attrs(function (props) {
  return {
    style: {
      transform: "translate(" + props.x + "px, " + props.y + "px)"
    }
  };
})(_templateObject(), function (props) {
  return props.dotSize ? props.dotSize + 'px' : '8px';
}, function (props) {
  return props.dotSize ? props.dotSize + 'px' : '8px';
}, function (props) {
  return props.color ? props.color : 'black';
}, function (props) {
  return props.mixBlend ? 'difference' : 'none';
});
var CursorRing = styled__default.div.attrs(function (props) {
  return {
    style: {
      transform: "translate(" + (props.x - props.ringSize / 2.25) + "px, " + (props.y - props.ringSize / 2.25) + "px)"
    }
  };
})(_templateObject2(), function (props) {
  return props.ringSize ? props.ringSize + 'px' : '36px';
}, function (props) {
  return props.ringSize ? props.ringSize + 'px' : '36px';
}, function (props) {
  return props.color ? "2px solid " + props.color : '2px solid black';
}, function (props) {
  return props.transitionTime ? "transform " + props.transitionTime + "ms ease-out" : 'transform 0.1s ease-out';
}, function (props) {
  return props.mixBlend ? 'difference' : 'none';
}, function (props) {
  return props.noRing ? 'none' : 'block';
});

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n* {\n    cursor: none !important;\n}\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n    width: 100%;\n    height: 100%;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];

var detectMob = function detectMob(match) {
  return match.some(function (match) {
    return navigator.userAgent.match(match);
  });
};

var CursorProvider = function CursorProvider(_ref) {
  var children = _ref.children,
      color = _ref.color,
      noRing = _ref.noRing,
      ringSize = _ref.ringSize,
      transitionTime = _ref.transitionTime;
  React.useEffect(function () {
    detectMob(toMatch) ? setVisibility(false) : setVisibility(true);
  });

  var _useState = React.useState({
    x: 0,
    y: 0
  }),
      cursor = _useState[0],
      setCursor = _useState[1];

  var _useState2 = React.useState(true),
      visibility = _useState2[0],
      setVisibility = _useState2[1];

  return /*#__PURE__*/React__default.createElement(CursorWrapper, {
    onMouseMove: function onMouseMove(e) {
      return setCursor({
        x: e.pageX,
        y: e.pageY
      });
    }
  }, /*#__PURE__*/React__default.createElement(GlobalStyle, null), visibility ? /*#__PURE__*/React__default.createElement(Cursor, {
    color: color,
    noRing: noRing,
    ringSize: ringSize,
    transitionTime: transitionTime,
    x: cursor.x,
    y: cursor.y
  }) : null, children);
};
var CursorWrapper = styled__default.div(_templateObject$1());
var GlobalStyle = styled.createGlobalStyle(_templateObject2$1());

exports.CursorProvider = CursorProvider;
//# sourceMappingURL=index.js.map
