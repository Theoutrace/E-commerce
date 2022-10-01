import React from 'react'
import About from './menu/About'
import Home from './menu/Home'
import Store from './menu/Store'
import cls from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={cls['navbar-design']}>
      <Home/>
      <Store/>
      <About/>
    </div>
  )
}

export default NavBar
