// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import Slider from '../Slider/slider';
import { useEffect, useState } from 'react';
import { getProductsBySubCategoryId } from '../../firestore/firestore';
import { ProductCard } from './../Cards/ProductCard';
import { useContext } from 'react';
import { langContext } from '../../contexts/lang';

const ProductSlider = ({ subCategoryId, title }) => {
  const [data, setData] = useState([]);
  const { lang } = useContext(langContext);

  useEffect(() => {
    async function fetch() {
      const res = await getProductsBySubCategoryId(subCategoryId);
      setData(res);
    }
    fetch();
  }, []);
  return (
    <>
      <Slider title={title}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {data.map(slide => {
            return (
              <SwiperSlide className="cursor-pointer" key={slide.id}>
                <ProductCard
                  id={slide.id}
                  name={slide[lang].title}
                  image={slide.thumbnail}
                  description={slide[lang].description}
                  price={slide.price}
                  rate={slide.rating}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Slider>
    </>
  );
};
export default ProductSlider;
