import { Table } from 'antd';
import { GeneralTableBlock } from './styled';
import { generalTableColumn } from '../Columns/GeneralTableColumn/generalTableColumn';
import { useSelector } from 'react-redux';

const GeneralTable = () => {
  const dataTable = useSelector((state) => state?.generalTableData?.tableData);
  console.log(dataTable);

  return (
    <GeneralTableBlock>
      <Table columns={generalTableColumn} dataSource={dataTable} />
    </GeneralTableBlock>
  );
};

export default GeneralTable;
