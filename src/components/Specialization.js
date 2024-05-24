import { IconCard } from "./IconCard";
import { Box, Typography, Grid, Stack, Container, Button } from "@mui/material";
import React  ,{useMemo}from "react";
import icon1 from '../assets/Drugstore.png'
import icon2 from '../assets/primary-care.png'
import icon3 from '../assets/cardiology.png'
import icon4 from '../assets/mri.png'
import icon5 from '../assets/blood-test.png'
import icon6 from '../assets/piscologist.png'
import icon7 from '../assets/X-Ray.png'



export function Specialization (){
    const datas = useMemo(() => [
        {img:icon1,title:"Dentistry"},
        {img:icon2,title:"Primary Care"}, 
        {img:icon3,title:"Cardiology" ,active:true}, 
        {img:icon4,title:"MRI Resonance"},  
        {img:icon5,title:"Blood Test "},
        {img:icon6,title:"Piscology"},  
        {img:icon7,title:"X-ray"},


    ], [])

    return <>
   <Box py={6} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
    <Container maxWidth="xl" sx={{textAlign:"center"}}>
    <Typography mb={2}variant="h2"
    //  fontSize={50} fontWeight={500}
      textAlign={"center"} 
    >
        Find by specialisation
    </Typography>


   
   <Grid container   mb={2} columnSpacing={{ xs: 1, md: 1 }} spacing={{xs:"2" ,md :3}} justifyContent={"center"}>
    {datas.map((service)=>
    <Grid key={service.title} p={2} item xs="4" md ="3"  >
         <IconCard img={service.img} title={service.title}  shadow={true} /> </Grid >

    )}

     
   </Grid>        
      <Button
                    variant="contained"
                    size="large"
                    disableElevation >
                
                    View All
                   </Button>
    </Container>
                

    
   </Box>
    </>
}