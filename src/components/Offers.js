
import { Box, Container } from "@mui/material"
import offer1 from "../assets/offer1.png"
import offer2 from "../assets/offer2.png"
import React from "react"
import { Pagination } from "swiper/modules"
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";



export function  Offers( ){

    
  


    return(
        <>
          <Box py={8} >
        <Container container maxWidth="xl" >
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true}}
            breakpoints={{
                767:{slidesPerView:2},
                1000:{slidesPerView:3}
            }}
            >
                 <SwiperSlide>
                        <Box component={'img'} src={offer1} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={offer2} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={offer1} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={offer2} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={offer1} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={offer2} />
                    </SwiperSlide>


            </Swiper>

        </Container>
    </Box>
        </>
    )
}