import { Box, Typography, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Last updated: {new Date().toLocaleDateString()}
        </Typography>
        <Link
          href={i18n.language === "en" ? "/resume" : "/"}
          color="primary"
          sx={{ textDecoration: "none" }}
        >
          {i18n.language === "en" ? "Russian version" : "English version"}
        </Link>
      </Box>
    </motion.div>
  );
};

export default Footer;
