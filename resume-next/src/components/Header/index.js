"use client";

import { Box, Typography, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Header() {
  const { t } = useTranslation();

  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      elevation={3}
      sx={{ mb: 4, p: 3 }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h1" component="h1" gutterBottom>
          {t("name")}
        </Typography>
        <Typography variant="h3" component="h2" color="primary" gutterBottom>
          {t("position")}
        </Typography>
      </Box>
    </Paper>
  );
}
