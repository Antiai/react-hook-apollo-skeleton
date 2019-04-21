import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useMappedState } from 'redux-react-hook';
import * as actions from '@store/actions';
import * as selectors from '@store/selectors';
import { LayoutPage } from '@components/layouts';
import LayoutContent from '@components/layouts/layout-content';
import HeaderContainer from '@containers/header-container';
import FormLogin from '@components/forms/form-login';

function Login(props) {
  const { history } = props;
  const dispatch = useDispatch();
  const { formLogin = {} } = useMappedState(selectors.getFormLogin);

  const onChangeForm = data => {
    dispatch(actions.formLogin.change(data));
  };

  const onSubmitForm = data => {
    dispatch(actions.formLogin.submit(data)).then(() => {
      history.replace('/main');
    });
  };

  return (
    <LayoutPage header={<HeaderContainer />}>
      <LayoutContent>
        <div>
          <h1>Login page</h1>
          <FormLogin
            data={formLogin.data}
            errors={formLogin.errors}
            wait={formLogin.wait}
            onChange={onChangeForm}
            onSubmit={onSubmitForm}
          />
        </div>
      </LayoutContent>
    </LayoutPage>
  );
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Login;
