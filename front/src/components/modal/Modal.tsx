import { FC, JSX, ReactNode } from "react";
import { ModalConfig } from "./hooks";

interface ModalProps {
  children: JSX.Element | JSX.Element[] | ReactNode | ReactNode[];
  config: ModalConfig;
}

const Modal: FC<ModalProps> = ({ children, config }) => {
  const { show, close } = config;

  if (!show) {
    return <></>;
  }

  return (
    <>
      <div className="absolute left-1/2 top-1/2 z-50 flex h-fit w-fit -translate-x-1/2 -translate-y-1/2 items-center justify-center p-[20px]">
        <div className="">{children}</div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 top-0 z-40 bg-black bg-opacity-50"
        onClick={close}
      ></div>
    </>
  );
};

export default Modal;
