import React from 'react'
import Name from './Navigation/Name'
import About from './Navigation/About'
import Work from './Navigation/Work'
import Contact from './Navigation/Contact'
import { StyleSheet, css } from 'aphrodite';
import t from 'tachyons-js';
import 'tachyons-js/variables.css'

const styles = StyleSheet.create({
  nav: {
    ...t.w_100,
    ...t.fixed,
    ...t.centered,
    ...t.cf,
    ...t.z_2,
    ...t.ph4_l,
    ...t.ph3_m,
    ...t.ba0,
    ...t.bg_black,

  },

  name: {
    ...t.w_30,
    ...t.fl,
    ...t.cf,
    ...t.mb0,
    ...t.ph4_l,
    ...t.ph3_m,
    ...t.f3,
    ...t.fw3,
    ...t.helvetica,
    ...t.white
  },

  contents: {
    ...t.w_70,
    ...t.cf,
    ...t.fl,
    ...t.mt3,
  },

  about: {
    ...t.w_third,
    ...t.fl,
    ...t.helvetica,
    ...t.white
  },

  work: {
    ...t.w_third,
    ...t.fl,
    ...t.helvetica,
    ...t.white
  },

  contact: {
    ...t.w_third,
    ...t.fl,
    ...t.helvetica,
    ...t.white
  }

})

const Nav = () => {

  return (
    <div className={css(styles.nav)}>
      <Name />
      <div className={css(styles.contents)}>
        <About />
        <Work />
        <Contact />
      </div>

    </div>
  )
}

export default Nav
