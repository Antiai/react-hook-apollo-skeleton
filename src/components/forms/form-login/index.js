import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { themes, noop } from '@utils';
import LayoutField from '@components/layouts/layout-field';
import { Input, Error, Button } from '@components/elements';

import './style.less';

function FormLogin(props) {
  const { data, onChange: handleChange, onSubmit: handleSubmit, errors, wait, theme } = props;

  const onChange = name => value => {
    handleChange({ ...data, [name]: value });
  };

  const onSubmit = event => {
    event.preventDefault();
    handleSubmit({ ...data });
  };

  return (
    <form className={cn(`FormLogin`, themes('FormLogin', theme))} onSubmit={onSubmit}>
      <LayoutField
        label={'Логин'}
        input={<Input type="text" value={data.login} onChange={onChange('login')} />}
        error={<Error errors={errors} path={'login'} />}
      />
      <LayoutField
        label={'Пароль'}
        input={<Input type="password" value={data.password} onChange={onChange('password')} />}
        error={<Error errors={errors} path={'password'} />}
      />
      <LayoutField
        input={
          <Button type="submit" disabled={wait}>
            Войти{wait && '...'}
          </Button>
        }
        error={<Error errors={errors} path={''} />}
      />
    </form>
  );
}

FormLogin.propTypes = {
  data: PropTypes.shape({
    login: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.any,
  wait: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

FormLogin.defaultProps = {
  theme: ['default'],
  errors: {},
  onChange: noop,
  onSubmit: noop,
};

export default FormLogin;
