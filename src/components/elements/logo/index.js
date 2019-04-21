import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { themes } from '@utils';

import './style.less';

function Logo(props) {
  const { to, theme, title } = props;

  return (
    <Link className={cn(`Logo`, themes('Logo', theme))} to={to} title={title}>
      Skeleton
    </Link>
  );
}

Logo.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

Logo.defaultProps = {
  to: '/',
  title: '',
  theme: '',
};

export default Logo;
