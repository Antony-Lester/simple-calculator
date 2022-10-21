import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <div className="screen" mode="single" max={20}>
      {value}
    </div>
  );
};

export default Screen;