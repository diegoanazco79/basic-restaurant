import { Box } from '@mui/material';
import React from 'react';
import ContentApp from './ContentApp';

import Header from './header';
import Menu from './menu';

function LayoutApp() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Menu />
      <ContentApp />
    </Box>
  );
}

export default React.memo(LayoutApp);
