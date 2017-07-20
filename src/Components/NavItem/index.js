import React from "react";
import { StyleSheet, css } from "aphrodite";
import t from "tachyons-js";
import "tachyons-js/variables.css";

const styles = StyleSheet.create({
  navItem: {
    ...t.w_third,
    ...t.fl,
    ...t.helvetica,
    ...t.white
  }
});

const NavItem = props => {
  return (
    <p className={css(styles.navItem)}>
      {props.title}
    </p>
  );
};

export default NavItem;
