import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from "react";
import { cyan } from "@mui/material/colors";


function Footer(){
    return (
        <>
         <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#E91E63", height: "140px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ fontSize: 15, color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box>
                        <Box display="flex" alignItems="center" justifyContent="center" margin="rem" padding="rem">
                            <a href="https://github.com/thaismelim" target="_blank">
                                <GitHubIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                            <a href="https://www.instagram.com/thacr.melim/" target="_blank">
                                <InstagramIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/thais-cristina-melim/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                            </Box>
                            <Box> 
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Thais Melim</Typography>
                                <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 Copyright</Typography>
                        </Box>
                    </Box>
                    </Box>
                </Grid>
            </Grid>
        </>

    )
}

export default Footer;