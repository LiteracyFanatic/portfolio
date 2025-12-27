import { KeyboardArrowUp } from "@mui/icons-material";
import {
    Container,
    Fab,
    Stack,
    useScrollTrigger,
    Zoom
} from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

import About from "../components/About";
import Links from "../components/Links";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function Home() {
    const trigger = useScrollTrigger({ disableHysteresis: true });
    const theme = useTheme();

    const sections = [
        { Component: About, Id: "about" },
        { Component: Projects, Id: "projects" },
        { Component: Skills, Id: "skills" },
        { Component: Links, Id: "links" }
    ];

    return (
        <>
            <Container
                maxWidth="md"
                sx={{
                    marginY: 2
                }}
            >
                <Stack
                    spacing={12}
                    alignItems="center"
                    component={motion.div}
                >
                    {sections.map((section, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                opacity: 0,
                                scale: 0
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1
                            }}
                            transition={{
                                duration: 0.7
                            }}
                            viewport={{
                                once: true,
                                margin: `${theme.mixins.toolbar.minHeight}px`
                            }}
                            style={{
                                maxWidth: "min(800px, 100%)"
                            }}
                        >
                            <a id={section.Id} />
                            <section.Component />
                        </motion.div>
                    ))}
                </Stack>
            </Container>
            <Zoom in={trigger}>
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
        </>
    );
}

export default Home;
