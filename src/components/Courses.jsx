import React from 'react';
import './Courses.css';

const courses = [
  {
    price: "$60.00",
    oldPrice: "$90.00",
    title: "English Speaking with conversation british",
    reviews: "4.5k Reviews",
  },
  {
    price: "$64.00",
    oldPrice: "$90.00",
    title: "Algorima Math aljabar, geometri aritmatika",
    reviews: "4.5k Reviews",
  },
  {
    price: "$99.00",
    oldPrice: "$90.00",
    title: "Child's Sensory and Motor Development",
    reviews: "4.5k Reviews",
  },
  {
    price: "$60.00",
    oldPrice: "$90.00",
    title: "iOS & Swift - The Complete iOS App Development",
    reviews: "4.5k Reviews",
  },
  {
    price: "$64.00",
    oldPrice: "$90.00",
    title: "The Complete 2020 Web Development Bootcamp",
    reviews: "4.5k Reviews",
  },
  {
    price: "$99.00",
    oldPrice: "$90.00",
    title: "Master Business Class English for your business",
    reviews: "4.5k Reviews",
  },
  {
    price: "$60.00",
    oldPrice: "$90.00",
    title: "iOS & Swift - The Complete iOS App Development",
    reviews: "4.5k Reviews",
  },
  {
    price: "$64.00",
    oldPrice: "$90.00",
    title: "The Complete 2020 Web Development Bootcamp",
    reviews: "4.5k Reviews",
  },
  {
    price: "$99.00",
    oldPrice: "$90.00",
    title: "Master Business Class English for your business",
    reviews: "4.5k Reviews",
  },
];

const Courses = () => {
  return (
    <section className="courses-container">
      <h2>Our most popular courses</h2>
      <p>The sky was cloudless and of a deep dark blue the spectacle before us was indeed.</p>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <div className="course-image"></div>
            <div className="course-info">
              <p className="course-price">{course.price} <span className="course-old-price">{course.oldPrice}</span> Course Fee</p>
              <h3>{course.title}</h3>
              <p className="course-reviews">⭐️⭐️⭐️⭐️⭐️ {course.reviews}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="explore-more">
        <button>Explore More</button>
      </div>
    </section>
  );
};

export default Courses;
