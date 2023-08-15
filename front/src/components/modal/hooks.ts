import { useCallback, useState } from "react";

export interface UseModalProps {
  initShow?: boolean;
  onClose?: (() => void) | null;
}

export interface ModalConfig {
  show: boolean;
  open: () => void;
  close: () => void;
}

const defaultProps: Required<UseModalProps> = {
  initShow: false,
  onClose: null,
};

export const useModal = (props: UseModalProps = {}): ModalConfig => {
  const { initShow = defaultProps.initShow, onClose } = props;
  const [show, setShow] = useState<boolean>(initShow);
  const close = useCallback(() => {
    onClose && onClose();
    setShow(false);
  }, [onClose]);

  const open = () => setShow(true);

  return {
    show,
    close,
    open,
  };
};
