function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
require('materialize-css/dist/css/materialize.css');
var classNames = _interopDefault(require('classnames'));
var reactHookForm = require('react-hook-form');

var styles = {"test":"_styles-module__test__3ybTi"};

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

var Button = function Button(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement("button", Object.assign({
    className: 'waves-effect waves-light btn',
    type: 'button'
  }, props), children);
};

var Text = React.forwardRef(function (_ref, ref) {
  var onChange = _ref.onChange,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["onChange", "className"]);

  React.useRef(ref);

  var change = function change(event) {
    onChange(event.currentTarget.value);
  };

  var componentProps = _extends({
    type: 'text',
    onChange: change,
    className: classNames('input-field', className)
  }, props);

  return React.createElement("input", Object.assign({}, componentProps));
});

var Select = React.forwardRef(function (_ref, ref) {
  var onChange = _ref.onChange,
      className = _ref.className,
      options = _ref.options,
      props = _objectWithoutPropertiesLoose(_ref, ["onChange", "className", "options"]);

  React.useRef(ref);

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
    style: {
      position: 'relative'
    },
    className: className,
    onClick: function onClick() {
      return setShowOptions(!showOptions);
    }
  }, React.createElement("div", {
    className: 'select-wrapper'
  }, React.createElement("input", {
    className: 'select-dropdown dropdown-trigger',
    type: 'text',
    readOnly: true,
    value: props.value || props.placeholder
  }), React.createElement("ul", {
    className: classNames('dropdown-content', 'select-dropdown'),
    style: showOptions ? {
      display: 'block',
      left: '0px',
      top: '0px',
      width: '100%',
      maxHeight: '200px',
      transformOrigin: '0px 0px',
      opacity: 1,
      transform: 'scaleX(1) scaleY(1)'
    } : {}
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
      onClick: function onClick(event) {
        event.stopPropagation();

        if (!disabled) {
          onChange(value);
          setShowOptions(false);
        }
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
      value: value
    }, label);
  }))));
});

var Row = function Row(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: 'row'
  }, children);
};

var Small = function Small(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: 'col s12 m12 l4'
  }, children);
};

var Medium = function Medium(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: 'col s12 m12 l6'
  }, children);
};

var Large = function Large(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: 'col s12 m12 l10'
  }, children);
};

var ExtraLarge = function ExtraLarge(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: 'col s12 m12 l12'
  }, children);
};

var Container = function Container(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: 'container'
  }, children);
};

var Search = function Search() {
  var _React$useState = React.useState(''),
      search = _React$useState[0],
      setSearch = _React$useState[1];

  return React.createElement(Row, null, React.createElement("div", {
    className: 'col s10'
  }, React.createElement(Text, {
    style: {
      backgroundColor: 'white'
    },
    value: search,
    onChange: setSearch
  })), React.createElement("div", {
    className: 'col s2'
  }, React.createElement(Button, {
    onClick: function onClick() {}
  }, "Search")));
};

var HeroImageLayout = function HeroImageLayout(_ref) {
  var image = _ref.image,
      header = _ref.header,
      children = _ref.children;
  return React.createElement("div", null, React.createElement("img", {
    src: image,
    style: {
      width: '100%',
      position: 'absolute',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto',
      zIndex: -1
    }
  }), React.createElement(Container, null, React.createElement("div", null, header), React.createElement("div", {
    className: 'section'
  }, React.createElement(Search, null)), React.createElement("div", {
    className: 'section'
  }, children)));
};

var Navigation = function Navigation(_ref) {
  var logo = _ref.logo,
      rightNav = _ref.rightNav;
  return React.createElement("nav", null, React.createElement("div", {
    className: 'nav-wrapper'
  }, React.createElement("a", {
    href: '#',
    className: classNames('logo-text', 'brand-logo')
  }, logo), React.createElement("ul", {
    id: 'nav-mobile',
    className: 'right hide-on-med-and-down'
  }, rightNav && Array.isArray(rightNav) ? rightNav.map(function (item, index) {
    return React.createElement("li", {
      key: index
    }, item);
  }) : React.createElement("li", null, rightNav))));
};

var Card = function Card(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "card"
  }, React.createElement("div", {
    className: "card-content"
  }, children));
};

var FormHoc = function FormHoc(_ref) {
  var name = _ref.name,
      defaultValues = _ref.defaultValues;
  return function (_ref2) {
    var children = _ref2.children,
        props = _objectWithoutPropertiesLoose(_ref2, ["children"]);

    var methods = reactHookForm.useForm({
      defaultValues: defaultValues
    });
    var values = reactHookForm.useWatch({
      control: methods.control
    });
    React.useEffect(function () {
      console.log('values: ', values);
    }, [values]);
    return React.createElement(reactHookForm.FormProvider, Object.assign({}, methods), React.createElement("form", Object.assign({}, props, {
      name: name,
      onSubmit: function onSubmit(event) {
        return event.preventDefault();
      }
    }), children));
  };
};

var ControlledText = function ControlledText(_ref) {
  var name = _ref.name,
      label = _ref.label,
      props = _objectWithoutPropertiesLoose(_ref, ["name", "label"]);

  var _useFormContext = reactHookForm.useFormContext(),
      control = _useFormContext.control;

  var _useController = reactHookForm.useController({
    name: name,
    control: control
  }),
      field = _useController.field;

  return React.createElement("div", null, React.createElement("label", {
    htmlFor: name
  }, label), React.createElement(Text, Object.assign({}, props, field)));
};

var ControlledSelect = function ControlledSelect(_ref) {
  var name = _ref.name,
      label = _ref.label,
      props = _objectWithoutPropertiesLoose(_ref, ["name", "label"]);

  var _useFormContext = reactHookForm.useFormContext(),
      control = _useFormContext.control;

  var _useController = reactHookForm.useController({
    name: name,
    control: control
  }),
      field = _useController.field;

  return React.createElement("div", null, React.createElement("label", {
    htmlFor: name
  }, label), React.createElement(Select, Object.assign({}, props, field)));
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

exports.Button = Button;
exports.Card = Card;
exports.Container = Container;
exports.ControlledSelect = ControlledSelect;
exports.ControlledText = ControlledText;
exports.ExampleComponent = ExampleComponent;
exports.ExtraLarge = ExtraLarge;
exports.FormHoc = FormHoc;
exports.HeroImageLayout = HeroImageLayout;
exports.Large = Large;
exports.Medium = Medium;
exports.Navigation = Navigation;
exports.Row = Row;
exports.Select = Select;
exports.Small = Small;
exports.Text = Text;
//# sourceMappingURL=index.js.map
