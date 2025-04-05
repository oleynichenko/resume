import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Header = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            color="primary"
            onClick={toggleLanguage}
            sx={{ textTransform: "none" }}
          >
            {i18n.language === "en" ? "RU" : "EN"}
          </Button>
        </motion.div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
