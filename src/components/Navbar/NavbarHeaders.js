import React from 'react';
import Link from 'next/link';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import NavbarStyles from './Navbar.module.scss';
const NavbarHeaders = () => {
  return (
    <>
      <header className={NavbarStyles.nav_header}>
        <Link href="/">
          <>
            <PlayCircleFilledOutlinedIcon />
            <small>Rungon</small>
          </>
        </Link>
      </header>
    </>
  );
};

export default NavbarHeaders;
