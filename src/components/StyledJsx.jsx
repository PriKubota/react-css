export const StyledJsx = () => {
  return (
    <>
      <div className={"container"}>
        <p>- StyledJsx -</p>
        <button>FIGTH</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
        }
      `}</style>
    </>
  );
};
