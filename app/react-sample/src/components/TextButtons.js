import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import {useTheme} from '@mui/material';

export default function TextButtons() {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent="center" spacing={2}>
      <Button variant="contained" color='primary'>學習</Button> 
      <Button variant="contained" color='primary'>運動</Button> 
      <Button variant="contained" color='primary'>其他</Button>
    </Stack>
  );
}