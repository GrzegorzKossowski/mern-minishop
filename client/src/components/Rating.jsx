import React from "react";

/**
 * Shows stars in 5 total rating
 * @param {number} rating float number of avg rating
 * @param {number} reviews integer number of revievs
 * @param {string} color color of stars * 
 */
const Rating = ({ rating, reviews, color = "#f8e825" }) => {
  const stars = [1, 2, 3, 4, 5].map((index) => (
    <i
      key={index}
      style={{ color: color }}
      className={
        rating >= index
          ? "fas fa-star"
          : rating >= index - 0.5
          ? "fas fa-star-half-alt"
          : "far fa-star"
      }
    ></i>
  ));

  return (
    <div className='rating'>
      <span>{stars}</span>{" "}
      <span>
        {rating} from {reviews} reviews
      </span>
    </div>
  );
};

export default Rating;
