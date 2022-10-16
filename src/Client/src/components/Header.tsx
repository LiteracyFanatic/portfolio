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

interface Link {
    Label: string
    Href: string
}

const links: Link[] = [
    {
        Label: "About",
        Href: "#about"
    },
    {
        Label: "Projects",
        Href: "#projects"
    },
    {
        Label: "Skills",
        Href: "#skills"
    },
    {
        Label: "Links",
        Href: "#links"
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
                                key={link.Href}
                                color="inherit"
                                href={link.Href}
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
                                key={link.Href}
                                component="a"
                                href={link.Href}
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
