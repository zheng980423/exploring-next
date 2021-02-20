import React, { useState } from 'react';
import NavbarHeaders from './NavbarHeaders';
import NavbarMenu from './NavbarMenu';
import NavbarStyles from './Navbar.module.scss';

import WatchLaterIcon from '@material-ui/icons/WatchLater';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FolderIcon from '@material-ui/icons/Folder';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import ListIcon from '@material-ui/icons/List';
import SettingsIcon from '@material-ui/icons/Settings';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

const navMenuTopics = [];
const ast = {
  Menu: ['Home', 'Search', 'Discover', 'Albums', 'Artists'],
  Library: ['Recent', 'Favourites', 'Local'],
  Playlist: ['Create New', 'Pop Punk', 'Rocks'],
  General: ['Settings', 'Log Out'],
};

for (let [key, value] of Object.entries(ast)) {
  navMenuTopics.push(key);
}
console.log(navMenuTopics);
const Navbar = ({}) => {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <nav className={NavbarStyles.nav_overview}>
      <NavbarHeaders />
      <NavbarMenu />

      <div className={NavbarStyles.nav_menu}>
        <div className={NavbarStyles.nav_menu_title}>
          <small>Library</small>
        </div>
        <ul>
          <li>
            <WatchLaterIcon />
            <small>Recent</small>
          </li>
          <li>
            <FavoriteIcon />
            <small>Favourites</small>
          </li>
          <li>
            <FolderIcon />
            <small>Local</small>
          </li>
        </ul>
      </div>
      <div className={NavbarStyles.nav_menu}>
        <div className={NavbarStyles.nav_menu_title}>
          <small>Playlist</small>
        </div>
        <ul>
          <li>
            <AddBoxRoundedIcon />
            <small>Create New</small>
          </li>
          <li>
            <ListIcon />
            <small>Pop Punk</small>
          </li>
          <li>
            <ListIcon />
            <small>Rocks</small>
          </li>
        </ul>
      </div>
      <div className={NavbarStyles.nav_menu}>
        <div className={NavbarStyles.nav_menu_title}>
          <small>General</small>
        </div>
        <ul>
          <li>
            <SettingsIcon />
            <small>Settings</small>
          </li>
          <li>
            <MeetingRoomIcon />
            <small>Log out</small>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
