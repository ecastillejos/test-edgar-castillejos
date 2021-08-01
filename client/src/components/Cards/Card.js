import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import * as action from "../../actions/index";

const Card = (props) => {
  const { title, source, liked, id } = props.city;
  const { openMod } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    action.likeCity(dispatch, id);
  };

  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <div id={open ? "card-cnt" : "ncard-cnt"} onClick={() => openMod(id)}>
      <div id="img-crd-cnt">
        {" "}
        <img alt="" src={source} />{" "}
      </div>
      <div id="ttl-like-cnt">
        <div id="ttl-crd"> {title}</div>
        <div id={!liked ? "like-crd" : "nlike-crd"}>
          <i
            onClick={(e) => handleClick(e)}
            id="hrt-like"
            className="fas fa-heart"
          ></i>{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
