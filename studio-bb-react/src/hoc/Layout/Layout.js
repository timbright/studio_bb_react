import React, { Component } from 'react'
import classes from './Layout.module.scss'

export default class Layout extends Component { //@ хранится меню , main
   render() {
      return (
         <section className={classes.Layout}>
            <main>
               {this.props.children}
            </main>
         </section>
      )
   }
}
