import { Typography } from '@mui/material';

export const SectionTitle = ({ children, sx }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        mb: 4,
        textTransform: 'uppercase',
        borderBottom: '3px solid',
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};
