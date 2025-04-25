import { Typography } from '@mui/material';

const SectionTitle = ({ children, sx }) => {
  return (
    <Typography
      className="section-title"
      variant="h4"
      sx={{
        mb: 4,
        textTransform: 'uppercase',
        borderBottom: '3px solid',
        transition: 'opacity 0.5s ease-in-out',
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export { SectionTitle };
