import React from "react";
import { StyleSheet, css } from "aphrodite";
import t from "tachyons-js";
import "tachyons-js/variables.css";

const styles = StyleSheet.create({
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
  }
});

const NavName = () => {
  return <p className={css(styles.name)}>Jason Mandel</p>;
};

export default NavName;
