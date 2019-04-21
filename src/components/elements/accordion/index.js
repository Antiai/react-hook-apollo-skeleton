import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { themes, noop } from '@utils';

import './style.less';

function Accordion(props) {
  const { theme, title, children, disabled, onClick } = props;

  const [isOpen = true, setState] = useState();

  const handleClick = () => {
    setState(disabled ? isOpen : !isOpen);
    onClick();
  };

  return (
    <div className={cn(`Accordion`, themes('Accordion', theme))}>
      <div
        className={cn('Accordion__header', themes('Accordion__header', theme))}
        onClick={handleClick}
      >
        <div className={'Accordion__title'}>{title}</div>
      </div>

      <div className={cn('Accordion__collapse', { Accordion__collapse_open: isOpen })}>
        <div className={'Accordion__body'}>{children}</div>
      </div>
    </div>
  );
}

Accordion.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  title: PropTypes.node,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  disabled: PropTypes.bool,
};

Accordion.defaultProps = {
  disabled: false,
  theme: 'default',
  onClick: noop,
};

export default Accordion;
