import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import { useTranslation, Trans } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';

const ProjectLink = ({ children }) => {
  return (
    <Link
      sx={{
        ml: 0.25,
        textDecoration: 'none',
        '&:hover': { textDecoration: 'underline' },
      }}
      href="https://events.conf.app"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
};

const MoreInfoModal = ({ open, onClose }) => {
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: 2,
            px: 0,
            pt: 6,
            pb: 7,
            position: 'relative',
            maxWidth: 750,
            width: '100%',
          },
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 12,
          top: 12,
          zIndex: 1,
          color: 'grey.500',
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        sx={{
          py: 0,
          px: 5,
        }}
      >
        <Stack spacing={4}>
          <Box>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                mb: 1.5,
                color: 'primary.main',
                textTransform: 'uppercase',
              }}
            >
              {t('about.modal.stack.title')}
            </Typography>
            <Stack spacing={1}>
              {t('about.modal.stack.text', { returnObjects: true }).map(
                (item, index) => (
                  <Typography key={index} variant="body1">
                    • {item}
                  </Typography>
                ),
              )}
            </Stack>
          </Box>

          <Box>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                mb: 1.5,
                color: 'primary.main',
                textTransform: 'uppercase',
              }}
            >
              {t('about.modal.experience.title')}
            </Typography>
            <Stack spacing={1.5}>
              {t('about.modal.experience.text', { returnObjects: true }).map(
                (item, index) => (
                  <Typography
                    sx={{ textAlign: 'justify' }}
                    key={index}
                    variant="body1"
                  >
                    {item}
                  </Typography>
                ),
              )}
              <Typography variant="body1">
                <Trans
                  i18nKey="about.modal.experience.lastText"
                  components={[<ProjectLink />]}
                />
              </Typography>
            </Stack>
          </Box>

          <Box>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                mb: 1.5,
                color: 'primary.main',
                textTransform: 'uppercase',
              }}
            >
              {t('about.modal.vision.title')}
            </Typography>
            <Stack spacing={1.5}>
              {t('about.modal.vision.text', { returnObjects: true }).map(
                (item, index) => (
                  <Typography
                    sx={{ textAlign: 'justify' }}
                    key={index}
                    variant="body1"
                  >
                    {item}
                  </Typography>
                ),
              )}
            </Stack>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export { MoreInfoModal };
