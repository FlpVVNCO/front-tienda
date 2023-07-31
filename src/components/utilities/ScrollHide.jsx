import React from "react";
import { useScrollTrigger, Slide } from "@mui/material";

const ScrollHide = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: props.threshold,
    target: props.window ? window() : undefined,
  });

  return (
    <Slide appear={true} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
};

export default ScrollHide;
