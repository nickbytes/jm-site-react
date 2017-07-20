import "tachyons-js/variables.css";

import { StyleSheet, css } from "aphrodite";
import React from "react";
import t from "tachyons-js";

import NavItem from "../NavItem";
import NavName from "../NavName";

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
    ...t.bg_black
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
    ...t.mt3
  }
});

const NavContainer = () => {
  return (
    <div className={css(styles.nav)}>
      <NavName />
      <div className={css(styles.contents)}>
        {/* Fun chance for a map function here if you are pulling names of nav from array or something like that,
          this is good for now though */}
        <NavItem title={"Work"} />
        <NavItem title={"About"} />
        <NavItem title={"Contact"} />
      </div>
    </div>
  );
};

export default NavContainer;
