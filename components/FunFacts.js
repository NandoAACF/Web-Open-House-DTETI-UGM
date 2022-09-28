import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import parse from 'html-react-parser'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import funfacts from './funfacts.json'

// TODO: Dynamic Pagination
export default function FunFacts() {
  return (
    <section>
      <h2 className="text-center px-5 mx-auto font-Poppins font-semibold text-[#93DDDE] text-[35px] md:text-[45px] max-w-[630px]">
        Some random fun facts about our department
      </h2>
      <div className="overflow-x-hidden max-w-5xl mx-auto mt-10 mb-20 border-4 sm:border-8 border-[#2FA4FF] rounded-[40px]  bg-gray-100">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination
          className="max-w-4xl"
        >
          {funfacts['funfacts'].map((funfact) => {
            return (
              <SwiperSlide className="min-h-[500px] p-5 flex items-center justify-center">
                <div className="cursor-grab text-center">
                  <h2 className="text-3xl font-Josefin font-semibold mb-5">
                    {funfact.title || 'About DTETI'}
                  </h2>
                  <div className="font-Poppins max-w-xl text-lg">
                    {parse(funfact.desc)}
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}