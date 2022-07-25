interface dialogCustomProps {
  children: JSX.Element;
  setOpenModal: Function;
  openModal: boolean;
  searchFieldValue: string;
  setSearchFieldValue: Function;
}

const DialogCustom = ({
  children,
  openModal,
  setOpenModal,
  setSearchFieldValue,
}: dialogCustomProps) => {
  const handleSearchDialog = () => {
    setOpenModal(false);
    setSearchFieldValue("");
  };

  return (
    <div className="sm:hidden md:hidden lg:hidden">
      {openModal ? (
        <div className="bg-white  z-10 absolute w-full h-screen top-0 rounded-t-[42px]  ">
          <div className=" mt-3 px-4">
            <div
              onClick={handleSearchDialog}
              className=" color-black flex justify-end mb-3 cursor-pointer"
            >
              <span className="bg-cancelColor w-6 h-6 pb-1 pl-1">✖</span>
            </div>

            <div className="w-full  ">{children}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DialogCustom;
