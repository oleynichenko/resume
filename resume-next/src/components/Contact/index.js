"use client";

import { Box, Typography, Paper, Grid, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      elevation={3}
      sx={{ mb: 4, p: 3 }}
    >
      <Typography variant="h2" component="h2" gutterBottom>
        {t("contacts.title")}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" component="h3" gutterBottom>
            {t("contacts.phone")}
          </Typography>
          <Link href="tel:+380501234567" underline="hover">
            +38 050 123 45 67
          </Link>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h3" component="h3" gutterBottom>
            {t("contacts.email")}
          </Typography>
          <Link href="mailto:alex@example.com" underline="hover">
            alex@example.com
          </Link>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h3" component="h3" gutterBottom>
            {t("contacts.portfolio")}
          </Typography>
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            underline="hover"
          >
            GitHub
          </Link>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          {t("footer.lastUpdated")}
        </Typography>
      </Box>
    </Paper>
  );
}
