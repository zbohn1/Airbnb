const ForwardButton = ({ switchImage }) => {
  return (
    <>
      <button value={1} onClick={switchImage}>
        click forward{" "}
      </button>
    </>
  );
};

export default ForwardButton;
