"use client";

import { Box, Typography, Paper, Grid, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function About() {
  const { t } = useTranslation();

  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      elevation={3}
      sx={{ mb: 4, p: 3 }}
    >
      <Typography variant="h2" component="h2" gutterBottom>
        {t("about.info.desiredPosition")}
      </Typography>
      <Typography variant="body1" paragraph>
        {t("about.info.desiredPositionValue")}
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h2" component="h2" gutterBottom>
        {t("about.info.languages")}
      </Typography>
      <Typography variant="body1" paragraph>
        {t("about.info.languagesValue")}
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h2" component="h2" gutterBottom>
        {t("about.info.residence")}
      </Typography>
      <Typography variant="body1" paragraph>
        {t("about.info.residenceValue")}
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h2" component="h2" gutterBottom>
        {t("about.info.nationality")}
      </Typography>
      <Typography variant="body1" paragraph>
        {t("about.info.nationalityValue")}
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h2" component="h2" gutterBottom>
        {t("about.description.0")}
      </Typography>
      <Typography variant="body1" paragraph>
        {t("about.description.1")}
      </Typography>
    </Paper>
  );
}
