import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

function LayoutPage(props) {
  const { header, content, footer, children } = props;

  return (
    <div className="LayoutPage">
      <div className="LayoutPage__header">{header}</div>
      <div className="LayoutPage__content">{children || content}</div>
      <div className="LayoutPage__footer">{footer}</div>
    </div>
  );
}

LayoutPage.propTypes = {
  header: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.node,
};

export default LayoutPage;
