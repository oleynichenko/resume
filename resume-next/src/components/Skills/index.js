"use client";

import { Box, Typography, Paper, Grid, Chip } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Skills() {
  const { t } = useTranslation();

  const skills = [
    { key: "javascript", label: t("skills.items.javascript") },
    { key: "htmlPug", label: t("skills.items.htmlPug") },
    { key: "cssScss", label: t("skills.items.cssScss") },
    { key: "angularNgrx", label: t("skills.items.angularNgrx") },
    { key: "nodejs", label: t("skills.items.nodejs") },
    { key: "mongodb", label: t("skills.items.mongodb") },
    { key: "phpSql", label: t("skills.items.phpSql") },
    { key: "psAdobeXd", label: t("skills.items.psAdobeXd") },
    { key: "uxui", label: t("skills.items.uxui") },
  ];

  const knowledge = t("knowledge.items", { returnObjects: true });

  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      elevation={3}
      sx={{ mb: 4, p: 3 }}
    >
      <Typography variant="h2" component="h2" gutterBottom>
        {t("skills.title")}
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          {skills.map((skill) => (
            <Grid item key={skill.key}>
              <Chip
                label={skill.label}
                color="primary"
                variant="outlined"
                sx={{ fontSize: "1rem", p: 1 }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Typography variant="h2" component="h2" gutterBottom>
        {t("knowledge.title")}
      </Typography>

      <Box>
        <Grid container spacing={2}>
          {knowledge.map((item, index) => (
            <Grid item key={index}>
              <Chip
                label={item}
                color="secondary"
                variant="outlined"
                sx={{ fontSize: "1rem", p: 1 }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
}
