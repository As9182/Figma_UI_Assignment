import React from 'react';
import { ThemeProvider } from '@mui/material';
import * as ReactDOM from 'react-dom/client';
import SnackBar from '../SharedJSX/SnackBar';
import themeCSS from './theme';

const ele = document.getElementById('snackbar');
const root = ReactDOM.createRoot(ele);

function renderSnackbar(apiResult) {
  root.render(
    <ThemeProvider theme={themeCSS}>
      <SnackBar apiResult={apiResult} open />
    </ThemeProvider>
  );
}

export default renderSnackbar;
