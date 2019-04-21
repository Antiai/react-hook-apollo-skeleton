import React, { Fragment, useEffect } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import * as selectors from '@store/selectors';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PrivateRoute from '@containers/private-route';
import * as actions from '@store/actions';

import '../../theme/style.less';

import { Home, About, Main, Login, NotFound } from '../pages';
import Modals from '../modals';

const history = createBrowserHistory();

function App() {
  const dispatch = useDispatch();
  const { session } = useMappedState(selectors.getSession);

  useEffect(() => {
    dispatch(actions.session.remind());
  }, [dispatch]);

  // If checking token
  if (session.wait) {
    return <Fragment>Загрузка...</Fragment>;
  }

  return (
    <Fragment>
      <Router history={history}>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/main" component={Main} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Modals history={history} />
    </Fragment>
  );
}

App.propTypes = {};

export default App;
