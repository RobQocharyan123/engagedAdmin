import { Table } from 'antd';
import { GeneralTableBlock } from './styled';
import { generalTableColumn } from '../Columns/GeneralTableColumn/generalTableColumn';
import { useSelector } from 'react-redux';
import GeneralFilters from './GeneralFilters';

const GeneralTable = () => {
  const dataTable = useSelector((state) => state?.generalTableData?.tableData);

  return (
    <>
      <GeneralFilters />
      <GeneralTableBlock>
        <Table columns={generalTableColumn} dataSource={Array.isArray(dataTable) ?dataTable:[] } />
      </GeneralTableBlock>
    </>
  );
};

export default GeneralTable;
