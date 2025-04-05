import { Paper, Typography, Box, Grid, Avatar } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const About = () => {
  const { t } = useTranslation();

  const infoItems = [
    { key: "position", value: "Front-end developer" },
    { key: "languages", value: "English B2" },
    { key: "residence", value: "Kiev" },
    { key: "nationality", value: "Ukrainian" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                src="/img/alexandr-ds-1x.jpg"
                srcSet="/img/alexandr-ds-2x.jpg 2x"
                alt="Alexandr Oleynichenko"
                sx={{ width: 200, height: 200 }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h1" gutterBottom>
              Alexandr Oleynichenko
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              {t("about.position")}
            </Typography>
            {t("about.description", { returnObjects: true }).map(
              (paragraph, index) => (
                <Typography key={index} paragraph>
                  {paragraph}
                </Typography>
              )
            )}
            <Box sx={{ mt: 2 }}>
              {infoItems.map(({ key, value }) => (
                <Box key={key} sx={{ display: "flex", mb: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", minWidth: 150 }}
                  >
                    {t(`about.info.${key}`)}:
                  </Typography>
                  <Typography variant="body1">{value}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </motion.div>
  );
};

export default About;
