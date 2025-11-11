import { styled } from '@mui/material/styles';
import palette from './palates';
import Slider from "react-slick";

const StyledSlider = styled(Slider)(({ theme }) => ({
  '& .slick-prev:before, & .slick-next:before': {
    color: palette.primary.main,
    fontSize: '30px',
  },
  '& .slick-dots': {
    bottom: '-40px',
  },
  '& .slick-dots li button:before': {
    fontSize: '12px',
    color: palette.primary.main,
    opacity: 0.5,
  },
  '& .slick-dots li.slick-active button:before': {
    color: palette.primary.main,
    opacity: 1,
  },
  '& .slick-prev': {
    left: '-40px',
    zIndex: 1,
  },
  '& .slick-next': {
    right: '-40px',
  },
}));

export default StyledSlider;