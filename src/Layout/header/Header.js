import React from 'react'
import Cart from '../../components/cart/Cart'
import NavBar from './navbar/NavBar'
import cls from './Header.module.css'

const Header = () => {
  return (
    <div className={cls['header']}>
      <NavBar/>
      <Cart/>
    </div>
  )
}

export default Header
