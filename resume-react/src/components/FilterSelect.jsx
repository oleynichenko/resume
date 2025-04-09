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

export const FilterSelect = ({ sx, options, selected, onChange }) => {
  const { t } = useTranslation();

  console.log(options);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    onChange(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleDelete = (valueToDelete) => {
    onChange(selected.filter((value) => value !== valueToDelete));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        ...sx,
      }}
    >
      <FormControl sx={{ width: 155 }} size="small">
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
              .map((value) => options.find((opt) => opt.id === value)?.name)
              .join(', ')
          }
        >
          {options.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              <Checkbox checked={selected.indexOf(option.id) > -1} />
              <ListItemText primary={option.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ display: 'flex', gap: 0.5, overflow: 'hidden' }}>
        {selected.map((value) => (
          <Chip
            key={value}
            size="small"
            label={options.find((opt) => opt.id === value)?.name}
            onDelete={() => handleDelete(value)}
          />
        ))}
      </Box>
    </Box>
  );
};
