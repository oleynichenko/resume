import React, { useState } from 'react';
import { Box, Typography, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import PortfolioWorkButtons from './PortfolioWorkButtons';

const PortfolioWorkItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Typography
        variant="h5"
        sx={{
          mb: 1,
          fontWeight: 400,
          textAlign: 'center',
        }}
      >
        {item.title}
      </Typography>
      <Box sx={{ mb: 2, textAlign: 'center' }}>
        {item.tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            size="small"
            sx={{
              m: 0.5,
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          />
        ))}
      </Box>
      <Box
        sx={{
          position: 'relative',
          border: '1px solid',
          borderColor: 'divider',
          mb: 2,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box sx={{ mb: 2 }}>
          <picture>
            <source media="(min-width: 769px)" srcSet={item.image.desktop} />
            <img
              src={item.image.tablet}
              alt={item.image.alt}
              style={{ display: 'block', width: '100%', height: 'auto' }}
            />
          </picture>
        </Box>
        <Stack
          component={motion.div}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: item.colorLight || item.color,
            color: item.colorDark || '#000',
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0.95 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <PortfolioWorkButtons
            links={item.links}
            color={item.color}
            colorDark={item.colorDark}
            features={item.features}
          />
        </Stack>
      </Box>
    </>
  );
};

export default PortfolioWorkItem;
