/**
 * Вывод ошибки из общего массива ошибок
 * У каждой ошибки ожидайется ключ, соответсвующий пути на свойство модели, например "profile.name"
 * Компонент выводит ошибку, если по указанному ключу есть ошибка в общем массиве ошибок
 * @todo Вместо массива ошибок использовать объект, чтобы оптимизироват поиск
 */
import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

function Error(props) {
  const { path, errors } = props;

  const renderItems = () => {
    if (!errors && !(errors instanceof Array) && !(errors instanceof Object)) {
      return null;
    }
    const errorItems = errors instanceof Array ? errors : [errors];
    const items = [];

    errorItems.map(item => {
      if (!item || !item.message) {
        return;
      }

      if (
        (item.path && item.path.indexOf(path) === 0 && path.length > 0) ||
        (item.path.length === 0 && path.length === 0) ||
        (!item.path && !path)
      ) {
        items.push(
          <div key={item.code} className="Error__item">
            {item.message}
          </div>,
        );
      }
    });
    return items;
  };

  return <div className="Error">{React.Children.toArray(renderItems())}</div>;
}

Error.propTypes = {
  path: PropTypes.string,
  errors: PropTypes.any,
};

export default Error;
