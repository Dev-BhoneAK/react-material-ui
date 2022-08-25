import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {lightTheme, darkTheme} from './theme';
import {pink, red} from "@mui/material/colors";
import Button from '@mui/material/Button';
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    console.log(theme.palette);
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
            }}
        >
            {theme.palette.mode} mode
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            {/*<Typography variant="h1" sx={{color: theme.palette.mode === 'dark' ? theme.dark.primary.main : theme.light.primary.main}} gutterBottom>*/}
            {/*    h1. Heading*/}
            {/*</Typography>*/}
            <Button variant="contained" color="primary">
                Success
            </Button>
        </Box>
    );
}

export default function ToggleColorMode() {
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
                light: {
                    primary: {
                        main: '#556cd6',
                    },
                    secondary: {
                        main: '#19857b',
                    },
                    error: {
                        main: red.A400,
                    },
                },
                dark: {
                    primary: {
                        main: red.A700,
                    },
                    secondary: {
                        main: pink.A700,
                    },
                    error: {
                        main: red.A400,
                    },
                }
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
                <MyApp />
            </ThemeProvider>
            {/*<ThemeProvider theme={theme}>*/}
            {/*    <MyApp />*/}
            {/*</ThemeProvider>*/}
        </ColorModeContext.Provider>
    );
}