import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { themes } from '@utils';

import './style.less';

function Button(props) {
  const { theme, title, type, children, disabled, onClick } = props;

  const handleClick = event => {
    if (onClick) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <button
      type={type}
      className={cn(`Button`, themes('Button', theme))}
      title={title}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
  title: PropTypes.string,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  theme: '',
};

export default Button;
