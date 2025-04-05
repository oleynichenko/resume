"use client";

import { Box, Typography, Paper, Grid, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Education() {
  const { t } = useTranslation();

  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      elevation={3}
      sx={{ mb: 4, p: 3 }}
    >
      <Typography variant="h2" component="h2" gutterBottom>
        {t("education.title")}
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h3" component="h3" gutterBottom>
          {t("education.items.2019.institution")}
        </Typography>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          2019
        </Typography>
        <Box sx={{ mt: 1 }}>
          {t("education.items.2019.courses", { returnObjects: true }).map(
            (course, index) => (
              <Typography key={index} variant="body1">
                • {course}
              </Typography>
            )
          )}
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mb: 3 }}>
        <Typography variant="h3" component="h3" gutterBottom>
          {t("education.items.2018.institution")}
        </Typography>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          2018
        </Typography>
        <Box sx={{ mt: 1 }}>
          {t("education.items.2018.courses", { returnObjects: true }).map(
            (course, index) => (
              <Typography key={index} variant="body1">
                • {course}
              </Typography>
            )
          )}
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mb: 3 }}>
        <Typography variant="h3" component="h3" gutterBottom>
          {t("education.items.mongodb.institution")}
        </Typography>
        <Box sx={{ mt: 1 }}>
          {t("education.items.mongodb.courses", { returnObjects: true }).map(
            (course, index) => (
              <Typography key={index} variant="body1">
                • {course}
              </Typography>
            )
          )}
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mb: 3 }}>
        <Typography variant="h3" component="h3" gutterBottom>
          {t("education.items.2016-2017.institution")}
        </Typography>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          2016-2017
        </Typography>
        <Box sx={{ mt: 1 }}>
          {t("education.items.2016-2017.courses", { returnObjects: true }).map(
            (course, index) => (
              <Typography key={index} variant="body1">
                • {course}
              </Typography>
            )
          )}
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box>
        <Typography variant="h3" component="h3" gutterBottom>
          {t("education.items.htmlacademy.institution")}
        </Typography>
        <Box sx={{ mt: 1 }}>
          {t("education.items.htmlacademy.courses", {
            returnObjects: true,
          }).map((course, index) => (
            <Typography key={index} variant="body1">
              • {course}
            </Typography>
          ))}
        </Box>
      </Box>
    </Paper>
  );
}
