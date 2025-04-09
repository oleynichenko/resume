import { useState } from 'react';
import SimpleBar from 'simplebar-react';
import { useTranslation } from 'react-i18next';
import { Typography, Box, Link, Grid } from '@mui/material';
import { SectionTitle } from './SectionTitle';
import { FilterSelect } from './FilterSelect';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const tags = [
  { id: 'react', name: 'React' },
  { id: 'angular', name: 'Angular' },
  { id: 'apis', name: 'APIs' },
  { id: 'database', name: 'Databases' },
  { id: 'devops', name: 'DevOps' },
];

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

  const educationItems = [
    {
      id: 1,
      name: 'Cursor AI: Learn by Building Full-Stack Next.js 15 App',
      year: '2025',
      tag: 'react',
      link: 'https://www.udemy.com/course/cursorai-nextjs/',
    },
    {
      id: 2,
      name: 'Advanced React: Design Patterns and Performance',
      year: '2025',
      tag: 'react',
      link: 'https://www.udemy.com/course/advanced-react',
    },
    {
      id: 3,
      name: 'React Hook Form: The Complete Guide with react',
      year: '2025',
      tag: 'react',
      link: 'https://www.udemy.com/course/react-hook-form-the-complete-guide-with-react-js',
    },
    {
      id: 4,
      name: 'React Native: Advanced Concepts',
      year: '2024',
      tag: 'react',
      link: 'https://www.udemy.com/course/react-native-advanced',
    },
    {
      id: 5,
      name: 'Modern React with Redux',
      year: '2024',
      tag: 'react',
      link: 'https://www.udemy.com/course/react-redux',
    },
    {
      id: 6,
      name: "NestJS: The Complete Developer's Guide",
      year: '2024',
      tag: 'apis',
      link: 'https://www.udemy.com/course/nestjs-the-complete-developers-guide',
    },
    {
      id: 7,
      name: 'React Native - The Practical Guide',
      year: '2023',
      tag: 'react',
      link: 'https://www.udemy.com/course/react-native-the-practical-guide',
    },
    {
      id: 9,
      name: "SQL and PostgreSQL: The Complete Developer's Guide",
      year: '2023',
      tag: 'database',
      link: 'https://www.udemy.com/course/sql-and-postgresql',
    },
    {
      id: 10,
      name: 'GitHub Actions - The Complete Guide',
      year: '2023',
      tag: 'devops',
      link: 'https://www.udemy.com/course/github-actions-the-complete-guide',
    },
    {
      id: 11,
      name: "Microfrontends with React: A Complete Developer's Guide",
      year: '2022',
      tag: 'react',
      link: 'https://www.udemy.com/course/microfrontend-course',
    },
    {
      id: 19,
      name: 'Secure Your ReactJs Applications With Auth0',
      year: '2022',
      tag: 'react',
      link: 'https://www.udemy.com/course/secure-your-reactjs-applications-with-auth0/',
    },
    {
      id: 12,
      name: 'Node JS: Advanced Concepts',
      year: '2022',
      tag: 'apis',
      link: 'https://www.udemy.com/course/advanced-node-for-developers',
    },
    {
      id: 14,
      name: 'Docker & Kubernetes: The Practical Guide',
      year: '2021',
      tag: 'devops',
      link: 'https://www.udemy.com/course/docker-kubernetes-the-practical-guide',
    },
    {
      id: 15,
      name: 'The Nuts and Bolts of OAuth 2.0',
      year: '2021',
      tag: 'apis',
      link: 'https://www.udemy.com/course/oauth-2-simplified',
    },
    {
      id: 13,
      name: "MongoDB - The Complete Developer's Guide",
      year: '2020',
      tag: 'database',
      link: 'https://www.udemy.com/course/mongodb-the-complete-developers-guide',
    },
    {
      id: 8,
      name: 'The Complete Node.js Developer Course (3rd Edition)',
      year: '2020',
      tag: 'apis',
      link: 'https://www.udemy.com/course/the-complete-nodejs-developer-course-2',
    },
    {
      id: 16,
      name: 'Webpack 5: The Complete Guide For Beginners',
      year: '2020',
      tag: 'devops',
      link: 'https://www.udemy.com/course/webpack-from-beginner-to-advanced',
    },
    {
      id: 17,
      name: 'Progressive Web Apps (PWA) - The Complete Guide',
      year: '2021',
      tag: 'react',
      link: 'https://www.udemy.com/course/progressive-web-app-pwa-the-complete-guide',
    },
    {
      id: 18,
      name: 'React Progressive Web App With Workbox and Webpack',
      year: '2021',
      tag: 'react',
      link: 'https://www.udemy.com/course/react-progressive-web-app-with-workbox-and-webpack-tutorial',
    },
    {
      id: 20,
      name: 'Unit Testing for TypeScript & NodeJs Developers with Jest',
      year: '2019',
      tag: 'apis',
      link: 'https://www.udemy.com/course/unit-testing-typescript-nodejs',
    },
    {
      id: 21,
      name: 'Angular - The Complete Guide',
      year: '2019',
      tag: 'angular',
      link: 'https://www.udemy.com/course/the-complete-guide-to-angular-2',
    },
    {
      id: 22,
      name: 'Angular (Full App) with Angularfire & NgRx',
      year: '2018',
      tag: 'angular',
      link: 'https://www.udemy.com/course/angular-full-app-with-angular-material-angularfire-ngrx/',
    },
    {
      id: 23,
      name: 'Reactive Angular Course (with RxJs)',
      year: '2018',
      tag: 'angular',
      link: 'https://www.udemy.com/course/rxjs-reactive-angular-course',
    },
    {
      id: 25,
      name: 'Angular Testing Masterclass',
      year: '2018',
      tag: 'angular',
      link: 'https://www.udemy.com/course/angular-testing-course',
    },
    {
      id: 24,
      name: 'Angular Deep Dive – Beginner to Advanced',
      year: '2017',
      tag: 'angular',
      link: 'https://www.udemy.com/course/angular-course',
    },
  ];

  const filteredItems = getFilteredItems(selectedTags, educationItems);

  return (
    <Box sx={sx}>
      <SectionTitle sx={{ mb: 2.5 }}>{t('education.title')}</SectionTitle>
      <FilterSelect
        sx={{ mb: 0.25 }}
        options={tags}
        selected={selectedTags}
        onChange={handleFilterChange}
      />
      <Box sx={{ position: 'relative' }} className="gradient-scrollbar">
        <SimpleBar style={{ height: 500 }}>
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
                          fontSize: '12px',
                          position: 'relative',
                          left: -2,
                          color: 'primary.light',
                        }}
                      />{' '}
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
              'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 1))',
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
