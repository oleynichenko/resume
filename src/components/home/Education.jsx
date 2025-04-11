import { useState } from 'react';
import SimpleBar from 'simplebar-react';
import { useTranslation } from 'react-i18next';
import { Typography, Box, Link, Grid } from '@mui/material';
import { SectionTitle } from './SectionTitle';
import { FilterSelect } from '../FilterSelect';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { educationItems, SECTION_HEIGHT } from '../../constants';

const getFilteredItems = (selectedTags, educationItems) => {
  // First filter by selected tags
  const filteredByTags =
    selectedTags.length > 0
      ? educationItems.filter((item) => selectedTags.includes(item.tag))
      : educationItems;

  // Sort by year in descending order
  const sortedItems = [...filteredByTags].sort((a, b) => b.year - a.year);

  // Group by year and modify the year display
  const result = [];
  let currentYear = null;
  let yearGroup = [];

  // First pass: group items by year
  sortedItems.forEach((item) => {
    if (item.year !== currentYear) {
      // If we have a previous group, process it
      if (yearGroup.length > 0) {
        // Set year to empty for all but the last item in the group
        yearGroup.forEach((groupItem, index) => {
          if (index < yearGroup.length - 1) {
            result.push({ ...groupItem, year: '' });
          } else {
            // Last item in the group keeps the year
            result.push({ ...groupItem });
          }
        });
      }

      // Start a new group
      currentYear = item.year;
      yearGroup = [item];
    } else {
      // Add to current group
      yearGroup.push(item);
    }
  });

  // Process the last group
  if (yearGroup.length > 0) {
    yearGroup.forEach((groupItem, index) => {
      if (index < yearGroup.length - 1) {
        result.push({ ...groupItem, year: '' });
      } else {
        // Last item in the group keeps the year
        result.push({ ...groupItem });
      }
    });
  }

  return result;
};

const Education = ({ sx }) => {
  const { t } = useTranslation();
  const [selectedTags, setSelectedTags] = useState([]);

  const handleFilterChange = (selectedValues) => {
    setSelectedTags(selectedValues);
  };

  const filteredItems = getFilteredItems(selectedTags, educationItems);

  return (
    <Box sx={sx}>
      <SectionTitle sx={{ mb: 2 }}>{t('education.title')}</SectionTitle>
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
              gap: 1.5,
              pr: 2,
              mb: 4,
              mt: 2,
            }}
          >
            {filteredItems.map(({ id, name, year, link }) => (
              <Grid container key={id} spacing={2} alignItems="center">
                <Grid size={2}>
                  {year && (
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
                      {year}
                    </Typography>
                  )}
                </Grid>
                <Grid size={10}>
                  <Typography
                    sx={{ textDecorationColor: 'currentColor' }}
                    color="inherit"
                    component={Link}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {name}
                  </Typography>
                </Grid>
              </Grid>
            ))}
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

export default Education;
