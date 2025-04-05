import { Paper, Typography, Box, Grid, Chip } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    { name: "Javascript", level: 10 },
    { name: "HTML + PUG", level: 9 },
    { name: "CSS + SCSS", level: 9 },
    { name: "Angular + NgRx", level: 9 },
    { name: "Node JS", level: 7 },
    { name: "MongoDB", level: 7 },
    { name: "PHP + SQL", level: 4 },
    { name: "PS + AdobeXD", level: 8 },
    { name: "UX/UI", level: 8 },
  ];

  const knowledge = [
    "Neuromarketing",
    "Adwords",
    "SEO",
    "Webdesign",
    "Material Design",
    "UX/UI",
    "Copywriting",
    "Psychology",
    "CPA-Marketing",
  ];

  const SkillBar = ({ level }) => {
    const filled = Array(level).fill("●");
    const empty = Array(12 - level).fill("○");
    return (
      <Box sx={{ display: "flex", gap: 1 }}>
        {filled.map((dot, index) => (
          <Typography key={`filled-${index}`} color="primary">
            {dot}
          </Typography>
        ))}
        {empty.map((dot, index) => (
          <Typography key={`empty-${index}`} color="text.disabled">
            {dot}
          </Typography>
        ))}
      </Box>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
            <Typography variant="h2" gutterBottom>
              {t("skills.title")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {skills.map(({ name, level }) => (
                <Box key={name}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    {name}
                  </Typography>
                  <SkillBar level={level} />
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
            <Typography variant="h2" gutterBottom>
              {t("skills.goodKnowledge")}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {knowledge.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Skills;
