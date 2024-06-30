import "./Item.css";
const Item = ({ type, text }) => {
  return (
    <>
      <div className="Item">
        <div>{type}</div>
        <div>{text}</div>
      </div>
    </>
  );
};
export default Item;
