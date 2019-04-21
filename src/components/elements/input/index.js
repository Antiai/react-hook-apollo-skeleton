import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { noop, themes } from '@utils';

import './style.less';

function Input(props) {
  const {
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    type,
    placeholder,
    required,
    focused,
    value,
    theme,
    disabled,
    tabIndex,
    autocomplete,
  } = props;

  const onChange = e => {
    const value = e.target.value;
    return handleChange(value);
  };

  const onFocus = e => handleFocus(e);

  const onBlur = () => handleBlur();

  return (
    <div className={cn('Input', themes('Input', theme))}>
      <input
        className="Input__input"
        value={value}
        type={type}
        placeholder={placeholder}
        tabIndex={tabIndex}
        disabled={disabled}
        required={required}
        autoFocus={focused}
        autoComplete={autocomplete ? 'on' : 'off'}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.node.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  focused: PropTypes.bool,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  autocomplete: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

Input.defaultProps = {
  onBlur: noop,
  onChange: noop,
  onFocus: noop,
  disabled: false,
  type: 'text',
};

export default Input;
