function Overlay({ handleModal }) {
  return (
    <div
      className="h-screen w-screen absolute overlay cursor-pointer"
      onClick={(e) => handleModal(e)}
    ></div>
  );
}

export default Overlay;
