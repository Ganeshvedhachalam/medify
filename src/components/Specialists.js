import SpecialistCard from "./SpecialistCard";
import React from "react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/ankur.png"
import img2 from "../assets/ahmad-stevens.png"
import img3 from "../assets/ahmad.png"
import img4 from "../assets/lesley.png"
import img5 from "../assets/heena.png"
import { Box, Container, Typography } from "@mui/material";


export function Specialists( ){
    const datas = [
        { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
        { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
        { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
        { img: img5, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' },
        { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
        { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
        { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
        { img: img5, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' }
    ]

    
  


    return(
        <>
          <Box py={8} >
        <Container container maxWidth="xl" >
        <Typography variant="h2" textAlign='center' mb={3} px={2}>
        Our Medical Specialist
         </Typography>

            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            modules={[ Autoplay, Pagination]}
            autoplay={{delay:3000,
                disableOnInteraction:false
            }}
            pagination={{ clickable: true}}
            breakpoints={{
                767:{slidesPerView:4},
                1000:{slidesPerView:5}
            }}
            >
              {datas.map((doc,index)=><SwiperSlide key={index}>
                <SpecialistCard img={doc.img} title={doc.title} designation={doc.designation}>  
                </SpecialistCard></SwiperSlide> )}
                                </Swiper>

        </Container>
    </Box>
        </>
    )
}