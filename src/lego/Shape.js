

const Shape = ({ place = [0, 0] , children}) => {
  const commonCss = {
    position: "absolute",
    top: `${place[0]}px`,
    left: `${place[1]}px`,
  };


  return (
    <div style={commonCss}>
      {children}
    </div>
  )
}

export default Shape;