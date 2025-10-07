import { BarChart, Language } from "@mui/icons-material";
import { Box, Chip, SvgIcon, Typography } from "@mui/material";
import Bash from "devicon/icons/bash/bash-original.svg?react";
import CSharp from "devicon/icons/csharp/csharp-original.svg?react";
import DotNetCore from "devicon/icons/dotnetcore/dotnetcore-original.svg?react";
import FSharp from "devicon/icons/fsharp/fsharp-original.svg?react";
import Git from "devicon/icons/git/git-original.svg?react";
import JavaScript from "devicon/icons/javascript/javascript-original.svg?react";
import Linux from "devicon/icons/linux/linux-original.svg?react";
import MuiIcon from "devicon/icons/materialui/materialui-original.svg?react";
import Matlab from "devicon/icons/matlab/matlab-original.svg?react";
import Sql from "devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg?react";
import ReactIcon from "devicon/icons/react/react-original.svg?react";
import TypeScript from "devicon/icons/typescript/typescript-original.svg?react";
import Windows from "devicon/icons/windows8/windows8-original.svg?react";
import NestJS from "devicon/icons/nestjs/nestjs-original.svg?react";
import Postgresql from "devicon/icons/postgresql/postgresql-original.svg?react";
import AWS from "devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg?react";
import PowerShell from "devicon/icons/powershell/powershell-original.svg?react";
import { ReactElement } from "react";


interface Skill {
    Name: string
    Icon?: ReactElement
}

const programmingLanguages: Skill[] = [
    {
        Name: "C#",
        Icon: <SvgIcon>
            <CSharp />
        </SvgIcon>
    },
    {
        Name: "F#",
        Icon: <SvgIcon>
            <FSharp />
        </SvgIcon>
    },
    {
        Name: "JavaScript",
        Icon: <SvgIcon>
            <JavaScript />
        </SvgIcon>
    },
    {
        Name: "TypeScript",
        Icon: <SvgIcon>
            <TypeScript />
        </SvgIcon>
    },
    {
        Name: "SQL",
        Icon: <SvgIcon>
            <Sql />
        </SvgIcon>
    },
    {
        Name: "Bash",
        Icon: <SvgIcon>
            <Bash />
        </SvgIcon>
    },
    {
        Name: "PowerShell",
        Icon: <SvgIcon sx={{ marginTop: "6px" }}>
            <PowerShell />
        </SvgIcon>
    },
    {
        Name: "MATLAB",
        Icon: <SvgIcon>
            <Matlab />
        </SvgIcon>
    }
];

const technologies: Skill[] = [
    {
        Name: ".NET Core",
        Icon: <SvgIcon>
            <DotNetCore />
        </SvgIcon>
    },
    {
        Name: "ASP.NET Core",
        Icon: <SvgIcon>
            <DotNetCore />
        </SvgIcon>
    },
    {
        Name: "SQL Server",
        Icon: <SvgIcon>
            <Sql />
        </SvgIcon>
    },
    {
        Name: "React",
        Icon: <SvgIcon>
            <ReactIcon />
        </SvgIcon>
    },
    {
        Name: "MUI",
        Icon: <SvgIcon>
            <MuiIcon />
        </SvgIcon>
    },
    {
        Name: "Git",
        Icon: <SvgIcon>
            <Git />
        </SvgIcon>
    },
    {
        Name: "Web Scraping",
        Icon: <Language />
    },
    {
        Name: "Data Visualization",
        Icon: <BarChart />
    },
    {
        Name: "Linux",
        Icon: <SvgIcon>
            <Linux />
        </SvgIcon>
    },
    {
        Name: "Windows",
        Icon: <SvgIcon>
            <Windows />
        </SvgIcon>
    },
    {
        Name: "Nest.JS",
        Icon: <SvgIcon>
            <NestJS />
        </SvgIcon>
    },
    {
        Name: "PostgreSQL",
        Icon: <SvgIcon>
            <Postgresql />
        </SvgIcon>
    },
    {
        Name: "AWS",
        Icon: <SvgIcon>
            <AWS />
        </SvgIcon>
    }
];

function Skills() {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 2
                }}
            >
                <Typography
                    variant="h4"
                    textAlign="center"
                >
                    Skills
                </Typography>
                <Typography
                    variant="h5"
                    textAlign="center"
                >
                    Programming Languages
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 1
                    }}
                >
                    {programmingLanguages.map(skill => (
                        <Chip
                            key={skill.Name}
                            label={skill.Name}
                            icon={skill.Icon}
                            sx={{
                                paddingX: 1
                            }}
                        />
                    ))}
                </Box>
                <Typography
                    variant="h5"
                    textAlign="center"
                >
                    Technologies
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 1
                    }}
                >
                    {technologies.map(skill => (
                        <Chip
                            key={skill.Name}
                            label={skill.Name}
                            icon={skill.Icon}
                            sx={{
                                paddingX: 1
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Skills;
