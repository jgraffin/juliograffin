import { useState } from "react";
import { ModalWrapper, ModalContent } from "./styles";

const Modal = ({ isOpen, onRequestClose }: any) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <div id="player"></div>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
