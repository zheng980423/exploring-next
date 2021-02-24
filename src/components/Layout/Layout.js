import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.overview_layout}>
          <Navbar className={styles.overview_nav} />
          <main className={styles.overview_main}>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
