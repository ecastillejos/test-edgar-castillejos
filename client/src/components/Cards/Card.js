const Card = (props) => {
  const { title, source, liked } = props.city;
  return (
    <div id="card-cnt">
      <div id="img-crd-cnt">
        {" "}
        <img alt="" src={source} />{" "}
      </div>
      <div id="ttl-like-cnt">
        <div id="ttl-crd"> {title}</div>
        <div id="like-crd">
          <i className="far fa-heart"></i>{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
