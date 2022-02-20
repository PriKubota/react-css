export const InlineStyle = () => {
  const cStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px"
  };
  const tStyle = {
    color: "#3d84a8"
  };
  const bStyle = {
    border: "none"
  };
  return (
    <div style={cStyle}>
      <p style={tStyle}>--inline style--</p>
      <button style={bStyle}>FIGTH</button>
    </div>
  );
};
