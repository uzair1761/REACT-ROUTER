import React from 'react'
import classes from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>great Quotes</div>
        <nav className={classes.nav}>

        <ul>
            <li>
                <NavLink activeClassName={classes.active} to='/quotes'>
                    All  quotes
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName={classes.active} to='/new-quotes'>
            Add a quotes
                </NavLink>
            </li>
        </ul>
    </nav>
    </header>
  )
}

export default MainNavigation