import { Box, Typography, Grid, Stack } from "@mui/material";
import React  ,{useMemo}from "react";
import doctoricon from "../assets/Doctor.png"
import pharmacyIcon from "../assets/Drugstore.png";
import hospitalIcon from "../assets/Hospital.png";
import capsuleIcon from "../assets/Capsule.png";
import ambulanceIcon from "../assets/Ambulance.png";
import { blue } from "@mui/material/colors";

import { IconCard } from "./IconCard";

export function HeroServices (){
    const services = useMemo(() => [
        {img:doctoricon,title:"Doctors"},
        {img:pharmacyIcon,title:"Labs"}, 
        {img:hospitalIcon,title:"Hospitals" ,active:true}, 
        {img:capsuleIcon,title:"Medical Store"},  
        {img:ambulanceIcon,title:"Ambulance "},

    ], [])

    return <>
   <Box>

    <Typography  component= "h2"color={"black"}
        fontSize={35} fontWeight={500} textAlign={"center"} 
    >
        You May Look For
    </Typography>

   </Box>
   <Grid container    columnSpacing={{ xs: 1, md: 2 }} spacing={{xs:"2" ,md :"3"}} justifyContent={"center"}>
    {services.map((service)=>
    <Grid key={service.title} item xs="4" md ="2.4"  > <IconCard img={service.img} title={service.title} active={service.active||false} /> </Grid >

    )}

     
   </Grid>
    </>
}