import { Menu as MenuIcon } from "@mui/icons-material";
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

interface Link {
    Label: string
    To: string
}

const links: Link[] = [
    {
        Label: "About",
        To: "/#about"
    },
    {
        Label: "Projects",
        To: "/#projects"
    },
    {
        Label: "Skills",
        To: "/#skills"
    },
    {
        Label: "Links",
        To: "/#links"
    },
    {
        Label: "CAD",
        To: "/cad"
    }
];

function Header() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    return (
        <Box>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Jordan Cannon
                    </Typography>
                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                sm: "block"
                            }
                        }}
                    >
                        {links.map(link => (
                            <Button
                                key={link.To}
                                color="inherit"
                                component={RouterLink}
                                to={link.To}
                            >
                                {link.Label}
                            </Button>
                        ))}
                    </Box>
                    <IconButton
                        color="inherit"
                        onClick={e => setAnchorEl(e.currentTarget)}
                        sx={{
                            display: {
                                sm: "none"
                            }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={() => setAnchorEl(null)}
                    >
                        {links.map(link => (
                            <MenuItem
                                key={link.To}
                                component={RouterLink}
                                to={link.To}
                                onClick={() => setAnchorEl(null)}
                            >
                                {link.Label}
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}

export default Header;
