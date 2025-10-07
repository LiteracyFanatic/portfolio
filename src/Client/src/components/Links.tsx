import { Article, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import resumeUrl from "../assets/resume.pdf";

function Links() {
    return (
        <Box>
            <Typography
                variant="h4"
                textAlign="center"
                marginBottom={1}
            >
                Links
            </Typography>
            <Grid container>
                <Grid
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                    size={4}
                >
                    <IconButton href="https://github.com/LiteracyFanatic">
                        <GitHub
                            sx={{
                                fontSize: 56
                            }}
                        />
                    </IconButton>
                    <Typography variant="caption">
                        GitHub
                    </Typography>
                </Grid>
                <Grid
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                    size={4}
                >
                    <IconButton href="https://www.linkedin.com/in/jordanmcannon/">
                        <LinkedIn
                            sx={{
                                fontSize: 56
                            }}
                        />
                    </IconButton>
                    <Typography variant="caption">
                        LinkedIn
                    </Typography>
                </Grid>
                <Grid
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                    size={4}
                >
                    <IconButton href={resumeUrl}>
                        <Article
                            sx={{
                                fontSize: 56
                            }}
                        />
                    </IconButton>
                    <Typography variant="caption">
                        Resume
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Links;
