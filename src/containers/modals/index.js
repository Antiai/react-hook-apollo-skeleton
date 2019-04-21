import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useMappedState } from 'redux-react-hook';
import * as actions from '@store/actions';
import * as modals from './config.js';
import * as selectors from '@store/selectors';

function Modals({ history }) {
  const dispatch = useDispatch();
  const { modal = {} } = useMappedState(selectors.getModal);

  function getModal() {
    const props = {
      ...modal.params,
      history,
      close: result => {
        dispatch(actions.modal.close(result));
      },
    };

    if (modal.show) {
      if (!(modal.params && modal.params.noOverflow)) {
        hideBodyOverflow();
      }
      if (modals[modal.name]) {
        const Component = modals[modal.name];
        return <Component {...props} />;
      }
    } else {
      resetBodyOverflow();
    }

    return null;
  }

  function hideBodyOverflow() {
    if (document.body.style.overflow !== 'hidden') {
      //document.body.style.overflow = 'hidden';
    }
  }

  function resetBodyOverflow() {
    if (document.body.style.overflow === 'hidden') {
      //document.body.style.overflow = '';
    }
  }

  return getModal();
}

Modals.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Modals;
