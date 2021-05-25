import React from 'react'
import head from './styles'

export const HeaderComp = (props) => {
    const classes = head();
    return (
        <nav className={classes.nav , classes.navBorder}>
            {props.Header}
        </nav>
    )
}
