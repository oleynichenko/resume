"use client";

import { Box, Typography, Paper, Grid, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      elevation={3}
      sx={{ mb: 4, p: 3 }}
    >
      <Typography variant="h2" component="h2" gutterBottom>
        {t("experience.title")}
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h3" component="h3" gutterBottom>
          {t("experience.items.beukraine.position")}
        </Typography>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          {t("experience.items.beukraine.company")} |{" "}
          {t("experience.items.beukraine.period")}
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
          {t("experience.items.beukraine.description")}
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mb: 3 }}>
        <Typography variant="h3" component="h3" gutterBottom>
          {t("experience.items.jbook.position")}
        </Typography>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          {t("experience.items.jbook.company")} |{" "}
          {t("experience.items.jbook.period")}
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
          {t("experience.items.jbook.description")}
        </Typography>
        <Box sx={{ mt: 1 }}>
          {t("experience.items.jbook.examples", { returnObjects: true }).map(
            (example, index) => (
              <Typography key={index} variant="body2" color="text.secondary">
                • {example}
              </Typography>
            )
          )}
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box>
        <Typography variant="h3" component="h3" gutterBottom>
          {t("experience.items.freelance.position")}
        </Typography>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          {t("experience.items.freelance.company")} |{" "}
          {t("experience.items.freelance.period")}
        </Typography>
        <Typography variant="body1">
          {t("experience.items.freelance.description")}
        </Typography>
      </Box>
    </Paper>
  );
}
