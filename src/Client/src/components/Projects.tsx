import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    MobileStepper,
    Typography
} from "@mui/material";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";

import CAD from "../assets/CAD.jpg";
import football from "../assets/football.png";
import form from "../assets/form.png";
import kensaku from "../assets/kensaku.png";
import map from "../assets/map.png";
import noteduino from "../assets/noteduino.jpg";
import psychrometrics from "../assets/psychrometrics.jpg";
import stocks from "../assets/stocks.png";
import truck from "../assets/truck.png";

interface Project {
    Image: string
    Description: string
}

const projects: Project[] = [
    {
        Image: form,
        Description: "Single Page Applications with complex forms"
    },
    {
        Image: football,
        Description: "A leaderboard for football betting competitions with data aggregated from several sources using web scraping"
    },
    {
        Image: stocks,
        Description: "Cross-platform graphical utilities to perform business calculations"
    },
    {
        Image: psychrometrics,
        Description: "Complex data visualizations such as this plot of psychrometric processes"
    },
    {
        Image: truck,
        Description: "A Point of Sale advertising tool for a truck dealership"
    },
    {
        Image: map,
        Description: "A custom map showing the location of various truck dealerships and technical colleges in Wisconsin"
    },
    {
        Image: noteduino,
        Description: "A microcontroller powered music player complete with a touchscreen interface"
    },
    {
        Image: CAD,
        Description: "Macros to automate complex business processes involving CAD, Excel, and ERP software"
    },
    {
        Image: kensaku,
        Description: "検索 (kensaku) - A command line tool that facilitates searching for kanji using mnemonic devices for their constituent radicals"
    }
];

function Projects() {
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = projects.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <Box maxWidth="100%">
            <Typography
                variant="h4"
                textAlign="center"
                marginBottom={1}
            >
                Projects
            </Typography>
            <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
                <SwipeableViews
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                    animateHeight
                >
                    {projects.map((project, i) => (
                        <Card
                            key={i}
                            sx={{
                                width: 800,
                                minWidth: "min(300px, 100vw)",
                                maxWidth: "min(800px, 100%)"

                            }}
                        >
                            <CardMedia
                                image={project.Image}
                                sx={{
                                    height: 0,
                                    paddingTop: "56.25%", // 16:9
                                    backgroundSize: "contain"
                                }}
                            />
                            <CardContent sx={{ textAlign: "center" }}>
                                <Typography variant="caption">
                                    {project.Description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </SwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            <KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            onClick={handleBack}
                            disabled={activeStep === 0}
                        >
                            <KeyboardArrowLeft />
                            Back
                        </Button>
                    }
                />
            </Box>
        </Box>
    );
}

export default Projects;
