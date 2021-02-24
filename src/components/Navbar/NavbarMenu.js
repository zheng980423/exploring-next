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
          <small>菜单</small>
        </div>
        <ul>
          <Link href="/home/">
            <a>
              <li>
                <HomeIcon />
                <small>主页</small>
              </li>
            </a>
          </Link>

          <li>
            <SearchIcon />
            <small>搜索</small>
          </li>
          <li>
            <ExploreIcon />
            <small>发现</small>
          </li>
          <li>
            <AlbumIcon />
            <small>专辑</small>
          </li>
          <li>
            <PersonIcon />
            <small>歌手</small>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarMenu;
