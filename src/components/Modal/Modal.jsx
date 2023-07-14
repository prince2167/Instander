import { createPortal } from "react-dom";
import { useEffect } from "react";

const Modal = ({ showModal, setShowModal, children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [showModal]);
  return createPortal(
    <>
      {showModal && (
        <div>
          <div
            onClick={() => setShowModal(false)}
            className="fixed inset-0 z-40 w-full h-full  bg-opacity-50 bg-black"
          ></div>
          <div className="absolute  z-50 rounded-lg bg-white w-auto h-auto left-1/2 top-1/2  translate-x-[-50%] translate-y-[-50%]  ">
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
