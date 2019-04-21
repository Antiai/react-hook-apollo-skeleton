import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { themes } from '@utils';
import LayoutContent from '../layout-content';

import './style.less';

function LayoutHeader(props) {
  const { left, children, right, center, theme } = props;

  return (
    <div className={cn(`LayoutHeader`, themes('LayoutHeader', theme))}>
      <LayoutContent>
        <div className="LayoutHeader__wrap">
          <div className="LayoutHeader__left">{left}</div>
          <div className="LayoutHeader__center">{children || center}</div>
          <div className="LayoutHeader__right">{right}</div>
        </div>
      </LayoutContent>
    </div>
  );
}

LayoutHeader.propTypes = {
  children: PropTypes.node,
  left: PropTypes.node,
  right: PropTypes.node,
  center: PropTypes.node,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

LayoutHeader.defaultProps = {
  theme: '',
};

export default LayoutHeader;
