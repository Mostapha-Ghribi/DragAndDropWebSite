import React from 'react'
import section from './styles'

export const MainSectionComp = (props) => {
    const classes = section();
    return (
        <section className={classes.SectionMain}>
            {props.Header}
        </section>
    )
}
