import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
export function SharedLoader() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      );
}