import { motion } from 'motion/react';
import Box from '@mui/material/Box';
import { varContainer } from './variants/container';

const MotionViewport = (props) => {
  const { children, viewport, disabled, ...other } = props;

  const baseProps = disabled
    ? {}
    : {
        component: motion.div,
        initial: 'initial',
        whileInView: 'animate',
        variants: varContainer(),
        viewport: { once: true, amount: 0.3, ...viewport },
      };

  return (
    <Box {...baseProps} {...other}>
      {children}
    </Box>
  );
};

export { MotionViewport };
