// @ts-nocheck
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { varContainer } from './variants/container';

const MotionContainer = forwardRef((props, ref) => {
  const { animate, action = false, transitionIn, sx, children, ...other } = props;

  return (
    <Box
      ref={ref}
      component={motion.div}
      variants={varContainer({ transitionIn })}
      initial={action ? false : 'initial'}
      animate={action ? (animate ? 'animate' : 'exit') : 'animate'}
      exit={action ? undefined : 'exit'}
      sx={sx}
      {...other}
    >
      {children}
    </Box>
  );
});

export { MotionContainer };
