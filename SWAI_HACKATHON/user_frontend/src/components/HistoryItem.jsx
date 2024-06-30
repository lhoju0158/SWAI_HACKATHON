import "./HistoryItem.css";
import Location from "../assets/ddd.png";

const HistoryItem = ({ onClick, title, info, highlight }) => {
  return (
    <>
      <div className="HistoryItem">
        <div onClick={onClick} className="HItem">
          <img src={Location} alt="Profile" />
          <div className="Htext">
            <div className="Htitle">
              {title}
              {highlight && <span className="highlight">{highlight}</span>}
            </div>
            <div className="Hinfo">{info}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryItem;
