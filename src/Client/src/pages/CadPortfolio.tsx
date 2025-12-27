import { Close, KeyboardArrowLeft, KeyboardArrowRight, KeyboardArrowUp } from "@mui/icons-material";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Dialog,
    DialogContent,
    DialogTitle,
    Fab,
    Fade,
    Grid,
    IconButton,
    Stack,
    Typography,
    useScrollTrigger,
    Zoom
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

import gumbyInSuit from "../assets/CAD/Gumby/gumby-in-suit.png";
import planetaryGearAssembly from "../assets/CAD/PlanetaryGears/planetary-gear-assembly.png";
import toyPlow from "../assets/CAD/ToyPlow/toy-plow-render.png";
import woodenBoxCrownInlay from "../assets/CAD/Box/wooden-box-crown-inlay.png";
import unicornHead from "../assets/CAD/Unicorn/unicorn-head.png";
import unicornHeadWallMountPhoto from "../assets/CAD/Unicorn/unicorn-head-wall-mount-render.png";
import unicornHeadTSplineEdit from "../assets/CAD/Unicorn/unicorn-head-t-spline-edit.png";
import unicornHeadSliceLayers from "../assets/CAD/Unicorn/unicorn-head-slice-layers.png";
import blueToyHelicopterRender from "../assets/CAD/Helicopter/blue-toy-helicopter-render.png";
import autodeskCamKeychainRender from "../assets/CAD/KeyChain/autodesk-cam-keychain-render.png";
import keychainOnKeyringPhoto from "../assets/CAD/KeyChain/keychain-on-keyring-photo.png";
import cadLoftedSolidSketch from "../assets/CAD/SoccerBall/soccer-ball-lofted-solid-sketch.png";
import cadRevolveIntersectSphere from "../assets/CAD/SoccerBall/soccer-ball-revolve-intersect.png";
import woodenBulldozerFront from "../assets/CAD/ToyPlow/toy-plow-front.png";
import woodenBulldozerSide from "../assets/CAD/ToyPlow/toy-plow-side.png";
import dnaDoubleHelixModel from "../assets/CAD/DNA/dna-double-helix-model.png";
import hammerCadRender from "../assets/CAD/Hammer/hammer-cad-render.png";
import hammerPhoto from "../assets/CAD/Hammer/hammer-photo.png";
import towerOfHanoiWoodenRender from "../assets/CAD/WoodenPuzzle/tower-of-hanoi-wooden-render.png";
import wallSconceFrostedGlobe from "../assets/CAD/Light/light-render.png";
import wallSconceSmokedGlobe from "../assets/CAD/Light/light-model.png";
import pneumaticCannonAssembly from "../assets/CAD/PneumaticCannon/pneumatic-cannon-assembly.png";
import displayBoard3dModel from "../assets/CAD/DisplayBoard/display-board-3d-model.png";
import displayBoardTechnicalDrawing from "../assets/CAD/DisplayBoard/display-board-technical-drawing.png";
import modernFountainConcept from "../assets/CAD/Fountain/fountain.png";
import soccerBallRender from "../assets/CAD/SoccerBall/soccer-ball-render.png";
import soccerBallCutaway from "../assets/CAD/SoccerBall/soccer-ball-cutaway.png";

const software = [
    {
        name: "Autodesk Inventor",
    },
    {
        name: "AutoCAD",
    },
    {
        name: "Civil 3D",
    },
    {
        name: "Autodesk Fusion 360"
    },
    {
        name: "SolidWorks",
    },
    {
        name: "Onshape"
    }
];

const projects = [
    {
        title: "Toy Helicopter",
        description: "A reversed-engineered toy helicopter model.",
        images: [blueToyHelicopterRender]
    },
    {
        title: "Planetary Gear Assembly",
        description: "Gears!!!",
        images: [planetaryGearAssembly]
    },
    {
        title: "Unicorn Head",
        description: "3D sculpture built from slotted layers.",
        cover: unicornHeadSliceLayers,
        images: [
            unicornHeadTSplineEdit,
            unicornHeadWallMountPhoto,
            unicornHeadSliceLayers,
            unicornHead
        ]
    },
    {
        title: "Autodesk CAM Keychain",
        description: "Reverse-engineered model of Autodesk logo keychain from IMTS demo of Fusion360.",
        images: [autodeskCamKeychainRender, keychainOnKeyringPhoto]
    },
    {
        title: "Modern Fountain",
        description: "Curved fountain form with a slatted water surface.",
        images: [modernFountainConcept]
    },
    {
        title: "Soccer Ball",
        description: "Render, cutaway, and construction sketches for the ball.",
        cover: soccerBallRender,
        images: [
            cadLoftedSolidSketch,
            cadRevolveIntersectSphere,
            soccerBallCutaway,
            soccerBallRender
        ]
    },
    {
        title: "Toy Plow",
        description: "Reverse-engineered wooden toy.",
        images: [toyPlow, woodenBulldozerFront, woodenBulldozerSide]
    },
    {
        title: "Pneumatic Cannon",
        description: "Pneumatic cannon designed and built as part of a kinematics study.",
        images: [pneumaticCannonAssembly]
    },
    {
        title: "Light fixture",
        description: "Light fixture with render and model views.",
        images: [wallSconceFrostedGlobe, wallSconceSmokedGlobe]
    },
    {
        title: "Tower of Hanoi",
        description: "Wooden puzzle with stacked rings.",
        images: [towerOfHanoiWoodenRender]
    },
    {
        title: "Crown Inlay Deck Box",
        description: "Wood box with a recessed lid emblem and inset display window.",
        images: [woodenBoxCrownInlay]
    },
    {
        title: "Gumby",
        description: "Stylized character model with a suit and tie pose.",
        images: [gumbyInSuit]
    },
    {
        title: "DNA Double Helix",
        description: "Stacked base pairs with support posts forming a helix.",
        images: [dnaDoubleHelixModel]
    },
    {
        title: "Machined Hammer",
        description: "Hammer with a chamfered head and knurled grip.",
        images: [hammerCadRender, hammerPhoto]
    },
    {
        title: "Display Board",
        description: "3D model and technical drawing for a club display board.",
        images: [displayBoard3dModel, displayBoardTechnicalDrawing]
    },
];

function CadPortfolio() {
    const trigger = useScrollTrigger({ disableHysteresis: true });
    const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const touchStartY = useRef<number | null>(null);

    const handleClose = () => {
        setActiveProject(null);
        setActiveIndex(0);
    };

    const handleOpen = (project: (typeof projects)[number]) => {
        setActiveProject(project);
        setActiveIndex(0);
    };

    const handlePrevious = () => {
        if (!activeProject) {
            return;
        }
        setActiveIndex((current) => Math.max(0, current - 1));
    };

    const handleNext = () => {
        if (!activeProject) {
            return;
        }
        setActiveIndex((current) => Math.min(activeProject.images.length - 1, current + 1));
    };

    useEffect(() => {
        if (!activeProject) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                setActiveIndex((current) => Math.max(0, current - 1));
                return;
            }

            if (event.key === "ArrowRight") {
                event.preventDefault();
                setActiveIndex((current) => Math.min(activeProject.images.length - 1, current + 1));
                return;
            }

            if (event.key === "Escape") {
                event.preventDefault();
                handleClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [activeProject]);

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        const touch = event.touches[0];
        touchStartX.current = touch.clientX;
        touchStartY.current = touch.clientY;
    };

    const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        if (touchStartX.current === null || touchStartY.current === null) {
            return;
        }

        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - touchStartX.current;
        const deltaY = touch.clientY - touchStartY.current;
        const swipeThreshold = 50;

        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > swipeThreshold) {
            if (deltaX > 0) {
                handlePrevious();
            } else {
                handleNext();
            }
        }

        touchStartX.current = null;
        touchStartY.current = null;
    };

    return (
        <>
            <Container maxWidth="lg" sx={{ marginY: 6 }}>
            <Stack spacing={4}>
                <Stack spacing={1}>
                    <Typography variant="h3" component="h1">
                        CAD Portfolio
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        I am a skilled CAD operator with experience in both 2D drafting and 3D paramteric modeling workflows. I also develop plugins and standalone tools to help clients streamline various CAD-related tasks, such as:
                        <ul>
                            <li>Automating engineering calculations</li>
                            <li>Constrained optimization tasks</li>
                            <li>Bulk repair of invalid DXF profiles</li>
                        </ul>
                    </Typography>
                </Stack>
                <Stack spacing={2}>
                    <Typography variant="h5" component="h2">
                        CAD Software
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {software.map(tool => (
                            <Chip
                                key={tool.name}
                                label={tool.name}
                                color="default"
                            />
                        ))}
                    </Stack>
                </Stack>
                <Stack spacing={2}>
                    <Typography variant="h5" component="h2">
                        Project Gallery
                    </Typography>
                    <Grid container spacing={3}>
                        {projects.map(project => (
                            <Grid key={project.title} size={{
                                xs: 12,
                                sm: 6,
                                md: 4
                            }}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column"
                                    }}
                                >
                                <CardActionArea
                                        onClick={() => handleOpen(project)}
                                        sx={{ height: "100%" }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={project.cover ?? project.images[0]}
                                            alt={project.title}
                                            sx={{
                                                height: 200,
                                                objectFit: "cover"
                                            }}
                                        />
                                        <CardContent>
                                            <Stack spacing={1}>
                                                <Stack
                                                    direction="row"
                                                    justifyContent="space-between"
                                                    alignItems="center"
                                                    spacing={1}
                                                >
                                                    <Typography variant="h6" component="h3">
                                                        {project.title}
                                                    </Typography>
                                                    <Chip
                                                        label={`${project.images.length} image${project.images.length === 1 ? "" : "s"}`}
                                                        size="small"
                                                        color="secondary"
                                                    />
                                                </Stack>
                                                <Typography variant="body2" color="text.secondary">
                                                    {project.description}
                                                </Typography>
                                            </Stack>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </Stack>
            <Dialog
                open={Boolean(activeProject)}
                onClose={handleClose}
                fullScreen
                PaperProps={{
                    sx: {
                        backgroundColor: "common.black",
                        color: "common.white"
                    }
                }}
            >
                {activeProject ? (
                    <>
                        <DialogTitle
                            component="div"
                            sx={{
                                pr: 8,
                                display: "flex",
                                flexDirection: "column",
                                gap: 0.5
                            }}
                        >
                            <Typography variant="h5" component="h2">
                                {activeProject.title}
                            </Typography>
                            <Typography variant="body2" color="grey.400">
                                {activeProject.description}
                            </Typography>
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={{
                                    position: "absolute",
                                    right: 16,
                                    top: 16,
                                    color: "common.white"
                                }}
                            >
                                <Close />
                            </IconButton>
                        </DialogTitle>
                        <DialogContent
                            sx={{
                                px: { xs: 2, sm: 6 },
                                pb: { xs: 3, sm: 5 },
                                pt: 2,
                                backgroundColor: "common.black"
                            }}
                        >
                            {(() => {
                                const hasPrevious = activeIndex > 0;
                                const hasNext =
                                    activeProject.images.length > 0 &&
                                    activeIndex < activeProject.images.length - 1;

                                return (
                            <Stack spacing={3} alignItems="center">
                                <Box
                                    sx={{
                                        position: "relative",
                                        width: "100%",
                                        maxWidth: 1200,
                                        aspectRatio: { xs: "4 / 3", md: "16 / 9" },
                                        backgroundColor: "common.black",
                                        borderRadius: 3,
                                        overflow: "hidden",
                                        touchAction: "pan-y"
                                    }}
                                    onTouchStart={handleTouchStart}
                                    onTouchEnd={handleTouchEnd}
                                >
                                    <IconButton
                                        aria-label="previous image"
                                        onClick={handlePrevious}
                                        disabled={!hasPrevious}
                                        sx={{
                                            position: "absolute",
                                            left: 16,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            zIndex: 1,
                                            backgroundColor: "rgba(255, 255, 255, 0.18)",
                                            color: "common.white",
                                            "&:hover": {
                                                backgroundColor: "rgba(255, 255, 255, 0.3)"
                                            },
                                            "&.Mui-disabled": {
                                                backgroundColor: "rgba(255, 255, 255, 0.08)",
                                                color: "rgba(255, 255, 255, 0.35)"
                                            }
                                        }}
                                    >
                                        <KeyboardArrowLeft fontSize="large" />
                                    </IconButton>
                                    <IconButton
                                        aria-label="next image"
                                        onClick={handleNext}
                                        disabled={!hasNext}
                                        sx={{
                                            position: "absolute",
                                            right: 16,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            zIndex: 1,
                                            backgroundColor: "rgba(255, 255, 255, 0.18)",
                                            color: "common.white",
                                            "&:hover": {
                                                backgroundColor: "rgba(255, 255, 255, 0.3)"
                                            },
                                            "&.Mui-disabled": {
                                                backgroundColor: "rgba(255, 255, 255, 0.08)",
                                                color: "rgba(255, 255, 255, 0.35)"
                                            }
                                        }}
                                    >
                                        <KeyboardArrowRight fontSize="large" />
                                    </IconButton>
                                    <Fade in key={activeProject.images[activeIndex]} timeout={350}>
                                        <Box
                                            component="img"
                                            src={activeProject.images[activeIndex]}
                                            alt={`${activeProject.title} ${activeIndex + 1}`}
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "contain",
                                                backgroundColor: "common.black"
                                            }}
                                        />
                                    </Fade>
                                </Box>
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    flexWrap="wrap"
                                    justifyContent="center"
                                    sx={{ rowGap: 1 }}
                                >
                                    {activeProject.images.map((image, index) => (
                                        <Box
                                            key={`${activeProject.title}-thumb-${index}`}
                                            component="button"
                                            type="button"
                                            onClick={() => setActiveIndex(index)}
                                            sx={{
                                                border: 0,
                                                padding: 0,
                                                background: "none",
                                                cursor: "pointer",
                                                borderRadius: 2,
                                                outline: index === activeIndex ? "2px solid" : "2px solid transparent",
                                                outlineColor: index === activeIndex ? "primary.main" : "transparent"
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={image}
                                                alt={`${activeProject.title} thumbnail ${index + 1}`}
                                                sx={{
                                                    width: 96,
                                                    height: 64,
                                                    objectFit: "cover",
                                                    borderRadius: 2,
                                                    display: "block",
                                                    filter: index === activeIndex ? "none" : "brightness(0.8)"
                                                }}
                                            />
                                        </Box>
                                    ))}
                                </Stack>
                                <Typography variant="caption" color="grey.400">
                                    {activeIndex + 1} of {activeProject.images.length}
                                </Typography>
                            </Stack>
                                );
                            })()}
                        </DialogContent>
                    </>
                ) : null}
            </Dialog>
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

export default CadPortfolio;
