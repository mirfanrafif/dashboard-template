import React, { ComponentPropsWithoutRef } from "react";

import styles from "./Section.module.css";

const Section = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div {...props} className={`${styles.container} ${props.className ?? ""}`}>
      {props.children}
    </div>
  );
};

export default Section;
