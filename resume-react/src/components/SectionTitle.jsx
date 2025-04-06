import { Typography } from '@mui/material';

export const SectionTitle = ({ children }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        mb: 4,
        textTransform: 'uppercase',
        borderBottom: '3px solid',
      }}
    >
      {children}
    </Typography>
  );
};
