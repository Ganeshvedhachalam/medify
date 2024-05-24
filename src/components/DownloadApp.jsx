import React from "react";
import Mobile from "../assets/mobile.jpg"
import playstore from "../assets/playstore.png"
import apple from "../assets/apple-logo.png"
import  arrow from "../assets/down-arr.png"
import { Box, Container, Grid, Typography } from "@mui/material";
import { CenterFocusStrong } from "@mui/icons-material";
import { SmsForm } from "./SmsForm";


export function DownloadApp(){

return (
    <Box sx={{background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 5 }}>
      <Container maxWidth="xl">
        <Grid container spacing={3} alignItems={"center"} p={3}>
        <Grid item xs={12} md={5.5}>
            <Box src={Mobile} component="img" width={1} height="auto" />
          </Grid>

          <Grid item xs={12} md={6.5}>
            <Box
              position="relative"
              pl={{ xs: "36px", md: "50px" }}
              mb={{ xs: 4, md: 0 }}
            >
              <Typography variant="h2" mb={2}>
                Download the
                <br />
                <Box component="span" color="primary.main">
                  Medify{" "}
                </Box>
                App
              </Typography>

              <Box
                src={arrow}
                component="img"
                width={{ xs: 24, md: 40 }}
                position="absolute"
                left={0}
                top={50}
              />

              <SmsForm />

        

                </Box>
            </Grid>

        </Grid>
        
      </Container>


    </Box>
)

}