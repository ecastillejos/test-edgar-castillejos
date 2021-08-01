import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../actions/index";

import Footer from "../Footer/Footer";
import Cards from "../Cards/Cards";
import Button from "../Utilities/button";
import Modal from "../Modal/Modal";

const Container = () => {
  const [openMod, setOpenMod] = useState(false);
  const city = useSelector((state) => state.cityDetail);
  const dispatch = useDispatch();

  const openModal = (id) => {
    setOpenMod(true);
    action.getDetails(dispatch, id);
  };

  return (
    <div id="home-cnt">
      <div id="cnt">
        <div id="ttl-hm">
          <div>Our Gallery</div>
        </div>
        <div id="cnt-bttn-like">
          <Button></Button>
        </div>
        <Cards openMod={openModal}></Cards>
        {openMod && <Modal closeMod={setOpenMod} city={city} />}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Container;
