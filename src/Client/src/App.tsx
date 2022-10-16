import "@fontsource/roboto/latin-300.css";
import "@fontsource/roboto/latin-400.css";
import "@fontsource/roboto/latin-500.css";
import "@fontsource/roboto/latin-700.css";

import { KeyboardArrowUp } from "@mui/icons-material";
import {
    createTheme,
    CssBaseline,
    Divider,
    Fab,
    Fade,
    Grow,
    Slide,
    Stack,
    ThemeProvider,
    useScrollTrigger,
    Zoom
} from "@mui/material";
import { Container } from "@mui/material";
import { useRef } from "react";

import About from "./components/About";
import Header from "./components/Header";
import Links from "./components/Links";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const defaultTheme = createTheme({
    palette: {
        primary: {
            light: "#ae52d4",
            main: "#7b1fa2",
            dark: "#4a0072",
            contrastText: "#ffffff"
        }
    }
});

const theme = createTheme(defaultTheme, {
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    scrollPaddingTop: `calc(${defaultTheme.mixins.toolbar.minHeight}px + ${defaultTheme.spacing(2)})`
                },
                body: {
                    backgroundColor: defaultTheme.palette.grey[200]
                }
            }
        }
    }
});

function App() {
    const trigger = useScrollTrigger({ disableHysteresis: true });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Header />
                <Container
                    maxWidth="md"
                    sx={{
                        marginY: 2
                    }}
                >
                    <Stack
                        spacing={4}
                        alignItems="center"
                    >
                        <About />
                        <Projects />
                        <Skills />
                        <Links />
                    </Stack>
                </Container>
                <Zoom
                    in={trigger}
                >
                    <Fab
                        color="primary"
                        sx={{
                            position: "fixed",
                            bottom: 16,
                            right: 16
                        }}
                        onClick={() => window.scroll({ behavior: "smooth", top: 0 })}
                    >
                        <KeyboardArrowUp />
                    </Fab>
                </Zoom>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;
