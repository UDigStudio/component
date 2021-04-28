import { createElement, useState } from 'react';
import classNames from 'classnames';
import 'materialize-css/dist/css/materialize.css';

var styles = {"test":"_styles-module__test__3ybTi"};

const Text = ({
  onChange,
  className,
  ...props
}) => {
  const change = event => {
    onChange(event.currentTarget.value);
  };

  const componentProps = {
    type: 'text',
    onChange: change,
    className: classNames('input-field', className),
    ...props
  };
  return createElement("input", Object.assign({}, componentProps));
};

var styles$1 = {"open":"_select-module__open__yvfWs","relative":"_select-module__relative__2tynv"};

const Select = ({
  onChange,
  className,
  options,
  ...props
}) => {
  const change = event => {
    onChange(event.currentTarget.value);
  };

  const componentProps = {
    onChange: change,
    ...props
  };
  const [showOptions, setShowOptions] = useState(false);
  return createElement("div", {
    className: classNames('input-field', 'relative', className),
    onClick: () => setShowOptions(!showOptions)
  }, createElement("div", {
    className: 'select-wrapper'
  }, createElement("input", {
    className: 'select-dropdown dropdown-trigger',
    type: 'text',
    readOnly: true,
    value: props.value || props.placeholder
  }), createElement("ul", {
    className: classNames('dropdown-content', 'select-dropdown', {
      [styles$1.open]: showOptions
    })
  }, options.map(({
    value,
    label,
    disabled
  }) => createElement("li", {
    key: value,
    className: classNames({
      disabled: disabled,
      selected: value === props.value
    }),
    onClick: event => {
      event.stopPropagation();

      if (!disabled) {
        onChange(value);
        setShowOptions(false);
      }
    }
  }, createElement("span", null, label)))), createElement("svg", {
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
  })), createElement("select", Object.assign({}, componentProps), options.map(({
    value,
    label
  }) => createElement("option", {
    key: value,
    value: value,
    selected: props.value === value
  }, label)))));
};

const Row = ({
  children
}) => {
  return createElement("div", {
    className: 'row'
  }, children);
};

const Small = ({
  children
}) => createElement("div", {
  className: 'col s6 m4 l2'
}, children);

const Medium = ({
  children
}) => createElement("div", {
  className: 'col s8 m6 l4'
}, children);

const Large = ({
  children
}) => createElement("div", {
  className: 'col s10 m8 l6'
}, children);

const ExtraLarge = ({
  children
}) => createElement("div", {
  className: 'col s12 m10 l8'
}, children);

const Container = ({
  children
}) => {
  return createElement("div", {
    className: 'container'
  }, children);
};

const ExampleComponent = ({
  text
}) => {
  return createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

export { Container, ExampleComponent, ExtraLarge, Large, Medium, Row, Select, Small, Text };
//# sourceMappingURL=index.modern.js.map
