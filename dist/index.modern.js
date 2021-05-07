import { createElement, forwardRef, useRef, useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.css';
import classNames from 'classnames';
import { useForm, useWatch, FormProvider, useFormContext, useController } from 'react-hook-form';

var styles = {"test":"_styles-module__test__3ybTi"};

const Button = ({
  children,
  ...props
}) => {
  return createElement("button", Object.assign({
    className: 'waves-effect waves-light btn',
    type: 'button'
  }, props), children);
};

const Text = forwardRef(({
  onChange,
  className,
  ...props
}, ref) => {
  useRef(ref);

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
});

const Select = forwardRef(({
  onChange,
  className,
  options,
  ...props
}, ref) => {
  useRef(ref);

  const change = event => {
    onChange(event.currentTarget.value);
  };

  const componentProps = {
    onChange: change,
    ...props
  };
  const [showOptions, setShowOptions] = useState(false);
  return createElement("div", {
    style: {
      position: 'relative'
    },
    className: className,
    onClick: () => setShowOptions(!showOptions)
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
    value: value
  }, label)))));
});

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
  className: 'col s12 m12 l4'
}, children);

const Medium = ({
  children
}) => createElement("div", {
  className: 'col s12 m12 l6'
}, children);

const Large = ({
  children
}) => createElement("div", {
  className: 'col s12 m12 l10'
}, children);

const ExtraLarge = ({
  children
}) => createElement("div", {
  className: 'col s12 m12 l12'
}, children);

const Container = ({
  children
}) => {
  return createElement("div", {
    className: 'container'
  }, children);
};

const Search = () => {
  const [search, setSearch] = useState('');
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
    onClick: () => {}
  }, "Search")));
};

const HeroImageLayout = ({
  image,
  header,
  children
}) => {
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

const Navigation = ({
  logo,
  rightNav
}) => createElement("nav", {
  className: classNames('transparent', 'z-depth-0')
}, createElement("div", {
  className: 'nav-wrapper'
}, createElement("a", {
  href: '#',
  className: classNames('logo-text', 'brand-logo', 'h1'),
  style: {
    textShadow: '2px 3px 12px',
    fontWeight: 700
  }
}, logo), createElement("ul", {
  id: 'nav-mobile',
  className: 'right hide-on-med-and-down'
}, rightNav && Array.isArray(rightNav) ? rightNav.map((item, index) => createElement("li", {
  key: index
}, item)) : createElement("li", null, rightNav))));

const Card = ({
  children
}) => createElement("div", {
  className: "card"
}, createElement("div", {
  className: "card-content"
}, children));

const FormHoc = ({
  name,
  defaultValues
}) => ({
  children,
  ...props
}) => {
  const methods = useForm({
    defaultValues
  });
  const values = useWatch({
    control: methods.control
  });
  useEffect(() => {
    console.log('values: ', values);
  }, [values]);
  return createElement(FormProvider, Object.assign({}, methods), createElement("form", Object.assign({}, props, {
    name: name,
    onSubmit: event => event.preventDefault()
  }), children));
};

const ControlledText = ({
  name,
  label,
  ...props
}) => {
  const {
    control
  } = useFormContext();
  const {
    field
  } = useController({
    name,
    control
  });
  return createElement("div", null, createElement("label", {
    htmlFor: name
  }, label), createElement(Text, Object.assign({}, props, field)));
};

const ControlledSelect = ({
  name,
  label,
  ...props
}) => {
  const {
    control
  } = useFormContext();
  const {
    field
  } = useController({
    name,
    control
  });
  return createElement("div", null, createElement("label", {
    htmlFor: name
  }, label), createElement(Select, Object.assign({}, props, field)));
};

const ExampleComponent = ({
  text
}) => {
  return createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

export { Button, Card, Container, ControlledSelect, ControlledText, ExampleComponent, ExtraLarge, FormHoc, HeroImageLayout, Large, Medium, Navigation, Row, Select, Small, Text };
//# sourceMappingURL=index.modern.js.map
