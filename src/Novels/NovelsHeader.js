
import React, { Component } from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import '../Styles/novel.css';



export default class NovelsHeader extends Component {

render() {
  return (
    <div className='body2'>
    <header classname = 'NovelHeader'>
      <div className='container2'>
        <h2>Novel Management</h2>
      <nav>
        <NavLink to="add">Add Novel</NavLink>
        <NavLink to="list">List Novel</NavLink>
      </nav>
      <Outlet />
    </div>
    </header>
    </div>
  )
}
}
