import { useState } from 'react';
import {
  DeleteModalBlock,
  ModalContentBlock,
  ModalFooterButtonBlock,
} from './styled';
import { Button, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const DeleteModal = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const handleOk = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleDeleteItem = async () => {};

  return (
    <>
      <Tooltip title="Delete" placement="left">
        <DeleteOutlined style={{ fontSize: 20 }} onClick={showModal} />
      </Tooltip>
      <DeleteModalBlock
        title=""
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <ModalFooterButtonBlock>
            <Button onClick={handleCancel}>No</Button>
            <Button>Yes</Button>
          </ModalFooterButtonBlock>
        }
      >
        <ModalContentBlock>Do you want to delete Item?</ModalContentBlock>
      </DeleteModalBlock>
    </>
  );
};

export default DeleteModal;
