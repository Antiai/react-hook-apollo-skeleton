import React  from 'react';
import LayoutPage from '@components/layouts/layout-page';
import LayoutContent from '@components/layouts/layout-content';
import HeaderContainer from '@containers/header-container';

function About() {
  return (
    <LayoutPage header={<HeaderContainer />}>
      <LayoutContent>
        <h1>О проекте</h1>
        <p>Скелет приложения на React с примерами компонент и навигацией</p>
      </LayoutContent>
    </LayoutPage>
  );
}

About.propTypes = {};

export default About;
