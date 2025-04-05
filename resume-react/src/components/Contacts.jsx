import { Paper, Typography, Box, Link } from "@mui/material";
import { Phone, Email, Language } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Contacts = () => {
  const { t } = useTranslation();

  const contacts = [
    {
      icon: <Phone />,
      label: t("contacts.phone"),
      value: "+38 050 865 82 18",
      href: "tel:+380508658218",
    },
    {
      icon: <Email />,
      label: t("contacts.email"),
      value: "oleynichenkos@gmail.com",
      href: "mailto:oleynichenkos@gmail.com?subject=Interview invitation",
    },
    {
      icon: <Language />,
      label: t("contacts.portfolio"),
      value: "oleynichenko.github.io",
      href: "https://oleynichenko.github.io/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h2" gutterBottom>
          {t("contacts.title")}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {contacts.map(({ icon, label, value, href }) => (
            <Box
              key={label}
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
            >
              {icon}
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", minWidth: 100 }}
              >
                {label}:
              </Typography>
              <Link href={href} target="_blank" rel="noopener noreferrer">
                {value}
              </Link>
            </Box>
          ))}
        </Box>
      </Paper>
    </motion.div>
  );
};

export default Contacts;
