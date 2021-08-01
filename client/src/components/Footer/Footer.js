const Footer = () => {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date();
  const getDate =
    date.getDate() + "/" + months[date.getMonth()] + "/" + date.getFullYear();

  return (
    <div id="ftr-cnt">
      <div id="ftr-elems">
        <div>{getDate}</div>
        <div>
          <a
            href="https://github.com/ecastillejos/test-edgar-castillejos"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div>E. Castillejos</div>
      </div>
    </div>
  );
};

export default Footer;
