import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <div className="screen" mode="single">
      {value}
    </div>
  );
};

export default Screen;