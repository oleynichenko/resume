import { Typography } from '@mui/material';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Trans } from 'react-i18next';
import { varFade } from '../animate/variants/fade';
import { MoreInfoModal } from './MoreInfoModal';

const ReadMoreLink = ({ children, onClick }) => {
  return (
    <Typography
      sx={{
        ml: 0.5,
        color: 'primary.main',
        cursor: 'pointer',
        '&:hover': { textDecoration: 'underline' },
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

const Description = ({ description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {description.map((paragraph, index) => (
        <DescriptionItem key={index}>{paragraph}</DescriptionItem>
      ))}
      <DescriptionItem>
        <Trans
          i18nKey="about.lastDescription"
          components={[<ReadMoreLink onClick={handleClick} />]}
        />
      </DescriptionItem>

      <MoreInfoModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export { Description };
