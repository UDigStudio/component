function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var classNames = _interopDefault(require('classnames'));
require('materialize-css/dist/css/materialize.css');

var styles = {"test":"_3ybTi"};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var Text = function Text(_ref) {
  var onChange = _ref.onChange,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["onChange", "className"]);

  var change = function change(event) {
    onChange(event.currentTarget.value);
  };

  var componentProps = _extends({
    type: 'text',
    onChange: change,
    className: classNames('input-field', className)
  }, props);

  return React.createElement("input", Object.assign({}, componentProps));
};

var styles$1 = {"open":"_yvfWs","relative":"_2tynv"};

var Select = function Select(_ref) {
  var _classNames;

  var onChange = _ref.onChange,
      className = _ref.className,
      options = _ref.options,
      props = _objectWithoutPropertiesLoose(_ref, ["onChange", "className", "options"]);

  var change = function change(event) {
    onChange(event.currentTarget.value);
  };

  var componentProps = _extends({
    onChange: change
  }, props);

  var _React$useState = React.useState(false),
      showOptions = _React$useState[0],
      setShowOptions = _React$useState[1];

  return React.createElement("div", {
    className: classNames('input-field', 'relative', className),
    onClick: function onClick() {
      return setShowOptions(!showOptions);
    }
  }, React.createElement("div", {
    className: 'select-wrapper'
  }, React.createElement("input", {
    className: 'select-dropdown dropdown-trigger',
    type: 'text',
    readOnly: true,
    value: props.value
  }), React.createElement("ul", {
    className: classNames('dropdown-content', 'select-dropdown', (_classNames = {}, _classNames[styles$1.open] = showOptions, _classNames))
  }, options.map(function (_ref2) {
    var value = _ref2.value,
        label = _ref2.label,
        disabled = _ref2.disabled;
    return React.createElement("li", {
      key: value,
      className: classNames({
        disabled: disabled,
        selected: value === props.value
      }),
      onClick: function onClick() {
        onChange(value);
        setShowOptions(false);
      }
    }, React.createElement("span", null, label));
  })), React.createElement("svg", {
    className: 'caret',
    height: '24',
    viewBox: '0 0 24 24',
    width: '24',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    d: 'M7 10l5 5 5-5z'
  }), React.createElement("path", {
    d: 'M0 0h24v24H0z',
    fill: 'none'
  })), React.createElement("select", Object.assign({}, componentProps), options.map(function (_ref3) {
    var value = _ref3.value,
        label = _ref3.label;
    return React.createElement("option", {
      key: value,
      value: value,
      selected: props.value === value
    }, label);
  }))));
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

exports.ExampleComponent = ExampleComponent;
exports.Select = Select;
exports.Text = Text;
//# sourceMappingURL=index.js.map
