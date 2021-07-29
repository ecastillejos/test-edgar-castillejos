import Card from "./Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../actions/index";

const Cards = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities);

  useEffect(() => {
    action.getCities(dispatch);
  }, [dispatch]);

  return (
    <div>
      {cities.length > 0 &&
        cities.map((city, index) => {
          return <Card city={city} key={index}></Card>;
        })}
    </div>
  );
};

export default Cards;
