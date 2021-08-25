import React, { FC } from "react";

import "./Rating.css";

interface Props {
  level: number;
}

const Rating: FC<Props> = ({ level }) => {
  const rateArr = [1, 2, 3, 4, 5];
  return (
    <div className="RatingWrapper">
      {rateArr.map((rate: number) => (
        <span key={`rating-${rate}`} className={rate <= level ? "Skilled" : "NotSkilled"} />
      ))}
    </div>
  );
};

export default Rating;
