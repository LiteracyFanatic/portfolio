import "@fontsource/roboto/latin-300.css";
import "@fontsource/roboto/latin-400.css";
import "@fontsource/roboto/latin-500.css";
import "@fontsource/roboto/latin-700.css";

import {
    createTheme,
    CssBaseline,
    ThemeProvider
} from "@mui/material";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import CadPortfolio from "./pages/CadPortfolio";
import Home from "./pages/Home";

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
                ":target::before" : {
                    content: "''",
                    display: "block",
                    height: `calc(${defaultTheme.mixins.toolbar.minHeight}px + ${defaultTheme.spacing(2)})`,
                    marginTop: `calc(-${defaultTheme.mixins.toolbar.minHeight}px - ${defaultTheme.spacing(2)})`
                },
                body: {
                    backgroundColor: defaultTheme.palette.grey[200]

                }
            }
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <ScrollToHash />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cad" element={<CadPortfolio />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) {
            window.scrollTo({ top: 0 });
            return;
        }

        const element = document.querySelector(location.hash);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [location.hash, location.pathname]);

    return (
        null
    );
}

export default App;
