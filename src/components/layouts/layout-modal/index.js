import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { noop } from '@utils';

import './style.less';

function LayoutModal(props) {
  const {
    onClose: handleClose,
    overflowClose,
    children,
    header,
    footer,
    overflowTransparent,
    toolClose,
  } = props;

  let modalNode = null;

  const resize = useEffect(() => {
    autoPosition();
    window.addEventListener('resize', autoPosition);

    return () => window.removeEventListener('resize', autoPosition);
  }, [autoPosition]);

  function autoPosition() {
    let top = 10;
    if (window.innerWidth > modalNode.clientHeight) {
      //center
      top = Math.max(top, (window.innerHeight - modalNode.clientHeight) / 2 - top);
      //bottom
      //top = window.innerHeight - modalNode.clientHeight - top*3;
    }
    modalNode.style.marginTop = `${top}px`;
  }

  const onClose = event => {
    event.preventDefault();
    handleClose();
  };

  /**
   * Закрытие окна при клике в серую область
   * @param event
   */
  const onCloseOverflow = event => {
    if (overflowClose && event.target.dataset.modal === 'overflow') {
      onClose(event);
    }
  };

  return (
    <div
      data-modal="overflow"
      className={cn('LayoutModalOverflow', {
        LayoutModalOverflow_transparent: overflowTransparent,
      })}
      onClick={onCloseOverflow}
    >
      <div className="LayoutModal" ref={ref => (modalNode = ref)}>
        {toolClose ? <a className="LayoutModal__close" href="#" onClick={onClose} /> : null}
        <div className="LayoutModal__inner">
          {header ? <div className="LayoutModal__header">{header}</div> : null}
          <div className="LayoutModal__content">{children}</div>
          {footer ? <div className="LayoutModal__footer">{footer}</div> : null}
        </div>
      </div>
    </div>
  );
}

LayoutModal.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  footer: PropTypes.node,
  toolClose: PropTypes.bool,
  overflowTransparent: PropTypes.bool,
  overflowClose: PropTypes.bool,
  onClose: PropTypes.func,
};

LayoutModal.defaultProps = {
  overflowTransparent: false,
  overflowClose: true,
  toolClose: true,
  onClose: noop,
};

export default LayoutModal;
