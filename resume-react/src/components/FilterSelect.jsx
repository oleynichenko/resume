import { useState } from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  ListItemText,
  Chip,
  Box,
  OutlinedInput,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const options = [
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'backend', label: 'Backend' },
  { value: 'databases', label: 'Databases' },
];

export const FilterSelect = ({ sx }) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelected(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleDelete = (valueToDelete) => {
    setSelected(selected.filter((value) => value !== valueToDelete));
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ...sx }}>
      <FormControl sx={{ width: 160 }} size="small">
        <InputLabel id="filter-select-label">{t('filters.title')}</InputLabel>
        <Select
          labelId="filter-select-label"
          id="filter-select"
          multiple
          value={selected}
          onChange={handleChange}
          input={<OutlinedInput label={t('filters.title')} />}
          renderValue={(selected) =>
            selected
              .map((value) => options.find((opt) => opt.value === value)?.label)
              .join(', ')
          }
        >
          {options.map((option) => (
            <MenuItem dense key={option.value} value={option.value}>
              <Checkbox
                size="small"
                checked={selected.indexOf(option.value) > -1}
              />
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
        {selected.map((value) => (
          <Chip
            key={value}
            size="small"
            label={options.find((opt) => opt.value === value)?.label}
            onDelete={() => handleDelete(value)}
          />
        ))}
      </Box>
    </Box>
  );
};
