import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { themes } from '@utils';

import './style.less';

function LayoutContent(props) {
  const { children, theme } = props;

  return <div className={cn(`LayoutContent`, themes('LayoutContent', theme))}>{children}</div>;
}

LayoutContent.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

LayoutContent.defaultProps = {
  theme: ['default'],
};

export default LayoutContent;
