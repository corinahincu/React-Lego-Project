import Shape from "./Shape";

const Triangle = ({color,size, ...props}) => {

  const specificCss = {
    width: 0,
    height: 0,

    border: `${color} solid ${size / 2}px`,
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopWidth: 0,
    borderBottomWidth: `${size}px`,
  };


  return (
    <Shape Shape {...props}>
      <div style={specificCss}></div>
    </Shape>
  );
};

export default Triangle;
