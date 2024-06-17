export const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
  ],
};

type sliderArrowProps = {
  className: string;
  style: string;
  onClick: Function;
};

// export function SampleNextArrow({ className, style, onClick }:sliderArrowProps)  {
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// export function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }
