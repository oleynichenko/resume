import { Paper, Typography, Box, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Experience = () => {
  const { t } = useTranslation();

  const experienceItems = [
    {
      period: "Since April 2019",
      company: "«Be Ukraine» LLC",
      position: "Front-end developer",
      description: [
        "Banking application development",
        "Scss/Pug + Angular 8 + PrimeNg",
      ],
    },
    {
      period: "2016 – 2018",
      company: "Project «JBOOK» - multilingual book study app (PWA)",
      position: "Front-end developer",
      description: [
        "Application architecture development.",
        "Layout + Angular 6 + Node.js + MongoDB",
        "Material Design framework.",
        "Integration with API FB, VK, Twitter.",
        "",
        "Examples:",
      ],
      links: [
        {
          text: "Book",
          href: "https://pticha.jbook.club/ru/project",
        },
        {
          text: "Test «The Basic of Essentialism»",
          href: "https://intense-chamber-18646.herokuapp.com/links/essentialism-short",
        },
      ],
    },
    {
      period: "2016 (8 months)",
      company: "Freelance",
      position: "Front-end developer",
      description: ["Works are presented in the portfolio."],
      links: [
        {
          text: "portfolio",
          href: "https://oleynichenko.github.io/",
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h2" gutterBottom>
          {t("experience.title")}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {experienceItems.map(
            ({ period, company, position, description, links }) => (
              <Box key={company}>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {period}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {company}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {position}
                </Typography>
                {description.map((text, index) => (
                  <Typography key={index} paragraph>
                    {text}
                  </Typography>
                ))}
                {links && (
                  <Box component="ul" sx={{ pl: 2 }}>
                    {links.map(({ text, href }) => (
                      <Box component="li" key={text}>
                        <Link
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {text}
                        </Link>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            )
          )}
        </Box>
      </Paper>
    </motion.div>
  );
};

export default Experience;
