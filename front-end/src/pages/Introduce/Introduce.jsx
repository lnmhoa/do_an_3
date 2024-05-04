import React from 'react';
import classNames from 'classnames/bind';
import styles from './Introduce.module..scss';

const cx = classNames.bind(styles);

function Introduce() {
  return (
    <div>
      <h1>Welcome to My Static Page</h1>
      <p>This is a static page built with ReactJS.</p>
    </div>
  );
}

export default Introduce;