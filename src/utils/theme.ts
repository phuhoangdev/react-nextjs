import { Heebo } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const heebo = Heebo({
   weight: ['300', '400', '500', '700'],
   subsets: ['latin'],
   display: 'swap',
   fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
export let theme = createTheme({
   palette: {
      primary: {
         main: '#ff6464',
      },
      secondary: {
         light: '#edf7fa',
         main: '#00a8cc',
      },
      error: {
         main: red.A400,
      },
   },
   typography: {
      fontFamily: heebo.style.fontFamily,
   },
   components: {
      MuiContainer: {
         defaultProps: {
            maxWidth: 'md',
         },
         styleOverrides: {
            maxWidthSm: {
               maxWidth: '680px',
               '@media (min-width: 600px)': { maxWidth: '680px' },
            },
            maxWidthMd: {
               maxWidth: '860px',
               '@media (min-width: 900px)': { maxWidth: '860px' },
            },
         },
      },
      MuiLink: {
         defaultProps: {
            underline: 'hover',
         },
         styleOverrides: {
            root: {
               color: 'black',
               '&:hover, &.active': {
                  color: '#ff6464',
               },
            },
         },
      },
      MuiButton: {
         variants: [
            {
               props: { variant: 'contained', color: 'primary' },
               style: {
                  color: 'white',
               },
            },
         ],
      },
      MuiChip: {
         styleOverrides: {
            root: {
               paddingInline: 2,
            },
         },
         variants: [
            {
               props: { color: 'secondary' },
               style: {
                  color: 'white',
                  backgroundColor: '#142850',
                  fontSize: 16,
                  fontWeight: 'bold',
               },
            },
         ],
      },
   },
});

theme = responsiveFontSizes(theme);
