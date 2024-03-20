/* eslint-disable react/prop-types */
import { RiStarSLine } from "react-icons/ri";

const RatingComp = ({ rating }) => {
  const myStart = [];
  let i = 1;
  while (i <= rating) {
    myStart.push(<RiStarSLine className="text-xl" />);
    i++;
  }

  return (
    <>
      {myStart.map((e, i) => {
        return <span key={i}>{e}</span>;
      })}
    </>
  );
};

export default RatingComp;
