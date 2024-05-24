import { Box, Typography, Grid, Stack } from "@mui/material";
export function IconCard ( {img,title,active=false,bgcolor ,shadow}) {

    return (
    <>
       <Stack 
         bgcolor={active ? "rgba(42,167,255,0.08)" : "white"}
         border={active? `1px solid #22aaff  ` : "white"}
         borderRadius={2}
         alignItems="center"
         spacing={2}
         p={4}
         boxShadow={shadow ? "0 0 24px rgba(0,0,0,0.09)" : "none"}
       >
        <Box component="img" src={img} height={60} width={60} >
        </Box>
        <Typography  mt={2}   fontSize={18}
         fontWeight={active ? 600 : 400}   color={active ? "primary.main" : "#ABB6C7"} >{title}</Typography>
    </Stack>
     </>
    )


}