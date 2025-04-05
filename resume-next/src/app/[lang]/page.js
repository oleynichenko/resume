"use client";

import { Container, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Container>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </Box>
    </Container>
  );
}
