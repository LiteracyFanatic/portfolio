import { Article, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";

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
                    item
                    xs={4}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
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
                    item
                    xs={4}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
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
                    item
                    xs={4}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <IconButton href="/resume.pdf">
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
