import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { GenderBlock, NameBlock, StatuysGeneralBlock } from './styled';
import DeleteModal from '../../GeneralTable/DeleteModal';

export const generalTableColumn = [
  {
    title: 'Gender',
    dataIndex: '',
    key: '',
    render: (item) => {
      return <GenderBlock>{item?.firstOption}</GenderBlock>;
    },
  },

  {
    title: 'Name',
    dataIndex: '',
    key: '',
    render: (item) => {
      return <NameBlock>{item?.name}</NameBlock>;
    },
  },

  {
    title: 'Status',
    dataIndex: '',
    key: '',
    render: (item) => {
      return (
        <StatuysGeneralBlock>
          {item?.secondOption === 'yes' ? (
            <CheckOutlined style={{ color: 'green', fontSize: '20px' }} />
          ) : (
            <CloseOutlined style={{ color: 'red', fontSize: '20px' }} />
          )}
        </StatuysGeneralBlock>
      );
    },
  },
  {
    title: 'Number',
    dataIndex: '',
    key: '',
    render: (item) => {
      return <NameBlock>{item?.number ? item?.number : '---'}</NameBlock>;
    },
  },

  {
    title: '',
    dataIndex: '',
    key: '',
    width: 50,
    render: (item) => {
      return <DeleteModal item={item} />;
    },
  },
];
