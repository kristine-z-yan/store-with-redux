import React from "react";
import styles from "./styles.module.css";

export const Card = (props: any) => {
  return <div className={styles.card}>{props.children}</div>;
};
