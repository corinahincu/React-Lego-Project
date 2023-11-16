import Shape from "./Shape";

const Hexagon = ({ color, size, ...props }) => {
  const specificCss = {
    width: 0,
    height: 0,

    border: `${color} solid ${size / 2}px`,
    borderBottomWidth: `${size / 2}px`,
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  };

  return (
    <Shape Shape {...props}>

        <div className="hexagon" style={specificCss}></div>

    </Shape>
  );
};

export default Hexagon;
