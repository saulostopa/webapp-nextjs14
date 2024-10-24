import './Carousel.css';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
// Carousel slider for product
import Slider from 'react-slick';

// fetch product
import { fetchProducts } from '@/store/apps/eCommerce/ECommerceSlice';
import { useDispatch, useSelector } from '@/store/hooks';

import type { ProductType } from '../../../../types/apps/eCommerce';
// Carousel slider data
import SliderData from './SliderData';

const ProductCarousel = () => {
  const [state, setState] = React.useState<any>({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();
  const dispatch = useDispatch();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const getTitle: string | any = pathName.split('/').pop();

  // Get Product
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, pathName, searchParams]);

  // Get Products
  const product: ProductType = useSelector(
    (state) => state.ecommerceReducer.products[getTitle - 1],
  );
  const getProductImage = product ? product.photo : '';
  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  const { nav1, nav2 } = state;
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 5,
    arrows: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    centerMode: true,
    className: 'centerThumb',
    speed: 500,
  };

  return (
    <Box>
      <Slider asNavFor={nav2} ref={(slider: any) => (slider1.current = slider)}>
        <Box>
          <Avatar
            src={getProductImage}
            style={{ borderRadius: '9px', width: '100%', height: '500px' }}
          />
        </Box>
        {SliderData.map((step) => (
          <Box key={step.id}>
            <Avatar
              src={step.imgPath}
              style={{ borderRadius: '5px', width: '100%', height: '500px' }}
            />
          </Box>
        ))}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider: any) => (slider2.current = slider)}
        {...settings}
      >
        <Box sx={{ p: 1, cursor: 'pointer' }}>
          <Avatar
            src={getProductImage}
            style={{ borderRadius: '5px', width: '72px', height: '72px' }}
          />
        </Box>
        {SliderData.map((step) => (
          <Box key={step.id} sx={{ p: 1, cursor: 'pointer' }}>
            <Avatar
              src={step.imgPath}
              style={{ borderRadius: '5px', width: '72px', height: '72px' }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductCarousel;
