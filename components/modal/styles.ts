import styled from "styled-components";

export const ModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  width: 720px;
  height: 100%;
`;
