import { createElement, forwardRef, useRef, useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.css';
import classNames from 'classnames';
import { useForm, useWatch, FormProvider, useFormContext, useController } from 'react-hook-form';

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

var Button = function Button(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return createElement("button", Object.assign({
    className: 'waves-effect waves-light btn',
    type: 'button'
  }, props), children);
};

var Text = forwardRef(function (_ref, ref) {
  var onChange = _ref.onChange,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["onChange", "className"]);

  useRef(ref);

  var change = function change(event) {
    onChange(event.currentTarget.value);
  };

  var componentProps = _extends({
    type: 'text',
    onChange: change,
    className: classNames('input-field', className)
  }, props);

  return createElement("input", Object.assign({}, componentProps));
});

var Select = forwardRef(function (_ref, ref) {
  var onChange = _ref.onChange,
      className = _ref.className,
      options = _ref.options,
      props = _objectWithoutPropertiesLoose(_ref, ["onChange", "className", "options"]);

  useRef(ref);

  var change = function change(event) {
    onChange(event.currentTarget.value);
  };

  var componentProps = _extends({
    onChange: change
  }, props);

  var _React$useState = useState(false),
      showOptions = _React$useState[0],
      setShowOptions = _React$useState[1];

  return createElement("div", {
    style: {
      position: 'relative'
    },
    className: className,
    onClick: function onClick() {
      return setShowOptions(!showOptions);
    }
  }, createElement("div", {
    className: 'select-wrapper'
  }, createElement("input", {
    className: 'select-dropdown dropdown-trigger',
    type: 'text',
    readOnly: true,
    value: props.value || props.placeholder
  }), createElement("ul", {
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
    return createElement("li", {
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
    }, createElement("span", null, label));
  })), createElement("svg", {
    className: 'caret',
    height: '24',
    viewBox: '0 0 24 24',
    width: '24',
    xmlns: 'http://www.w3.org/2000/svg'
  }, createElement("path", {
    d: 'M7 10l5 5 5-5z'
  }), createElement("path", {
    d: 'M0 0h24v24H0z',
    fill: 'none'
  })), createElement("select", Object.assign({}, componentProps), options.map(function (_ref3) {
    var value = _ref3.value,
        label = _ref3.label;
    return createElement("option", {
      key: value,
      value: value
    }, label);
  }))));
});

var Row = function Row(_ref) {
  var children = _ref.children;
  return createElement("div", {
    className: 'row'
  }, children);
};

var Small = function Small(_ref) {
  var children = _ref.children;
  return createElement("div", {
    className: 'col s12 m12 l4'
  }, children);
};

var Medium = function Medium(_ref) {
  var children = _ref.children;
  return createElement("div", {
    className: 'col s12 m12 l6'
  }, children);
};

var Large = function Large(_ref) {
  var children = _ref.children;
  return createElement("div", {
    className: 'col s12 m12 l10'
  }, children);
};

var ExtraLarge = function ExtraLarge(_ref) {
  var children = _ref.children;
  return createElement("div", {
    className: 'col s12 m12 l12'
  }, children);
};

var Container = function Container(_ref) {
  var children = _ref.children;
  return createElement("div", {
    className: 'container'
  }, children);
};

var Search = function Search() {
  var _React$useState = useState(''),
      search = _React$useState[0],
      setSearch = _React$useState[1];

  return createElement(Row, null, createElement("div", {
    className: 'col s10'
  }, createElement(Text, {
    style: {
      backgroundColor: 'white'
    },
    value: search,
    onChange: setSearch
  })), createElement("div", {
    className: 'col s2'
  }, createElement(Button, {
    onClick: function onClick() {}
  }, "Search")));
};

var HeroImageLayout = function HeroImageLayout(_ref) {
  var image = _ref.image,
      header = _ref.header,
      children = _ref.children;
  return createElement("div", null, createElement("img", {
    src: image,
    style: {
      width: '100%',
      position: 'absolute',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto',
      zIndex: -1
    }
  }), createElement(Container, null, createElement("div", null, header), createElement("div", {
    className: 'section'
  }, createElement(Search, null)), createElement("div", {
    className: 'section'
  }, children)));
};

var Navigation = function Navigation(_ref) {
  var logo = _ref.logo,
      rightNav = _ref.rightNav;
  return createElement("nav", {
    className: 'transparent'
  }, createElement("div", {
    className: 'nav-wrapper'
  }, createElement("a", {
    href: '#',
    className: classNames('logo-text', 'brand-logo')
  }, logo), createElement("ul", {
    id: 'nav-mobile',
    className: 'right hide-on-med-and-down'
  }, rightNav && Array.isArray(rightNav) ? rightNav.map(function (item, index) {
    return createElement("li", {
      key: index
    }, item);
  }) : createElement("li", null, rightNav))));
};

var Card = function Card(_ref) {
  var children = _ref.children;
  return createElement("div", {
    className: "card"
  }, createElement("div", {
    className: "card-content"
  }, children));
};

var FormHoc = function FormHoc(_ref) {
  var name = _ref.name,
      defaultValues = _ref.defaultValues;
  return function (_ref2) {
    var children = _ref2.children,
        props = _objectWithoutPropertiesLoose(_ref2, ["children"]);

    var methods = useForm({
      defaultValues: defaultValues
    });
    var values = useWatch({
      control: methods.control
    });
    useEffect(function () {
      console.log('values: ', values);
    }, [values]);
    return createElement(FormProvider, Object.assign({}, methods), createElement("form", Object.assign({}, props, {
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

  var _useFormContext = useFormContext(),
      control = _useFormContext.control;

  var _useController = useController({
    name: name,
    control: control
  }),
      field = _useController.field;

  return createElement("div", null, createElement("label", {
    htmlFor: name
  }, label), createElement(Text, Object.assign({}, props, field)));
};

var ControlledSelect = function ControlledSelect(_ref) {
  var name = _ref.name,
      label = _ref.label,
      props = _objectWithoutPropertiesLoose(_ref, ["name", "label"]);

  var _useFormContext = useFormContext(),
      control = _useFormContext.control;

  var _useController = useController({
    name: name,
    control: control
  }),
      field = _useController.field;

  return createElement("div", null, createElement("label", {
    htmlFor: name
  }, label), createElement(Select, Object.assign({}, props, field)));
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

export { Button, Card, Container, ControlledSelect, ControlledText, ExampleComponent, ExtraLarge, FormHoc, HeroImageLayout, Large, Medium, Navigation, Row, Select, Small, Text };
//# sourceMappingURL=index.modern.js.map
