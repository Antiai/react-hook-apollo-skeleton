import React, { useCallback } from 'react';
import { useDispatch } from 'redux-react-hook';
import { Link } from 'react-router-dom';
import * as actions from '@store/actions';
import Accordion from '@components/elements/accordion';
import Button from '@components/elements/button';
import LayoutPage from '@components/layouts/layout-page';
import LayoutContent from '@components/layouts/layout-content';
import HeaderContainer from '@containers/header-container';

function Home() {
  const dispatch = useDispatch();

  const showInfo = useCallback(() => {
    dispatch(actions.modal.open('info')).then(result => {
      console.log(result);
    });
  }, [dispatch]);

  return (
    <LayoutPage header={<HeaderContainer />}>
      <LayoutContent>
        <h1>Главная страница</h1>
        <p>
          <Link to="/main">Раздел для авторизованных</Link>
        </p>
        <p>
          <Button onClick={showInfo}>Показать модалку</Button>
        </p>
        <Accordion title={'Заголовок'}>
          text for accordion, with other components, ex. <Button>Button</Button>
        </Accordion>
      </LayoutContent>
    </LayoutPage>
  );
}

Home.propTypes = {};

export default Home;
