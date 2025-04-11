import { Typography, Box, Link, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SimpleBar from 'simplebar-react';
import { SectionTitle } from './SectionTitle';
import { FilterSelect } from '../FilterSelect';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useState } from 'react';
import { experienceItems, SECTION_HEIGHT } from '../../constants';

const getFilteredExperienceItems = (selectedTags, items) => {
  // First filter by selected tags
  const filteredByTags =
    selectedTags.length > 0
      ? items.filter((item) =>
          selectedTags.some((tag) => item.tags.includes(tag)),
        )
      : items;

  // Sort by year in descending order
  const sortedItems = [...filteredByTags].sort((a, b) => b.year - a.year);

  return sortedItems;
};

const Experience = ({ sx }) => {
  const { t } = useTranslation();
  const [selectedTags, setSelectedTags] = useState([]);

  const handleFilterChange = (selectedValues) => {
    setSelectedTags(selectedValues);
  };

  const filteredItems = getFilteredExperienceItems(
    selectedTags,
    experienceItems,
  );
  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 20 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5, delay: 0.4 }}
    // >
    <Box sx={sx}>
      <SectionTitle sx={{ mb: 2 }}>{t('experience.title')}</SectionTitle>
      <FilterSelect
        sx={{ mb: 0.5 }}
        selected={selectedTags}
        onChange={handleFilterChange}
      />
      <Box sx={{ position: 'relative' }} className="gradient-scrollbar">
        <SimpleBar style={{ height: SECTION_HEIGHT }}>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              pr: 2,
              mb: 4,
              mt: 2,
            }}
          >
            {filteredItems.map(
              ({ id, company, position, date, link, description }) => (
                <Grid container key={id} spacing={2} alignItems="center">
                  <Grid size={2}>
                    <Typography
                      color="primary"
                      variant="body2"
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <FiberManualRecordIcon
                        sx={{
                          mr: 0.5,
                          fontSize: '10px',
                          position: 'relative',
                          left: -1,
                          color: 'primary.light',
                        }}
                      />
                      {t(date)}
                    </Typography>
                  </Grid>
                  <Grid size={10}>
                    <Typography
                      sx={{ textDecorationColor: 'currentColor', mb: 1 }}
                      color="primary"
                      component={Link}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t(company)}
                    </Typography>
                    <Typography sx={{ mt: 0.5, mb: 1 }} variant="body2">
                      {t(position)}
                    </Typography>
                    {t(description, {
                      returnObjects: true,
                    }).map((paragraph, index) => (
                      <Typography
                        sx={{ mb: 1.25, lineHeight: 1.2 }}
                        key={index}
                      >
                        {paragraph}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              ),
            )}
            <Box
              sx={{
                height: 1,
                position: 'absolute',
                top: 0,
                left: 4,
                width: '1px',
                backgroundColor: 'primary.light',
              }}
            />
          </Box>
        </SimpleBar>
        <Box
          sx={{
            width: 1,
            position: 'absolute',
            bottom: 0,
            height: 40,
            background:
              'linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1))',
          }}
        />
        <Box
          sx={{
            width: 1,
            position: 'absolute',
            top: 0,
            height: 24,
            background:
              'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.4))',
          }}
        />
      </Box>
    </Box>
  );
};

export default Experience;
