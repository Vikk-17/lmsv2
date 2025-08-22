import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import WatchingCourse from "../cards/WatchingCourse";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Custom arrows
const PrevArrow = ({ onClick }) => (
  <button
    className="p-2 ml-2 rounded-full bg-[var(--clr-accent-900)] hover:bg-[var(--clr-primary-900)]"
    onClick={onClick}
  >
    <FaArrowLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="p-2 ml-2 rounded-full bg-[var(--clr-accent-900)] hover:bg-[var(--clr-primary-900)]"
    onClick={onClick}
  >
    <FaArrowRight />
  </button>
);

const CoursesCarousel = () => {
  const courses = [
    {
      id: 1,
      title: "Advance UI/UX Design",
      category: "Design",
      lessons: "18/40",
      hoursLeft: "6 hours left",
      progress: 60,
    },
    {
      id: 2,
      title: "JavaScript Essentials",
      category: "Development",
      lessons: "25/50",
      hoursLeft: "10 hours left",
      progress: 50,
    },
    {
      id: 3,
      title: "Digital Marketing Basics",
      category: "Marketing",
      lessons: "10/30",
      hoursLeft: "8 hours left",
      progress: 33,
    },
    {
      id: 4,
      title: "Data Analysis Python",
      category: "Data Science",
      lessons: "15/35",
      hoursLeft: "5 hours left",
      progress: 43,
    },
    {
      id: 5,
      title: "Intro to Cybersecurity",
      category: "Security",
      lessons: "12/20",
      hoursLeft: "3 hours left",
      progress: 60,
    },
    {
      id: 6,
      title: "3D Animation Funda..",
      category: "Design",
      lessons: "20/40",
      hoursLeft: "7 hours left",
      progress: 50,
    },
  ];


  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    variableWidth: true,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-8 relative">
      {/* Header with Title and Arrows */}
      <div className="flex justify-between items-center mb-5">
        <h5 className="">Continue Watching</h5>
        <div className="flex items-center">
          <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current?.slickNext()} />
        </div>
      </div>

      {/* Slick Carousel */}
      <Slider {...settings} ref={sliderRef} >
        {courses.map((course) => (
          <div key={course.id} className="">
            <WatchingCourse course={course} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CoursesCarousel;
