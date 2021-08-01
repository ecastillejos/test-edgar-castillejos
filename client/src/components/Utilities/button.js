import { useDispatch, useSelector } from "react-redux";
import * as action from "../../actions/index";

const Button = () => {
  const dispatch = useDispatch();
  const likedStatus = useSelector((state) => state.likedStatus);

  const handleClick = () => {
    action.getLikedCities(dispatch);
  };

  return (
    <button
      id={!likedStatus ? "bttn-nliked" : "bttn-liked"}
      type="button"
      onClick={handleClick}
    >
      Photos you liked
    </button>
  );
};

export default Button;
