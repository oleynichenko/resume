import { motion } from 'motion/react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { varContainer } from './variants/container';

const MotionViewport = (props) => {
  const { children, viewport, disableAnimate = true, ...other } = props;

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const disabled = smDown && disableAnimate;

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
