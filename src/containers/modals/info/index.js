import React from 'react';
import { useDispatch } from 'redux-react-hook';
import * as actions from '@store/actions';
import { Button } from '@components/elements';
import { LayoutModal } from '@components/layouts';

function Info() {
  const dispatch = useDispatch();

  const onCancel = () => {
    dispatch(actions.modal.close(false));
  };

  const onSuccess = () => {
    dispatch(actions.modal.close(true));
  };

  const renderFooter = () => <Button onClick={onSuccess}>Всё понятно</Button>;

  return (
    <LayoutModal onClose={onCancel} footer={renderFooter()}>
      Модальное окно
    </LayoutModal>
  );
}

export default Info;
