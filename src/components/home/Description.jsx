import { Box, Typography } from '@mui/material';
import { motion } from 'motion/react';
import { Trans } from 'react-i18next';
import { varFade } from '../animate/variants/fade';

const ReadMoreLink = ({ children, onClick }) => {
  return (
    <Typography
      sx={{
        ml: 0.5,
        color: 'primary.dark',
        cursor: 'pointer',
        '&:hover': { textDecoration: 'underline', color: 'primary.main' },
      }}
      variant="body1"
      component="span"
      onClick={onClick}
    >
      {children}
    </Typography>
  );
};

const DescriptionItem = ({ children }) => {
  return (
    <Typography
      sx={{
        mb: 1.25,
        lineHeight: 1.35,
        textAlign: { xs: 'justify', md: 'left' },
      }}
      variant="body1"
      component={motion.p}
      variants={varFade('inUp', { distance: 24 })}
    >
      {children}
    </Typography>
  );
};

const Description = ({ description, onClick }) => {
  return (
    <>
      {description.map((paragraph, index) => (
        <DescriptionItem key={index}>{paragraph}</DescriptionItem>
      ))}
      <DescriptionItem>
        <Trans
          i18nKey="about.lastDescription"
          components={[<ReadMoreLink onClick={onClick} />]}
        />
      </DescriptionItem>
    </>
  );
};

export { Description };
