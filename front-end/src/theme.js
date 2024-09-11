import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    // blue
                    main: '#0B2F9F',
                    light: '#3572EF',
                    dark: '#161D6F',
                },
                secondary: {
                    // gray
                    main: '#526D82',
                    light: '#9DB2BF',
                    dark: '#27374D',
                },
            },
            backgroundColor: {
                primary: {
                    main: '#FFFFFF',
                },
            },
        },
        // dark: {
        //     palette: {
        //         primary: {
        //             // white
        //             light: '#FFFFFF',
        //             main: '#E3E4E4',
        //             dark: '#C2C2C2',
        //             backgroundColor: '#454c5a',
        //         },
        //         secondary: {
        //             light: '#ff7961',
        //             main: '#E3E4E4',
        //             dark: '#ba000d',
        //             backgroundColor: '#454c5a',
        //         },
        //     },
        // },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default theme;
