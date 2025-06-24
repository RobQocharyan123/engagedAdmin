import { Col, Modal } from 'antd';
import styled from 'styled-components';

export const DeleteModalBlock = styled(Modal)``;

export const ModalFooterButtonBlock = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalContentBlock = styled(Col)`
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: gray;
`;
