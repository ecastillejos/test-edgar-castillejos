import Card from "./Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../actions/index";

const Cards = (props) => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities);
  const likedStatus = useSelector((state) => state.likedStatus);
  const [count, setCount] = useState(1);

  const { openMod } = props;

  useEffect(() => {
    action.getCities(dispatch);
  }, [dispatch]);

  useEffect(() => {
    let counter = count;
    const interval = setInterval(() => {
      if (counter >= cities.length) {
        clearInterval(interval);
      } else {
        setCount((count) => count + 1);
        counter++;
      }
    }, 120000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cities]);

  return (
    <div id="cards-cnt">
      {!likedStatus &&
        cities.length > 0 &&
        cities.slice(0, count).map((city) => {
          return <Card city={city} key={city.id} openMod={openMod}></Card>;
        })}
      {likedStatus &&
        cities.length > 0 &&
        cities
          .filter((city) => city.liked === true)
          .map((city) => {
            return <Card city={city} key={city.id} openMod={openMod}></Card>;
          })}
    </div>
  );
};

export default Cards;
