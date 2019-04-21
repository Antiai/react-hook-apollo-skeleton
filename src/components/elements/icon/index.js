import React from 'react';
import PropTypes from 'prop-types';
import list from './images';

function Icon(props) {
  const { name, className, ...rest } = props;

  if (!list[name]) {
    throw new Error(`Icon not found ${name}`);
  }

  const Element = list[name];

  return <Element className={className} {...rest} />;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Icon.defualtProps = {
  className: '',
};

export default Icon;
