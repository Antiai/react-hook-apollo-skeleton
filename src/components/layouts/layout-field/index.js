import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { themes } from '@utils';

import './style.less';

function LayoutField(props) {
  const { label, input, error, theme } = props;

  return (
    <div className={cn(`LayoutField`, themes('LayoutField', theme))}>
      <div className="LayoutField__label">{label}</div>
      <div className="LayoutField__input">
        <div className="LayoutField__input-inner">{input}</div>
        <div className="LayoutField__error">{error}</div>
      </div>
    </div>
  );
}

LayoutField.propTypes = {
  label: PropTypes.node,
  input: PropTypes.node,
  error: PropTypes.node,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

LayoutField.defaultProps = {
  theme: '',
};

export default LayoutField;
