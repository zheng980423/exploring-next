import React from 'react';
import Link from 'next/link';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ExploreIcon from '@material-ui/icons/Explore';
import AlbumIcon from '@material-ui/icons/Album';
import PersonIcon from '@material-ui/icons/Person';
import NavbarStyles from './Navbar.module.scss';
const NavbarMenu = () => {
  return (
    <>
      <div className={NavbarStyles.nav_menu}>
        <div className={NavbarStyles.nav_menu_title}>
          <small>Menu</small>
        </div>
        <ul>
          <Link href="/home/">
            <a>
              <li>
                <HomeIcon />
                <small>Home</small>
              </li>
            </a>
          </Link>

          <li>
            <SearchIcon />
            <small>Search</small>
          </li>
          <li>
            <ExploreIcon />
            <small>Discover</small>
          </li>
          <li>
            <AlbumIcon />
            <small>Albums</small>
          </li>
          <li>
            <PersonIcon />
            <small>Artists</small>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarMenu;
