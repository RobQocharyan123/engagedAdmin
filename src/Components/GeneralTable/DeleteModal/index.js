import { useState } from 'react';
import {
  DeleteModalBlock,
  ModalContentBlock,
  ModalFooterButtonBlock,
} from './styled';
import { Button, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { deleteTableItem } from '../../../Services/generalTableService';
import { useDispatch } from 'react-redux';
import { setIsUpdate } from '../../../Slices/generalDataSlice';

const DeleteModal = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsOpen(true);
  };
  const handleOk = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleDeleteItem = async () => {
    try {
      const res = await deleteTableItem(item?._id);

      if (res.status === 'ok') {
        dispatch(setIsUpdate());
        setIsOpen(false);
      }
      return res;
    } catch (err) {
      console.log(err);
    }
  };

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
            <Button onClick={handleDeleteItem}>Yes</Button>
          </ModalFooterButtonBlock>
        }
      >
        <ModalContentBlock>Do you want to delete Item?</ModalContentBlock>
      </DeleteModalBlock>
    </>
  );
};

export default DeleteModal;
