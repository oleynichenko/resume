import { Paper, Typography, Box, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Education = () => {
  const { t } = useTranslation();

  const educationItems = [
    {
      year: "2019",
      institution: "Udemy",
      courses: [
        {
          name: "Design Patterns in JavaScript",
          link: "https://www.udemy.com/course/design-patterns-javascript/",
        },
        {
          name: "The Complete Node.js Developer Course",
          link: "https://www.udemy.com/course/the-complete-nodejs-developer-course-2",
        },
      ],
    },
    {
      year: "2018",
      institution: "AcadeMind + Angular University",
      courses: [
        {
          name: "Angular Core Deep Dive",
          link: "https://www.udemy.com/angular-course/",
        },
        {
          name: "RxJs Reactive Programming",
          link: "https://www.udemy.com/rxjs-reactive-angular-course",
        },
        {
          name: "NgRx In Depth",
          link: "https://www.udemy.com/ngrx-course/",
        },
        {
          name: "Angular - The Complete Guide",
          link: "https://www.udemy.com/the-complete-guide-to-angular-2",
        },
      ],
    },
    {
      year: "",
      institution: "MongoDB University",
      courses: [
        {
          name: "MongoDB Aggregation Framework",
          link: "https://university.mongodb.com/courses/M121/about",
        },
        {
          name: "MongoDB for JS Developers",
          link: "https://university.mongodb.com/courses/M220JS/about",
        },
        {
          name: "MongoDB Basics",
          link: "https://university.mongodb.com/courses/M001/about",
        },
      ],
    },
    {
      year: "2016 – 2017",
      institution: "School of Designers by Artem Gorbunov",
      courses: [
        {
          name: "Interface Design Course",
          link: "https://bureau.ru/school",
        },
      ],
    },
    {
      year: "",
      institution: "HTML Academy",
      courses: [
        {
          name: "Professional Node.js",
          link: "https://htmlacademy.ru/intensive/nodejs",
        },
        {
          name: "Professional PHP",
          link: "https://htmlacademy.ru/intensive/php",
        },
        {
          name: "Advanced JavaScript",
          link: "https://htmlacademy.ru/intensive/ecmascript",
        },
        {
          name: "Advanced HTML и CSS",
          link: "https://htmlacademy.ru/intensive/adaptive",
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h2" gutterBottom>
          {t("education.title")}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {educationItems.map(({ year, institution, courses }) => (
            <Box key={institution}>
              {year && (
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {year}
                </Typography>
              )}
              <Typography variant="h6" gutterBottom>
                {institution}
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {courses.map(({ name, link }) => (
                  <Box component="li" key={name}>
                    <Link href={link} target="_blank" rel="noopener noreferrer">
                      {name}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>
    </motion.div>
  );
};

export default Education;
