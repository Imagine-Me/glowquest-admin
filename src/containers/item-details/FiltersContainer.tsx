"use client";

import { Box, Checkbox, FormControlLabel, Autocomplete, TextField, CircularProgress } from "@mui/material";
import { SelectOption } from "@/interfaces/common.interface";

interface FiltersContainerProps {
  itemOptions: SelectOption[];
  siteOptions: SelectOption[];
  loadingItems: boolean;
  loadingSites: boolean;
  filters: {
    itemName: string;
    siteId?: number;
    priceNull?: boolean;
  };
  onItemSearch: (searchText: string) => void;
  onSiteSearch: (searchText: string) => void;
  onFilterChange: (name: string, value: string | number | boolean | null | undefined) => void;
}

export function FiltersContainer({
  itemOptions,
  siteOptions,
  loadingItems,
  loadingSites,
  filters,
  onItemSearch,
  onSiteSearch,
  onFilterChange,
}: FiltersContainerProps) {
  return (
    <Box display="flex" gap={2} mb={2} width="100%">
      <Box flex={5}>
        <Autocomplete
          freeSolo
          options={itemOptions}
          loading={loadingItems}
          onInputChange={(_: unknown, value: string) => onItemSearch(value)}
          onChange={(_: unknown, value: SelectOption | string | null) => {
            if (!value || typeof value === 'string') return;
            onFilterChange('itemName', (value as SelectOption).value);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Item Name"
              size="small"
              fullWidth
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loadingItems ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
      </Box>
      <Box flex={5}>
        <Autocomplete
          options={siteOptions}
          loading={loadingSites}
          getOptionLabel={(option: SelectOption) => option.label}
          onChange={(_: unknown, value: SelectOption | null) => onFilterChange('siteId', value?.value)}
          onInputChange={(_: unknown, value: string) => onSiteSearch(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Site"
              size="small"
              fullWidth
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loadingSites ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
      </Box>
      <Box flex={2} display="flex" alignItems="center">
        <FormControlLabel
          control={
            <Checkbox
              name="priceNull"
              checked={filters.priceNull || false}
              onChange={(e) => onFilterChange('priceNull', e.target.checked)}
            />
          }
          label="Price is null"
        />
      </Box>
    </Box>
  );
}
