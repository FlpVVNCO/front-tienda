import React from "react";
import { useScrollTrigger, Slide, easing } from "@mui/material";

const ScrollHide = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: props.threshold,
    target: props.window ? window() : undefined,
  });

  return (
    <Slide
      appear={true}
      direction="down"
      easing={{ enter: "cubic-bezier(0, 1.5, .8, 1)", exit: "null" }}
      in={trigger}>
      {props.children}
    </Slide>
  );
};

export default ScrollHide;
