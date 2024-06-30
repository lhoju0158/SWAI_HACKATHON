const Situation = ({ onClose }) => {
  return (
    <>
      <div className="Situation">
        <div>어떤 상황인가요?</div>
        <button onClick={onClose}>스토킹</button>
        <button onClick={onClose}>폭력 범죄</button>
        <button onClick={onClose}>성범죄</button>
      </div>
    </>
  );
};

export default Situation;
