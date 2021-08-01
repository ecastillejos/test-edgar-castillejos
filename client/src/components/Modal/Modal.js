import { useDispatch, useSelector } from "react-redux";
import * as action from "../../actions/index";

const Modal = ({ closeMod, city }) => {
  const { title, desciption, source, id } = city[0];
  const dispatch = useDispatch();
  const isLiked = useSelector((state) => state.cities[id].liked);

  const handleClick = (e) => {
    action.likeCity(dispatch, id);
  };

  return (
    <div className="modal-bckgrnd">
      <div className="modal-cnt">
        <div className="cls-modal">
          <div id="cls-bttn" onClick={() => closeMod(false)}>
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="img-modal">
          <img alt="" src={source} />
        </div>
        <div className="info-modal">
          <div>{title}</div>
          <div id={isLiked ? "nhrt-like" : "hrt-like"} onClick={handleClick}>
            <i className="fas fa-heart"></i>
          </div>
        </div>
        <div id="desc-modal">{desciption}</div>
      </div>
    </div>
  );
};

export default Modal;
