import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Sanjay Thakre',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, tempora omnis! Dicta, in ullam. Eos labore iure natus tenetur molestiae consequatur officia. Odio alias cum saepe reprehenderit fugit doloribus mollitia provident ullam a, voluptatum quasi nihil unde, facilis impedit qui illo. Expedita nostrum illum eaque recusandae natus ad odit molestias?'
  },
  {
    avatar: AVTR2,
    name: 'Aditya Yadav',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque alias eveniet reprehenderit? Sapiente at officiis, debitis fuga veniam a sed enim temporibus repellendus. Totam ut corrupti sapiente nesciunt sunt neque architecto velit. Quos, quo necessitatibus!'
  },
  {
    avatar: AVTR3,
    name: 'Rahul Verma',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi saepe eligendi repudiandae iste nobis sed ex! Provident deserunt totam magnam?'
  },
  {
    avatar: AVTR4,
    name: 'Vishal Butolia',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad repellat, ullam eaque asperiores expedita aliquam atque eligendi iusto vero laboriosam amet sequi blanditiis quia voluptatum doloremque! Corporis, eius!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination,]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index}      className='testimonial'>
               <div className="client__avatar">
                <img src={avatar} />
               </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
               {review}
              </small>
             </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
