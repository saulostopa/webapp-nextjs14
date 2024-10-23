// material
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { IconSearch } from '@tabler/icons-react';

import { SearchProduct } from '@/store/apps/eCommerce/ECommerceSlice';
// redux
import { useDispatch } from '@/store/hooks';

// ----------------------------------------------------------------------
export default function ProductSearch() {
  const dispatch = useDispatch();

  return (
    <>
      {/* ------------------------------------------- */}
      {/* Sort Button */}
      {/* ------------------------------------------- */}
      <TextField
        id="outlined-search"
        placeholder="Search Product"
        size="small"
        type="search"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconSearch size="14" />
            </InputAdornment>
          ),
        }}
        fullWidth
        onChange={(e) => dispatch(SearchProduct(e.target.value))}
      />
    </>
  );
}
