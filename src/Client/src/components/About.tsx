import { Avatar, Box, Grid, Typography } from "@mui/material";
import { forwardRef } from "react";

import profile from "../assets/profile.jpg";

const About = forwardRef(function About(props, ref) {
    return (
        <Box
            ref={ref}
            {...props}
        >
            <Typography
                variant="h4"
                textAlign="center"
                marginBottom={1}
            >
                About
            </Typography>
            <Grid
                container
                rowSpacing={2}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Avatar
                        src={profile}
                        sx={{
                            width: 224,
                            height: 224
                        }}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}
                >
                    <Typography variant="h5" gutterBottom>
                        Hi, I&apos;m Jordan.
                    </Typography>
                    <Typography>
                        I&apos;m a fullstack developer specializing in .NET Core and React. I&apos;m passionate about functional programming, data visualization, and Linux. I learned a lot about technical computing during my time studying Mechanical Engineering. In my free time, I like to cook and study Japanese.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
);

export default About;
